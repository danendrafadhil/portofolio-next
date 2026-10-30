import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: {
    default: "Danendra Fadhil Abiyu Hadianto | Portofolio",
    template: "%s | Danendra Fadhil Abiyu Hadianto",
  },
  description:
    "Portofolio Danendra Fadhil Abiyu Hadianto, siswa SMK yang belajar menjadi Junior Web Developer di Kelas Industri UBIG.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-latar text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
