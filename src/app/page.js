import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard";
import ProyekCard from "@/components/ProyekCard";
import Link from "next/link";
import { keahlian } from "@/data/keahlian";
import { proyek } from "@/data/proyek";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-12 px-5 py-12 md:px-8 md:py-16">
      <section className="py-2 md:py-4">
        <Hero
          nama="Danendra Fadhil Abiyu Hadianto"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-bold text-utama">Keahlian</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keahlian.map((item) => (
            <SkillCard key={item.slug} nama={item.nama} level={item.level} />
          ))}
        </div>
        <Link
          href="/keahlian"
          className="mt-5 inline-flex rounded-lg bg-aksen px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
        >
          Lihat semua keahlian
        </Link>
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-utama">Proyek Terbaru</h2>
            <p className="mt-2 text-slate-600">
              Beberapa hasil latihan yang saya buat selama mengikuti kelas.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proyek.slice(0, 3).map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className="mt-5 inline-flex rounded-lg bg-aksen px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}
