
import Hero from "@/components/Hero";
import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";

export default function Home() {
  const skills = [
    { id: 1, nama: "HTML", level: "Menengah" },
    { id: 2, nama: "CSS", level: "Menengah" },
    { id: 3, nama: "Git dan GitHub", level: "Dasar" },
    { id: 4, nama: "Desain poster dengan Canva", level: "Mahir" },
    { id: 5, nama: "JavaScript", level: "Dasar" },
  ];

  const jadwalBelajar = [
    { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
    { hari: "Selasa", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
    { hari: "Rabu", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
  ];

  return (
    <div className="font-sans text-[#1e293b]">
      <main className="max-w-4xl mx-auto p-6 md:p-12 w-full space-y-6">
        
        {/* Section 1: Hero */}
        <Hero
          nama="Danendra Fadhil Abiyu Hadianto"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG." 
        />

        {/* Section 2: Tentang Saya */}
        <Kartu judul="Tentang Saya" id="tentang-saya">
          <p className="text-slate-600 leading-relaxed text-sm">
            Saya tinggal di Malang dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat untuk sekolah dan UMKM di sekitar rumah.
          </p>
        </Kartu>

        {/* Section 3 & 4: Hobi & Cita-Cita Grid (Responsif 2 Kolom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hobi */}
          <Kartu judul="Hobi">
            <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
              <li>Berenang</li>
              <li>Membaca Komik</li>
              <li>Membuat Miniatur</li>
            </ul>
          </Kartu>

          {/* Cita-Cita */}
          <Kartu judul="Cita-cita">
            <p className="text-slate-600 text-sm mb-2">
              Menjadi <span className="font-bold text-[#1e293b]">Full Stack Web Developer</span>. Langkah yang saya rencanakan:
            </p>
            <ol className="list-decimal list-inside text-slate-600 text-sm space-y-1">
              <li>Menuntaskan Kelas Industri UBIG sampai tuntas</li>
              <li>Magang di perusahaan teknologi</li>
              <li>Bekerja sebagai Web Developer</li>
            </ol>
          </Kartu>
        </div>

        {/* Section 5: Keahlian */}
        <Kartu judul="Keahlian" id="keahlian">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.id} nama={skill.nama} level={skill.level} />
            ))}
          </div>
        </Kartu>

        {/* Section 6: Jadwal Belajar */}
        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto rounded-lg border border-slate-100">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="p-3 font-semibold">Hari</th>
                  <th className="p-3 font-semibold">Waktu</th>
                  <th className="p-3 font-semibold">Kegiatan</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {jadwalBelajar.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
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
    </div>
  );
}
