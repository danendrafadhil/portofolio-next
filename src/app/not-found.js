import Link from "next/link";

export const metadata = {
  title: "Halaman tidak ditemukan",
  description: "Halaman yang Anda cari tidak tersedia.",
};

export default function NotFound() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-5 py-20">
      <section className="max-w-xl text-center">
        <p className="text-7xl font-extrabold text-aksen md:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-utama md:text-3xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          Alamat atau halaman web yang Anda cari tidak ada, telah dihapus, atau
          sedang dipindahkan.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-lg bg-utama px-5 py-3 font-semibold text-white transition-colors hover:bg-[#142b45] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-utama"
        >
          Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}
