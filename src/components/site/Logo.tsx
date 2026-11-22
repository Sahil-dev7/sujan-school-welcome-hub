import logoAsset from "@/assets/brand/sujan-school-logo.webp.asset.json";
import { cn } from "@/lib/utils";

/** Native size of the official logo file (keeps the aspect ratio exact). */
const LOGO_WIDTH = 960;
const LOGO_HEIGHT = 1108;

/**
 * The official school logo, shown exactly as supplied (no recolouring or cropping).
 * The file has a white background, so it sits on a white plate on every surface.
 */
export function Crest({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex shrink-0 rounded-lg bg-logo-plate p-1 shadow-soft", className)}>
      <img
        src={logoAsset.url}
        alt="The Sujan Public School, Kantaphod — official logo"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-full w-auto object-contain"
        decoding="async"
      />
    </span>
  );
}

export function Wordmark({ inverted = false, compact = false }: { inverted?: boolean; compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Crest className={compact ? "h-12" : "h-14 md:h-[4.5rem]"} />
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
