"use client";

import { useState } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  function gantiTema() {
    document.documentElement.classList.toggle("dark");
    setGelap(!gelap);
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      aria-pressed={gelap}
      className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-utama focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}
