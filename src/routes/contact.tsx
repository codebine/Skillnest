import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a consultation | Skillnest" },
      { name: "description", content: "Send a quick enquiry about bringing Skillnest programmes to your school." },
      { property: "og:title", content: "Contact Skillnest" },
      { property: "og:description", content: "One focused conversation about your school's rollout." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  return (
    <>
      <PageHero eyebrow="Contact" title="Start with one focused conversation." text="Tell us the essentials and we'll reply within one working day. Not a sales call." />
      <section className="container-x grid gap-10 pb-20 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          {[
            { icon: Mail, t: "Email", d: "hello@skillnest.example" },
            { icon: MessageCircle, t: "WhatsApp", d: "+91 00000 00000" },
            { icon: MapPin, t: "Office", d: "Hyderabad, Telangana" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary"><Icon className="h-5 w-5 text-accent" /></span>
              <div><p className="font-semibold">{t}</p><p className="text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 lg:col-span-3">
          {sent ? (
            <div className="py-10 text-center">
              <h2 className="text-3xl">Thank you!</h2>
              <p className="mt-3 text-muted-foreground">We've received your enquiry and will be in touch shortly.</p>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <h2 className="text-2xl">Quick school enquiry</h2>
              <input required placeholder="School or group name" className={input} />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Your name" className={input} />
                <input required type="email" placeholder="Official email" className={input} />
              </div>
              <textarea rows={5} placeholder="What would you like to discuss?" className={input} />
              <button className="rounded-full bg-primary py-3.5 font-semibold text-primary-foreground hover:opacity-90">Send enquiry</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
