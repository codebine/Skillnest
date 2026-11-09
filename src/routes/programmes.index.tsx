import { createFileRoute } from "@tanstack/react-router";
import { programmes } from "@/lib/site";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { CTA, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/programmes/")({
  head: () => ({
    meta: [
      { title: "Programmes — Skillnest" },
      { name: "description", content: "Entrepreneurship, financial literacy and AI & robotics programmes for grades 1–12." },
      { property: "og:title", content: "Programmes — Skillnest" },
      { property: "og:description", content: "Three skill pathways with clear grade-by-grade progression." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Programmes" title="Three pathways built for real classrooms." text="Pick one or combine all three. Every programme comes with lesson plans, student projects and progress reviews." />
      <section className="container-x grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {programmes.map((p, i) => <ProgrammeCard key={p.slug} p={p} index={i} />)}
      </section>
      <CTA />
    </>
  ),
});
