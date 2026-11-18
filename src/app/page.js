import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard";
import ProyekCard from "@/components/ProyekCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export const revalidate = 60;

export default async function Home() {
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("id");

  const { data: proyekTerbaru } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="mx-auto w-full max-w-6xl space-y-12 px-5 py-12 md:px-8 md:py-16">
      <section className="py-2 md:py-4">
        <Hero
          nama="Danendra Fadhil Abiyu Hadianto"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-bold text-primary">
          Keahlian
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills &&
            skills.map((item) => (
              <SkillCard key={item.id} nama={item.nama} level={item.level} />
            ))}
        </div>
               <Link
          href="/keahlian"
          className={buttonVariants({ size: "lg", className: "mt-6" })}
        >
          Lihat semua keahlian
        </Link>
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Proyek Terbaru
            </h2>
            <p className="mt-2 text-muted-foreground">
              Beberapa hasil latihan yang saya buat selama mengikuti kelas.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(proyekTerbaru || []).map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link
          href="/proyek"
          className={buttonVariants({ size: "lg", className: "mt-6" })}
        >
          Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}
