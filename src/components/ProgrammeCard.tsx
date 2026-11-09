import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { colorClass, type Programme } from "@/lib/site";

export function ProgrammeCard({ p, index }: { p: Programme; index: number }) {
  const c = colorClass[p.color];
  return (
    <Link
      to="/programmes/$slug"
      params={{ slug: p.slug }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.image} alt={p.name} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className={`absolute left-4 top-4 rounded-full ${c.bg} px-3 py-1 text-xs font-bold text-primary-foreground`}>0{index + 1}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{p.name}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{p.short}</p>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold">
          <span className={c.text}>{p.grades}</span>
          <span className="flex items-center gap-1">View programme <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
        </div>
      </div>
    </Link>
  );
}
