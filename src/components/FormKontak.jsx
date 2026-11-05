"use client";

import { useState } from "react";

const kelasInput =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-gray-800 outline-none transition focus:border-utama focus:ring-2 focus:ring-utama/20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState("");

  function kirim(event) {
    event.preventDefault();

    const errorBaru = {};
    const nomorAngka = telepon.replace(/\D/g, "");

    if (!nama.trim()) {
      errorBaru.nama = "Nama wajib diisi.";
    }

    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
    }

    if (nomorAngka.length < 10) {
      errorBaru.telepon = "Nomor HP minimal 10 angka.";
    }

    if (!keperluan) {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }

    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(
      Object.keys(errorBaru).length === 0
        ? `Terima kasih, ${nama.trim()}! Pesanmu sudah lolos pemeriksaan.`
        : ""
    );
  }

  return (
    <form
      onSubmit={kirim}
      noValidate
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8"
    >
      <div>
        <label
          htmlFor="nama"
          className="block font-semibold text-utama dark:text-sky-200"
        >
          Nama lengkap
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          autoComplete="name"
          placeholder="Contoh: Budi Santoso"
          value={nama}
          onChange={(event) => {
            setNama(event.target.value);
            setError({ ...error, nama: "" });
            setBerhasil("");
          }}
          aria-invalid={Boolean(error.nama)}
          aria-describedby={error.nama ? "error-nama" : undefined}
          className={kelasInput}
        />
        {error.nama && (
          <p
            id="error-nama"
            className="mt-1 text-sm text-aksen dark:text-red-400"
            role="alert"
          >
            {error.nama}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-semibold text-utama dark:text-sky-200"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="nama@contoh.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError({ ...error, email: "" });
            setBerhasil("");
          }}
          aria-invalid={Boolean(error.email)}
          aria-describedby={error.email ? "error-email" : undefined}
          className={kelasInput}
        />
        {error.email && (
          <p
            id="error-email"
            className="mt-1 text-sm text-aksen dark:text-red-400"
            role="alert"
          >
            {error.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="telepon"
          className="block font-semibold text-utama dark:text-sky-200"
        >
          Nomor HP
        </label>
        <input
          id="telepon"
          name="telepon"
          type="tel"
          autoComplete="tel"
          placeholder="081234567890"
          value={telepon}
          onChange={(event) => {
            setTelepon(event.target.value);
            setError({ ...error, telepon: "" });
            setBerhasil("");
          }}
          aria-invalid={Boolean(error.telepon)}
          aria-describedby={error.telepon ? "error-telepon" : undefined}
          className={kelasInput}
        />
        {error.telepon && (
          <p
            id="error-telepon"
            className="mt-1 text-sm text-aksen dark:text-red-400"
            role="alert"
          >
            {error.telepon}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="keperluan"
          className="block font-semibold text-utama dark:text-sky-200"
        >
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(event) => {
            setKeperluan(event.target.value);
            setError({ ...error, keperluan: "" });
            setBerhasil("");
          }}
          aria-invalid={Boolean(error.keperluan)}
          aria-describedby={error.keperluan ? "error-keperluan" : undefined}
          className={kelasInput}
        >
          <option value="">-- Pilih keperluan --</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama / Proyek</option>
        </select>
        {error.keperluan && (
          <p
            id="error-keperluan"
            className="mt-1 text-sm text-aksen dark:text-red-400"
            role="alert"
          >
            {error.keperluan}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="pesan"
          className="block font-semibold text-utama dark:text-sky-200"
        >
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows="5"
          placeholder="Tulis pesanmu di sini"
          value={pesan}
          onChange={(event) => {
            setPesan(event.target.value);
            setError({ ...error, pesan: "" });
            setBerhasil("");
          }}
          aria-invalid={Boolean(error.pesan)}
          aria-describedby={error.pesan ? "error-pesan" : undefined}
          className={`${kelasInput} resize-y`}
        />
        {error.pesan && (
          <p
            id="error-pesan"
            className="mt-1 text-sm text-aksen dark:text-red-400"
            role="alert"
          >
            {error.pesan}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-lg bg-aksen px-5 py-3 font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
      >
        Kirim Pesan
      </button>

      <p className="text-sm leading-6 text-slate-500 dark:text-gray-400">
        Form ini belum tersambung ke layanan pengiriman pesan.
      </p>
      {berhasil && (
        <p
          className="rounded-md bg-green-100 p-3 text-sm text-green-900 dark:bg-green-900 dark:text-green-100"
          role="status"
        >
          {berhasil}
        </p>
      )}
    </form>
  );
}
