import Link from "next/link";
import FilterProyek from "@/components/FilterProyek";
import { proyek } from "@/data/proyek";

export const metadata = {
  title: "Proyek",
  description:
    "Daftar proyek HTML, CSS, dan JavaScript karya Danendra Fadhil Abiyu Hadianto.",
};

export default function DaftarProyek() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <header className="mb-8">
        <p className="font-semibold text-aksen dark:text-red-400">
          Hasil belajar
        </p>
        <h1 className="mt-2 text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
          Proyek Saya
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-gray-300">
          Kumpulan hasil belajar saya di Kelas Industri UBIG. Pilih kartu untuk
          melihat detail setiap proyek.
        </p>
      </header>

      {proyek.length > 0 ? (
        <FilterProyek proyek={proyek} />
      ) : (
        <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-utama dark:text-sky-200">
            Belum ada proyek
          </h2>
          <p className="mt-2 text-slate-600 dark:text-gray-300">
            Proyek akan ditampilkan di halaman ini setelah ditambahkan.
          </p>
        </section>
      )}

      <p className="mt-8 text-sm text-slate-600 dark:text-gray-300">
        <Link
          href="/"
          className="font-semibold text-utama hover:underline dark:text-sky-200"
        >
          Kembali ke Beranda
        </Link>
      </p>
    </main>
  );
}
