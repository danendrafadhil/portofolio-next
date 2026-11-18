import Kartu from "@/components/Kartu";

export const metadata = {
  title: "Tentang Saya",
  description:
    "Cerita, hobi, cita-cita, dan jadwal belajar Danendra Fadhil Abiyu Hadianto.",
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
        <h1 className="text-3xl font-bold text-primary md:text-4xl">
          Perkenalan
        </h1>
      </header>

      <Kartu judul="Tentang Saya">
        <p className="leading-7 text-muted-foreground">
          Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi.
          Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM
          di sekitar rumah.
        </p>
      </Kartu>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>Berenang</li>
            <li>Membaca komik</li>
            <li>Membuat miniatur</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-3 text-muted-foreground">
            Menjadi{" "}
            <span className="font-bold text-primary">
              Full Stack Web Developer
            </span>
            . Langkah yang saya rencanakan:
          </p>
          <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
            <li>Menuntaskan Kelas Industri UBIG</li>
            <li>Magang di perusahaan teknologi</li>
            <li>Bekerja sebagai Web Developer</li>
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto rounded-lg border border-border">
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
            <tbody className="text-muted-foreground">
              {jadwalBelajar.map((item) => (
                <tr
                  key={item.hari}
                  className="border-b border-border last:border-0"
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
