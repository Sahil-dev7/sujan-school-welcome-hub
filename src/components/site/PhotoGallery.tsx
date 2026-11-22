import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

import { GALLERY_ORDER, PHOTOS, type PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PhotoNote } from "./Placeholder";

const ASPECTS = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-[5/4]"];

export function PhotoGallery({ keys = GALLERY_ORDER, limit, showFilters = true }: { keys?: PhotoKey[]; limit?: number; showFilters?: boolean }) {
  const all = keys.map((k) => PHOTOS[k]);
  const categories = ["All", ...Array.from(new Set(all.map((p) => p.category)))];
  const [filter, setFilter] = useState("All");
  const shown = (filter === "All" ? all : all.filter((p) => p.category === filter)).slice(0, limit);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const step = useCallback(
    (d: number) => setOpenIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, step]);

  const current = openIndex !== null ? shown[openIndex] : null;

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter photos">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                filter === c ? "border-primary bg-primary text-primary-foreground" : "bg-card text-foreground hover:border-accent hover:text-accent",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {shown.map((p, i) => (
          <li key={p.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl bg-muted shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Open photo: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className={cn("w-full object-cover transition-transform duration-700 group-hover:scale-105", ASPECTS[i % ASPECTS.length])}
                style={{ objectPosition: p.position }}
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 via-ink/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="flex w-full items-center justify-between text-left text-sm text-ink-foreground">
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{p.category}</span>
                    {p.alt}
                  </span>
                  <Expand className="h-4 w-4 shrink-0" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <PhotoNote className="mt-2" />

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-6xl border-0 bg-ink p-0 text-ink-foreground sm:rounded-xl [&>button]:hidden">
          {current && (
            <figure className="relative">
              <DialogTitle className="sr-only">{current.alt}</DialogTitle>
              <DialogDescription className="sr-only">
                Photo {openIndex! + 1} of {shown.length}. Use the arrow keys to move between photos.
              </DialogDescription>
              <img src={current.src} alt={current.alt} className="max-h-[80vh] w-full rounded-t-xl object-contain" />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                <span>
                  <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{current.category}</span>
                  {current.alt}
                </span>
                <span className="tabular-nums text-ink-foreground/60">
                  {openIndex! + 1} / {shown.length}
                </span>
              </figcaption>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 backdrop-blur hover:bg-ink"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 backdrop-blur hover:bg-ink"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Close photo"
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 backdrop-blur hover:bg-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
