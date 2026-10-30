import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillsCard";
import Link from "next/link";
import { keahlian } from "@/data/keahlian";

export const metadata = {
  title: "Tentang Saya",
  description:
    "Cerita, hobi, cita-cita, keahlian, dan jadwal belajar Danendra Fadhil Abiyu Hadianto.",
};

const jadwalBelajar = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  {
    hari: "Selasa",
    waktu: "19.00 - 21.00",
    kegiatan: "Mengerjakan tugas praktik",
  },
  {
    hari: "Rabu",
    waktu: "19.30 - 20.30",
    kegiatan: "Merekam video dan menulis laporan",
  },
];

export default function Tentang() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-5 py-10 md:px-8 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-utama md:text-4xl">
          Perkenalan
        </h1>
      </header>

      <Kartu judul="Tentang Saya">
        <p className="leading-7 text-slate-600">
          Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi.
          Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM
          di sekitar rumah.
        </p>
      </Kartu>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-inside list-disc space-y-2 text-slate-600">
            <li>Berenang</li>
            <li>Membaca komik</li>
            <li>Membuat miniatur</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-3 text-slate-600">
            Menjadi{" "}
            <span className="font-bold text-utama">
              Full Stack Web Developer
            </span>
            . Langkah yang saya rencanakan:
          </p>
          <ol className="list-inside list-decimal space-y-2 text-slate-600">
            <li>Menuntaskan Kelas Industri UBIG</li>
            <li>Magang di perusahaan teknologi</li>
            <li>Bekerja sebagai Web Developer</li>
          </ol>
        </Kartu>
      </div>

      <section id="keahlian" className="scroll-mt-24">
        <h2 className="mb-4 text-2xl font-bold text-utama">
          Keahlian yang Sedang Dipelajari
        </h2>
        <p className="mb-4 text-slate-600">
          Lihat kemampuan dan materi yang sedang saya pelajari.
        </p>
        <p>
          <Link
            href="/keahlian"
            className="font-semibold text-utama underline-offset-4 hover:underline"
          >
            Daftar keahlian
          </Link>
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keahlian.map((item) => (
            <Link
              key={item.slug}
              href={`/keahlian/${item.slug}`}
              className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-utama"
            >
              <SkillCard nama={item.nama} level={item.level} />
            </Link>
          ))}
        </div>
      </section>

      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto rounded-lg border border-slate-100">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-utama text-white">
                <th scope="col" className="p-3 font-semibold">
                  Hari
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Waktu
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Kegiatan
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {jadwalBelajar.map((item) => (
                <tr
                  key={item.hari}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="p-3 font-medium">{item.hari}</td>
                  <td className="p-3">{item.waktu}</td>
                  <td className="p-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}