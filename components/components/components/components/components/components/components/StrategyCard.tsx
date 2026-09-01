import {
  Globe2,
  TrendingUp,
  ShieldCheck,
  PieChart,
  type LucideIcon,
} from "lucide-react";
import { type Strategy } from "@/lib/site";
import Reveal from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  globe: Globe2,
  trending: TrendingUp,
  shield: ShieldCheck,
  pie: PieChart,
};

const RISK_STYLES: Record<string, string> = {
  Conservative: "bg-emerald-100 text-emerald-700",
  Moderate: "bg-amber-100 text-amber-700",
  Aggressive: "bg-rose-100 text-rose-700",
};

interface StrategyCardProps {
  strategy: Strategy;
  index: number;
}

/**
 * Fund card showing objective, risk badge, minimum investment
 * and mock historical performance figures.
 */
export default function StrategyCard({ strategy, index }: StrategyCardProps) {
  const Icon = ICONS[strategy.icon] ?? ShieldCheck;

  return (
    <Reveal delay={(index % 3) * 100}>
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
        {/* Header: icon + risk badge */}
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-mist text-forest transition-colors group-hover:bg-forest group-hover:text-white">
            <Icon className="h-6 w-6" />
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${RISK_STYLES[strategy.risk]}`}
          >
            {strategy.risk}
          </span>
        </div>

        {/* Name + objective */}
        <h3 className="mt-5 text-xl font-semibold text-charcoal">{strategy.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-forest">{strategy.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {strategy.objective}
        </p>

        {/* Minimum investment */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="text-slate-500">Minimum investment</span>
          <span className="font-semibold text-charcoal">{strategy.minInvestment}</span>
        </div>

        {/* Performance table */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-100">
          <div className="grid grid-cols-3 border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-500">
            <span>Period</span>
            <span className="text-center">Return</span>
            <span className="text-right">vs CDI</span>
          </div>
          {strategy.performance.map((p, i) => (
            <div
              key={p.label}
              className={`grid grid-cols-3 px-4 py-2 text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
              }`}
            >
              <span className="text-slate-500">{p.label}</span>
              <span className="text-center font-semibold text-forest">{p.value}</span>
              <span className="text-right text-slate-400">—</span>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
