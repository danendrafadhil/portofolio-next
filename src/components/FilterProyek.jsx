"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";

const kategoriProyek = ["HTML", "CSS", "JavaScript", "Next.js"];

export default function FilterProyek({ proyek }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pencarian, setPencarian] = useState("");

  const hasilPencarian = pencarian.trim().toLowerCase();
  const proyekTerfilter = proyek.filter((item) => {
    const cocokKategori =
      kategoriAktif === "Semua" || item.teknologi.includes(kategoriAktif);
    const cocokPencarian =
      hasilPencarian === "" ||
      item.judul.toLowerCase().includes(hasilPencarian);

    return cocokKategori && cocokPencarian;
  });

  return (
    <section className="mt-8" aria-label="Daftar proyek">
      <div className="flex flex-wrap gap-2" aria-label="Filter kategori">
        {["Semua", ...kategoriProyek].map((kategori) => {
          const aktif = kategoriAktif === kategori;

          return (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriAktif(kategori)}
              aria-pressed={aktif}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-utama ${
                aktif
                  ? "border-aksen bg-aksen text-white"
                  : "border-utama text-utama hover:bg-utama hover:text-white dark:border-sky-200 dark:text-sky-200"
              }`}
            >
              {kategori}
            </button>
          );
        })}
      </div>

      <div className="mt-5 max-w-md">
        <label
          htmlFor="pencarian-proyek"
          className="mb-2 block font-semibold text-utama dark:text-sky-200"
        >
          Cari proyek
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <input
            id="pencarian-proyek"
            type="search"
            value={pencarian}
            onChange={(event) => setPencarian(event.target.value)}
            placeholder="Contoh: kalkulator"
            className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-gray-800 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
          />
          {pencarian && (
            <button
              type="button"
              onClick={() => setPencarian("")}
              className="text-sm font-semibold text-aksen hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen dark:text-red-400"
            >
              Hapus pencarian
            </button>
          )}
        </div>
      </div>

      <p
        className="mt-4 text-sm text-slate-600 dark:text-gray-300"
        aria-live="polite"
      >
        Menampilkan {proyekTerfilter.length} dari {proyek.length} proyek
      </p>

      {proyekTerfilter.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proyekTerfilter.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
      ) : (
        <p
          className="mt-4 rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
          role="status"
        >
          Belum ada proyek yang cocok.
        </p>
      )}
    </section>
  );
}