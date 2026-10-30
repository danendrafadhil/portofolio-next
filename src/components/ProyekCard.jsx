import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  const { slug, judul, deskripsi, gambar, teknologi } = proyek;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/proyek/${slug}`}
        className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-utama"
        aria-label={`Lihat detail ${judul}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={gambar}
            alt={`Tampilan ${judul}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5">
          <ul
            aria-label="Teknologi yang digunakan"
            className="mb-4 flex flex-wrap gap-2"
          >
            {teknologi.map((nama) => (
              <li
                key={nama}
                className="rounded-full bg-latar px-2.5 py-1 text-xs text-slate-700"
              >
                {nama}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold text-utama">{judul}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
            {deskripsi}
          </p>
        </div>
      </Link>
    </article>
  );
}
