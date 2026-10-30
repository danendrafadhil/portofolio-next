import Link from "next/link";
import { notFound } from "next/navigation";
import { keahlian } from "@/data/keahlian";

export function generateStaticParams() {
  return keahlian.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = keahlian.find((keahlianItem) => keahlianItem.slug === slug);

  if (!item) {
    return { title: "Keahlian tidak ditemukan" };
  }

  return {
    title: item.nama,
    description: item.deskripsi,
  };
}

export default async function DetailKeahlian({ params }) {
  const { slug } = await params;
  const item = keahlian.find((keahlianItem) => keahlianItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8 md:py-16">
      <Link
        href="/keahlian"
        className="font-semibold text-utama hover:underline"
      >
        &larr; Kembali ke daftar keahlian
      </Link>
      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <p className="font-semibold text-aksen">
          Tingkat Kemahiran: {item.level}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-utama md:text-4xl">
          {item.nama}
        </h1>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-utama">
            Deskripsi dan Pengalaman
          </h2>
          <p className="mt-3 leading-7 text-slate-600">{item.deskripsi}</p>
        </section>
      </article>
    </main>
  );
}
