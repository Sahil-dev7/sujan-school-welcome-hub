import { cn } from "@/lib/utils";

/**
 * Placeholder crest — replace with the school's official logo when supplied.
 */
export function Crest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 72" className={cn("h-12 w-auto", className)} role="img" aria-label="School crest">
      <path d="M32 2 L60 10 V36 C60 52 48 63 32 70 C16 63 4 52 4 36 V10 Z" className="fill-primary" />
      <path d="M32 7 L55 13.5 V36 C55 49 45.5 58 32 64.5 C18.5 58 9 49 9 36 V13.5 Z" fill="none" className="stroke-gold" strokeWidth="1.5" />
      <path d="M18 40 C23 37 28 37 32 40 C36 37 41 37 46 40 V27 C41 24 36 24 32 27 C28 24 23 24 18 27 Z" className="fill-gold" />
      <path d="M32 27 V40" className="stroke-primary" strokeWidth="1.4" />
      <path d="M32 13 l2.2 4.6 5 .7 -3.6 3.5 .9 5 -4.5-2.4 -4.5 2.4 .9-5 -3.6-3.5 5-.7 z" className="fill-gold" />
      <text x="32" y="54" textAnchor="middle" className="fill-primary-foreground" style={{ font: "600 7px var(--font-sans)", letterSpacing: "0.12em" }}>
        EST. 2004
      </text>
    </svg>
  );
}

export function Wordmark({ inverted = false, compact = false }: { inverted?: boolean; compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Crest className={compact ? "h-10" : "h-12 md:h-14"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-semibold tracking-tight",
            compact ? "text-base md:text-lg" : "text-lg md:text-2xl",
            inverted ? "text-ink-foreground" : "text-primary",
          )}
        >
          The Sujan Public H.S. School
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] md:text-[11px]",
            inverted ? "text-gold" : "text-accent",
          )}
        >
          Kantaphod · Dewas · M.P.
        </span>
      </span>
    </span>
  );
}
