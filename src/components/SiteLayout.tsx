import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/lib/site";

const nav = [
  { to: "/programmes", label: "Programmes" },
  { to: "/why-us", label: "Why us" },
  { to: "/quiz", label: "Student quiz" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-semibold text-primary">
          {BRAND}<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Book a consultation
          </Link>
        </nav>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-1 pb-5 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-base font-medium hover:bg-muted">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-semibold text-primary-foreground">
            Book a consultation
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">{BRAND}<span className="text-accent">.</span></p>
          <p className="mt-3 max-w-sm text-sm opacity-70">Life-skills programmes that fit into the school timetable — and show real results to parents.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold">Explore</p>
          <Link to="/programmes" className="opacity-70 hover:opacity-100">Programmes</Link>
          <Link to="/why-us" className="opacity-70 hover:opacity-100">Why us</Link>
          <Link to="/quiz" className="opacity-70 hover:opacity-100">Student quiz</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold">Get in touch</p>
          <Link to="/contact" className="opacity-70 hover:opacity-100">Contact us</Link>
          <span className="opacity-70">hello@skillnest.example</span>
          <span className="opacity-70">Hyderabad, India</span>
        </div>
      </div>
      <div className="container-x border-t border-ink-foreground/10 py-6 text-xs opacity-60">© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="container-x py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl text-4xl leading-tight md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>
    </section>
  );
}

export function CTA({ children }: { children?: ReactNode }) {
  return (
    <section className="container-x pb-20">
      <div className="rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Next step</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl md:text-5xl">Let's plan the right start for your school.</h2>
        <p className="mx-auto mt-4 max-w-xl opacity-80">One focused conversation to choose programmes, delivery model and a starting grade.</p>
        {children}
        <Link to="/contact" className="mt-8 inline-block rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90">
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
