"use client";

import { useState } from "react";
import ProyekCard from "@/components/ProyekCard";
import { Button } from "@/components/ui/button";

const kategoriProyek = ["Semua","HTML", "CSS", "JavaScript", "Next.js"];

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
    <div className="mt-8">
        <div className="flex flex-wrap gap-2">
            {kategoriProyek.map((k) => (
              <Button key={k} variant={kategoriAktif === k ? "default" : "outline"} onClick={() => setKategoriAktif(k)}>
                {k}
              </Button>
           ))}
         </div>


      <div className="mt-5 max-w-md">
        <label
          htmlFor="pencarian-proyek"
          className="mb-2 block font-semibold text-primary"
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
            <Button variant="link" onClick={() => setKata("")}
              className="mt-2 px-0 text-aksen">
            Hapus pencarian
            </Button>
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
    </div>
  );
}