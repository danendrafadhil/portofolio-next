"use client";

import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Formulir ini belum terhubung ke layanan pengiriman pesan, jadi pesan belum dikirim."
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div>
        <label htmlFor="nama" className="mb-2 block font-semibold text-utama">
          Nama lengkap
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          autoComplete="name"
          placeholder="Contoh: Budi Santoso"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-semibold text-utama">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nama@contoh.com"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20"
        />
      </div>

      <div>
        <label htmlFor="telepon" className="mb-2 block font-semibold text-utama">
          Nomor HP
        </label>
        <input
          id="telepon"
          name="telepon"
          type="tel"
          autoComplete="tel"
          placeholder="081234567890"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20"
        />
      </div>

      <div>
        <label htmlFor="subjek" className="mb-2 block font-semibold text-utama">
          Keperluan
        </label>
        <select
          id="subjek"
          name="subjek"
          defaultValue=""
          required
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20"
        >
          <option value="" disabled>
            Pilih keperluan
          </option>
          <option value="kerja-sama">Kerja sama / Proyek</option>
          <option value="pertanyaan-umum">Pertanyaan Umum</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="pesan"
          className="mb-2 block font-semibold text-utama"
        >
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows="5"
          placeholder="Tulis pesan Anda di sini..."
          required
          className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20"
        />
      </div>

      <p className="text-sm leading-6 text-slate-500">
        Form ini belum tersambung ke layanan email. Pesan yang diisi tidak akan
        dikirim atau disimpan.
      </p>
      <button
        type="submit"
        className="rounded-lg bg-aksen px-5 py-3 font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
      >
        Kirim Pesan
      </button>
      {message && (
        <p role="status" className="text-sm font-medium text-aksen">
          {message}
        </p>
      )}
    </form>
  );
}
