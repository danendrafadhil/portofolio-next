import Link from "next/link";
import { keahlian } from "@/data/keahlian";

export const metadata = {
  title: "Keahlian",
  description:
    "Daftar kompetensi dan keahlian yang sedang dipelajari Danendra Fadhil Abiyu Hadianto.",
};

export default function KeahlianPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-utama md:text-4xl">
          Keahlian Saya
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Daftar kompetensi dan keahlian yang telah dan sedang saya pelajari.
          Pilih keahlian untuk membaca keterangannya.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {keahlian.map((item) => (
          <Link
            key={item.slug}
            href={`/keahlian/${item.slug}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-utama"
          >
            <h2 className="text-lg font-semibold text-utama group-hover:underline">
              {item.nama}
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Level: {item.level}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-utama">
              Lihat detail &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
