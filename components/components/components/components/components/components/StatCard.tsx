import Reveal from "./Reveal";

interface StatCardProps {
  value: string;
  label: string;
  detail: string;
  index: number;
}

/**
 * Single metric card used in the homepage "Key Metrics" grid.
 * A subtle top border in forest green ties the row together.
 */
export default function StatCard({ value, label, detail, index }: StatCardProps) {
  return (
    <Reveal delay={index * 100}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Accent line */}
        <span className="absolute inset-x-0 top-0 h-1 bg-forest transition-transform duration-300 group-hover:h-1.5" />

        <p className="text-4xl font-semibold tracking-tight text-forest">{value}</p>
        <h3 className="mt-3 text-base font-semibold text-charcoal">{label}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{detail}</p>
      </div>
    </Reveal>
  );
}
