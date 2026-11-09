import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, FolderOpen, Landmark, GraduationCap, Users, BarChart3 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CTA, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why schools choose Skillnest" },
      { name: "description", content: "Structure, student evidence and a clear story for leadership — beyond one-off workshops." },
      { property: "og:title", content: "Why schools choose Skillnest" },
      { property: "og:description", content: "A life-skills programme your school can confidently explain." },
    ],
  }),
  component: WhyUs,
});

const points = [
  { icon: CalendarCheck, t: "Steady rhythm", d: "Grade plans, review checkpoints and a dependable yearly calendar." },
  { icon: FolderOpen, t: "Student work", d: "Projects, showcases and presentations families can see and touch." },
  { icon: Landmark, t: "A clear story", d: "A confident answer to “what are we building beyond academics?”" },
  { icon: GraduationCap, t: "Policy aligned", d: "Mapped to NEP 2020 and NCF 2023 across all major boards." },
  { icon: Users, t: "Teacher support", d: "Training, toolkits and ongoing help for your staff." },
  { icon: BarChart3, t: "Visible progress", d: "Simple reports for leadership and parents each term." },
];

function WhyUs() {
  return (
    <>
      <PageHero eyebrow="Why us" title="A programme your school can confidently explain." text="Leaders need more than nice session photos. They need evidence, progression and a coherent story." />
      <section className="container-x grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {points.map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-3xl border border-border bg-card p-7">
            <Icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-2xl">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="container-x pb-20">
        <img src={hero} alt="Classroom session" loading="lazy" width={1600} height={1008} className="aspect-[16/7] w-full rounded-3xl object-cover" />
      </section>
      <CTA />
    </>
  );
}
