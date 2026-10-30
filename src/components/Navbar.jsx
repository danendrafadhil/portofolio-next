"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/keahlian", label: "Keahlian" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  }

  return (
    <header className="w-full bg-[#0f263b] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Danendra Fadhil Abiyu Hadianto
        </Link>
        <nav aria-label="Navigasi utama">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {menu.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-block border-b-2 py-1 text-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      active
                        ? "border-white font-semibold text-white"
                        : "border-transparent text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
