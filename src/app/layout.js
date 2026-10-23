import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Danendra  Fadhil Abiyu Hadianto | portofolio",
  description: "portofolio Danendra  Fadhil Abiyu Hadianto, siswa SMK calon Junior Web Developer di kelas Industri UBIG",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">{children}</body>
    </html>
  );
}
