import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Danendra Fadhil Abiyu Hadianto.",
};

export default function KontakPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <header className="mb-8">
        <p className="font-semibold text-aksen dark:text-red-400">
          Ada pertanyaan?
        </p>
        <h1 className="mt-2 text-3xl font-bold text-primary md:text-4xl">
          Hubungi Saya
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
          Punya pertanyaan atau ingin bekerja sama? Isi formulir berikut.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Temukan Saya di
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/danendrafadhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-aksen hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:danendrafadhil.abiyu11@gmail.com"
                  className="break-all text-aksen hover:underline"
                >
                  danendrafadhil.abiyu11@gmail.com
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
