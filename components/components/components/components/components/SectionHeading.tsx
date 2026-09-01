import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/**
 * Consistent heading block for every page section:
 * small uppercase eyebrow, bold title, optional description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-forest/20 bg-forest-mist px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-forest">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-slate-600">{description}</p>
        )}
      </div>
    </Reveal>
  );
}
