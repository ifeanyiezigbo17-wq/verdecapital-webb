import type { Metadata } from "next";
import { Briefcase, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StrategyCard from "@/components/StrategyCard";
import Reveal from "@/components/Reveal";
import { STRATEGIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investment Strategies",
  description:
    "Explore Verde Capital's institutional fund strategies: Macro, Equity Long-Only, Fixed Income and Multi-Asset Income.",
};

export default function StrategiesPage() {
  return (
    <>
      {/* ================= PAGE HERO ================= */}
      <section className="bg-forest-dark pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              <Briefcase className="h-3.5 w-3.5" />
              Investment Strategies
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Funds engineered for every cycle.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/80">
              A focused lineup of institutional strategies — each with a clear
              objective, defined risk budget and a track record built on
              discipline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= DISCLAIMER STRIP ================= */}
      <div className="border-b border-slate-200 bg-slate-100/70">
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-6 py-4 text-xs leading-relaxed text-slate-500 lg:px-8">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
          <p>
            Performance figures shown are illustrative mock data for
            demonstration purposes. Investments in funds involve risk and past
            performance does not guarantee future results. Always read the fund
            regulations before investing.
          </p>
        </div>
      </div>

      {/* ================= STRATEGY GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Our Funds"
          title="Four strategies. One discipline."
          description="Each fund is managed by a dedicated team with deep domain expertise and governed by our firm-wide risk framework."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {STRATEGIES.map((strategy, i) => (
            <StrategyCard key={strategy.name} strategy={strategy} index={i} />
          ))}
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="bg-forest py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Interested in institutional allocation?
            </h2>
            <p className="mt-2 text-emerald-100/80">
              Our team can tailor a mandate to your organization&apos;s needs.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-emerald-100"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
