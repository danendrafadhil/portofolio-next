import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proyek } from "@/data/proyek";

export function generateStaticParams() {
  return proyek.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = proyek.find((proyekItem) => proyekItem.slug === slug);

  if (!item) {
    return {
      title: "Proyek tidak ditemukan",
    };
  }

  return {
    title: item.judul,
    description: item.deskripsi,
  };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const item = proyek.find((proyekItem) => proyekItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8 md:py-16">
      <Link
        href="/proyek"
        className="font-semibold text-utama hover:underline"
      >
        &larr; Kembali ke daftar proyek
      </Link>

      <article className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] bg-slate-100">
          <Image
            src={item.gambar}
            alt={`Tampilan ${item.judul}`}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-10">
          <p className="text-sm font-medium text-slate-600">
            {item.kategori} <span aria-hidden="true">&middot;</span> Dibuat di{" "}
            {item.minggu}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-utama md:text-4xl">
            {item.judul}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {item.ringkasan}
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-utama">
              Yang Saya Pelajari
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-3 text-slate-600">
              {item.halYangDipelajari.map((hal) => (
                <li key={hal}>{hal}</li>
              ))}
            </ul>
          </section>

          <Link
            href="/proyek"
            className="mt-10 inline-flex rounded-lg bg-utama px-5 py-3 font-semibold text-white transition-colors hover:bg-[#142b45] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-utama"
          >
            Lihat semua proyek
          </Link>
        </div>
      </article>
    </main>
  );
}
