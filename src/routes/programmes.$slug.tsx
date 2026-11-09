import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { colorClass, programmes } from "@/lib/site";
import { CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/programmes/$slug")({
  loader: ({ params }) => {
    const p = programmes.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ loaderData }) => {
    const p = programmes.find((x) => x.slug === loaderData?.slug);
    const title = p ? `${p.name} — Skillnest` : "Programme — Skillnest";
    return {
      meta: [
        { title },
        { name: "description", content: p?.short ?? "Skillnest programme" },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.short ?? "Skillnest programme" },
      ],
    };
  },
  component: Detail,
});

function Detail() {
  const { slug } = Route.useLoaderData();
  const p = programmes.find((x) => x.slug === slug)!;
  const c = colorClass[p.color];
  return (
    <>
      <section className="container-x grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
        <div>
          <Link to="/programmes" className="text-sm text-muted-foreground hover:text-foreground">← All programmes</Link>
          <p className={`mt-6 text-sm font-semibold uppercase tracking-widest ${c.text}`}>{p.grades}</p>
          <h1 className="mt-3 text-4xl md:text-6xl">{p.name}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{p.short}</p>
        </div>
        <img src={p.image} alt={p.name} width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
      </section>

      <section className="container-x py-12">
        <h2 className="text-3xl md:text-4xl">What students gain</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.outcomes.map((o) => (
            <div key={o} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 font-semibold">
              <Check className={`h-5 w-5 ${c.text}`} />{o}
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-12 pb-20">
        <h2 className="text-3xl md:text-4xl">Grade journey</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {p.stages.map((s, i) => (
            <li key={s.band} className="rounded-3xl border border-border bg-card p-7">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${c.bg} font-bold text-primary-foreground`}>{i + 1}</span>
              <p className="mt-4 font-display text-2xl">{s.band}</p>
              <p className="mt-2 text-muted-foreground">{s.focus}</p>
            </li>
          ))}
        </ol>
      </section>
      <CTA />
    </>
  );
}
