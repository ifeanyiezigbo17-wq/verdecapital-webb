import { TICKER_ITEMS } from "@/lib/site";

/**
 * A horizontal auto-scrolling market data strip.
 * Uses CSS animation (defined in tailwind.config.ts as `animate-marquee`)
 * which translates the duplicated list by -50% for a seamless loop.
 */
export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden border-y border-forest/10 bg-forest-dark py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="flex items-center gap-2 text-sm text-emerald-100/90"
          >
            <span className="font-medium uppercase tracking-wider text-emerald-300/70">
              {item.label}
            </span>
            <span className="text-emerald-50">{item.value}</span>
            <span className="ml-4 text-emerald-300/30">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
