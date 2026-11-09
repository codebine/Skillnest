import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { quizQuestions } from "@/lib/site";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Student Strengths Quiz — Skillnest" },
      { name: "description", content: "A free 3-minute quiz for ages 8+ across ideas, money, technology and leadership." },
      { property: "og:title", content: "Student Strengths Quiz — Skillnest" },
      { property: "og:description", content: "Instant result, no sign-up, nothing stored." },
    ],
  }),
  component: Quiz,
});

export function resultBand(score: number, total: number) {
  const pct = score / (total * 2);
  if (pct >= 0.75) return "Future leader";
  if (pct >= 0.4) return "Builder";
  return "Explorer";
}

function Quiz() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const total = quizQuestions.length;
  const current = quizQuestions[step] ?? quizQuestions[0]!;
  const done = step >= total;

  const input = "w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

  return (
    <section className="container-x flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-xl md:p-10">
        {!started ? (
          <form onSubmit={(e) => { e.preventDefault(); setStarted(true); }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Student check</p>
            <h1 className="mt-3 text-3xl md:text-4xl">Enter a name and begin.</h1>
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Student name" className={`${input} mt-6`} />
            <input required type="number" min={6} max={18} placeholder="Age" className={`${input} mt-3`} />
            <button className="mt-6 w-full rounded-full bg-primary py-3.5 font-semibold text-primary-foreground">Start the quiz</button>
            <p className="mt-3 text-center text-xs text-muted-foreground">{total} questions · about 3 minutes · instant result</p>
          </form>
        ) : done ? (
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Result</p>
            <h1 className="mt-3 text-4xl md:text-5xl">{name}, you're a <span className="text-accent">{resultBand(score, total)}</span>!</h1>
            <p className="mt-4 text-muted-foreground">Score: {score} / {total * 2}</p>
            <button onClick={() => { setStep(0); setScore(0); }} className="mt-8 rounded-full border border-foreground/20 px-6 py-3 font-semibold hover:bg-muted">Try again</button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {step + 1} / {total}</span>
              <span>{current.topic}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full bg-accent transition-all" style={{ width: `${(step / total) * 100}%` }} />
            </div>
            <h2 className="mt-8 text-2xl md:text-3xl">{current.q}</h2>
            <div className="mt-6 space-y-3">
              {current.options.map((o, i) => (
                <button key={o} onClick={() => { setScore(score + i); setStep(step + 1); }} className="flex w-full items-center gap-4 rounded-2xl border border-border p-4 text-left hover:border-accent hover:bg-muted">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary font-bold">{"ABC"[i]}</span>
                  {o}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
