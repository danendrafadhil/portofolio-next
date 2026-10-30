import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Danendra Fadhil Abiyu Hadianto.",
};

export default function KontakPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <header className="mb-8">
        <p className="font-semibold text-aksen">Ada pertanyaan?</p>
        <h1 className="mt-2 text-3xl font-bold text-utama md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Punya pertanyaan atau ingin bekerja sama? Isi formulir berikut.
        </p>
      </header>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(10rem,1fr)] md:gap-5">
        <ContactForm />
        <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <h2 className="text-xl font-bold text-utama">Temukan Saya di</h2>
          <ul className="mt-3 space-y-3">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm text-aksen hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:danendrafadhil.abiyu11@gmail.com"
                className="break-all text-sm text-aksen hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aksen"
              >
                danendrafadhil.abiyu11@gmail.com
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
