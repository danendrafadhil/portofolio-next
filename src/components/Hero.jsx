import Image from "next/image";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
      <Image
        src="/foto-ku.jpeg"
        alt={`Foto profil ${nama}`}
        width={180}
        height={180}
        loading="eager"
        className="h-36 w-36 shrink-0 rounded-full border-4 border-aksen object-cover md:h-44 md:w-44"
      />
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-utama md:text-5xl">
          Halo, saya {nama}!
        </h1>
        <p className="mt-3 text-lg text-gray-700">{tagline}</p>
        <nav
          aria-label="Navigasi portofolio"
          className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start"
        >
          <a
            href="#tentang-saya"
            className="rounded-lg bg-aksen px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
          >
            Tentang saya
          </a>
          <a
            href="#keahlian"
            className="rounded-lg border border-utama px-4 py-2 text-sm font-semibold text-utama transition-colors hover:bg-utama hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-utama"
          >
            Lihat keahlian
          </a>
        </nav>
      </div>
    </section>
  );
}
