import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  TrendingUp,
  Landmark,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import StatCard from "@/components/StatCard";
import SectionHeading from "@/components/SectionHeading";
import { METRICS, SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-forest-dark pt-32 pb-24 sm:pt-40 sm:pb-32">
        {/* Decorative background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/60 to-forest-dark" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
              <Landmark className="h-3.5 w-3.5" />
              Institutional Asset Management
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Preserving capital,{" "}
              <span className="text-emerald-300">compounding value</span> across
              generations.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/80">
              {SITE.name} is a Brazilian investment firm built on disciplined risk
              management and a long-term institutional mindset. We serve pension
              funds, family offices and corporations with strategies designed to
              endure every market cycle.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/strategies"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-emerald-100"
              >
                Explore Funds
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-300/40 px-7 py-3.5 text-sm font-semibold text-emerald-50 transition-colors hover:bg-emerald-300/10"
              >
                Our Firm
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= MARKET TICKER ================= */}
      <Ticker />

      {/* ================= KEY METRICS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Institutional Strength"
          title="A legacy measured in decades"
          description="Proven stewardship across market cycles, serving the most demanding institutional clients in Brazil."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <StatCard key={metric.label} {...metric} index={i} />
          ))}
        </div>
      </section>

      {/* ================= CORE PHILOSOPHY ================= */}
      <section className="bg-slate-100/70 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Image side */}
          <Reveal from="left">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-forest/20" />
              <Image
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80"
                alt="Financial analysts reviewing risk models"
                width={1200}
                height={800}
                className="relative rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </Reveal>

          {/* Text side */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Core Philosophy"
              title="Risk first. Returns follow."
              description="Every allocation we make starts with a question of preservation. We believe wealth that endures is built on discipline, transparency and an unwavering commitment to protecting capital."
            />

            <div className="mt-10 space-y-6">
              <Reveal delay={100}>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Capital Preservation
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Rigorous drawdown limits and stress-testing ensure our
                      strategies protect principal in adverse scenarios.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <BarChart3 className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Disciplined Risk Management
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Independent risk oversight, daily limits and transparent
                      reporting across every fund.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-white">
                    <TrendingUp className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Long-Term Compounding
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      We invest alongside our clients with horizons measured in
                      years, not quarters.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="bg-forest py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready to build a lasting portfolio?
            </h2>
            <p className="mt-2 text-emerald-100/80">
              Speak with our institutional relationship team today.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-emerald-100"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
