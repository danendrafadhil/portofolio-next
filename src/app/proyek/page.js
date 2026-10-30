import Link from "next/link";
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";

export const metadata = {
  title: "Proyek",
  description:
    "Kumpulan proyek dan hasil belajar Danendra Fadhil Abiyu Hadianto.",
};

export default function ProyekPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <header className="mb-8">
        <p className="font-semibold text-aksen">Hasil belajar</p>
        <h1 className="mt-2 text-3xl font-bold text-utama md:text-4xl">
          Proyek Saya
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Kumpulan hasil belajar saya di Kelas Industri UBIG. Pilih kartu untuk
          melihat detail setiap proyek.
        </p>
      </header>

      {proyek.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proyek.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
      ) : (
        <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-xl font-semibold text-utama">
            Belum ada proyek
          </h2>
          <p className="mt-2 text-slate-600">
            Proyek akan ditampilkan di halaman ini setelah ditambahkan.
          </p>
        </section>
      )}

      <p className="mt-8 text-sm text-slate-600">
        <Link href="/" className="font-semibold text-utama hover:underline">
          Kembali ke Beranda
        </Link>
      </p>
    </main>
  );
}
