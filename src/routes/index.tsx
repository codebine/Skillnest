import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { programmes } from "@/lib/site";
import { ProgrammeCard } from "@/components/ProgrammeCard";
import { CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skillnest — Future-ready learning for schools" },
      { name: "description", content: "Curriculum, trained delivery and visible student outcomes for entrepreneurship, money skills and AI & robotics." },
      { property: "og:title", content: "Skillnest — Future-ready learning for schools" },
      { property: "og:description", content: "Life-skills programmes that fit the timetable and show real results." },
    ],
  }),
  component: Index,
});

const badges = ["NEP 2020", "NCF 2023", "CBSE", "ICSE", "IB", "State boards", "Grades 1–12", "Teacher training", "Parent showcases"];

const testimonials = [
  { q: "Our teachers can actually run it, and parents finally understand what skill-based learning looks like.", who: "Academic Coordinator", where: "CBSE school, Hyderabad" },
  { q: "The student projects give us real evidence to share at annual day and in board reviews.", who: "Principal", where: "ICSE school, Telangana" },
  { q: "We needed structure more than one-off workshops. This fits neatly into our weekly timetable.", who: "Senior School Head", where: "IB school, Andhra Pradesh" },
];

function Index() {
  return (
    <>
      <section className="container-x grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">For schools · Grades 1–12</p>
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-7xl">
            Future-ready learning, <em className="text-accent">made simple</em> for schools.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Skillnest combines curriculum, trained delivery and visible student outcomes — so life skills fit the timetable and win parents' trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:opacity-90">Book a consultation</Link>
            <Link to="/programmes" className="rounded-full border border-foreground/20 px-6 py-3.5 font-semibold hover:bg-muted">Explore programmes</Link>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="Facilitator leading a lively classroom session" width={1600} height={1008} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" />
          <div className="absolute -bottom-6 left-4 rounded-2xl bg-card p-4 shadow-xl sm:left-[-1.5rem]">
            <p className="font-display text-3xl text-accent">12</p>
            <p className="text-xs text-muted-foreground">grades of guided progression</p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-card py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-sm font-semibold text-muted-foreground">
          {[...badges, ...badges].map((b, i) => <span key={i}>{b} <span className="ml-10 text-accent">✦</span></span>)}
        </div>
      </div>

      <section className="container-x py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">At a glance</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            ["3", "Programme areas", "Entrepreneurship, money skills, and AI & robotics."],
            ["12", "Grades covered", "Age-appropriate steps from grade 1 to grade 12."],
            ["2", "Delivery models", "We teach it, or we train your teachers."],
          ].map(([n, t, d]) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-6">
              <p className="font-display text-6xl text-primary">{n}</p>
              <p className="mt-2 font-semibold">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="max-w-3xl text-3xl md:text-5xl">Three learning pathways, one connected system.</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Each area has its own grade journey and its own colour, so everyone always knows which programme they're looking at.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p, i) => <ProgrammeCard key={p.slug} p={p} index={i} />)}
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="max-w-3xl text-3xl md:text-5xl">Any board. Two ways to deliver.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { by: "Our facilitators", items: ["Specialist trainers on campus", "Ready session plans", "Regular progress reviews"], fit: "Best for schools that want us to run everything." },
            { by: "Your teachers", items: ["Complete curriculum kits", "Hands-on teacher training", "Implementation check-ins"], fit: "Best for schools building in-house capability." },
          ].map((m, i) => (
            <div key={m.by} className={`rounded-3xl p-8 ${i === 0 ? "bg-ink text-ink-foreground" : "border border-border bg-card"}`}>
              <p className="text-sm opacity-70">Led by</p>
              <h3 className="text-3xl">{m.by}</h3>
              <ul className="mt-6 space-y-3">
                {m.items.map((it) => <li key={it} className="flex items-center gap-3"><Check className="h-5 w-5 text-accent" />{it}</li>)}
              </ul>
              <p className="mt-6 text-sm opacity-70">{m.fit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid items-center gap-10 rounded-3xl bg-secondary p-8 md:p-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Free student quiz</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Find your child's future strengths.</h2>
            <p className="mt-4 text-muted-foreground">A quick, friendly check across ideas, money sense, technology and leadership — with an instant result.</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[["8+", "Ages"], ["8", "Questions"], ["3 min", "To finish"]].map(([a, b]) => (
                <div key={b}><p className="font-display text-3xl">{a}</p><p className="text-xs text-muted-foreground">{b}</p></div>
              ))}
            </div>
            <Link to="/quiz" className="mt-8 inline-block rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground">Start the quiz</Link>
            <p className="mt-3 text-xs text-muted-foreground">Free · no sign-up · nothing saved</p>
          </div>
          <div className="space-y-3">
            {["Explorer", "Builder", "Future leader"].map((b, i) => (
              <div key={b} className="flex items-center gap-4 rounded-2xl bg-card p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">{i + 1}</span>
                <span className="font-semibold">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="max-w-3xl text-3xl md:text-5xl">What school leaders tell us.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.who} className="flex flex-col rounded-3xl border border-border bg-card p-7">
              <blockquote className="flex-1 font-display text-xl leading-snug">“{t.q}”</blockquote>
              <figcaption className="mt-6 text-sm"><b>{t.who}</b><br /><span className="text-muted-foreground">{t.where}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
