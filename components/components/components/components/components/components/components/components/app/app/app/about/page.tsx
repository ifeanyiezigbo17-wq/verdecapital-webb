Enterimport type { Metadata } from "next";
import Image from "next/image";
import { Award, Building2, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import LeadershipCard from "@/components/LeadershipCard";
import Reveal from "@/components/Reveal";
import { LEADERSHIP, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Verde Capital's legacy, investment philosophy and the leadership team behind our institutional strategies.",
};

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Capital Preservation",
    text: "Our first and most important mandate. Every strategy is engineered around protecting principal before seeking returns.",
  },
  {
    icon: Award,
    title: "Institutional Discipline",
    text: "Independent risk committees, transparent reporting and processes built for the most demanding allocators.",
  },
  {
    icon: Users,
    title: "Client Alignment",
    text: "We invest meaningfully alongside our clients, sharing both the risks and the rewards of every decision.",
  },
  {
    icon: Building2,
    title: "Long-Term Horizon",
    text: "We measure success in decades. Our decisions are made with the next generation of capital in mind.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="bg-forest-dark pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              <Building2 className="h-3.5 w-3.5" />
              About Us
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              A quarter-century of disciplined stewardship.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/80">
              Founded in 2001, {SITE.name} has grown from a boutique advisory
              into one of Brazil&apos;s most respected independent asset
              managers — without ever compromising the principles we started
              with.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FIRM OVERVIEW ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Firm Overview"
              title="Built on trust. Measured by results."
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-600">
              <Reveal delay={100}>
                <p>
                  {SITE.name} began with a simple conviction: that Brazilian
                  capital deserved the same institutional discipline found in
                  the world&apos;s most sophisticated markets. Today we manage
                  over R$ 18 billion across macro, equity and fixed income
                  strategies.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  Our culture is defined by humility before the market and
                  rigor in every process. Independent risk management sits at
                  the heart of our operating model, ensuring that no single
                  decision ever compromises the portfolio.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  We remain privately held, employee-owned and fully aligned
                  with the clients we serve — a structure we believe is
                  fundamental to long-term fiduciary duty.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal from="right">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border-2 border-forest/20" />
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Verde Capital office"
                width={1200}
                height={800}
                className="relative rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-mist text-forest">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-semibold text-charcoal">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="bg-slate-100/70 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="The team behind the legacy"
            description="Seasoned professionals with decades of combined experience across Latin American capital markets."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((leader, i) => (
              <LeadershipCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
