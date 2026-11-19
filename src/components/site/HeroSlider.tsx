import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { PHOTOS, type PhotoKey } from "@/lib/photos";
import { SCHOOL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SLIDES: { photo: PhotoKey; eyebrow: string; title: string; text: string }[] = [
  {
    photo: "campus",
    eyebrow: `Kantaphod · Since ${SCHOOL.established}`,
    title: "Building Knowledge, Character and Confidence",
    text: `An English-medium, co-educational school affiliated to the ${SCHOOL.board}.`,
  },
  {
    photo: "classroom",
    eyebrow: "Academics",
    title: "Where Learning Meets Excellence",
    text: "Lessons that encourage every child to ask, think and take part.",
  },
  {
    photo: "sports",
    eyebrow: "Sports & Games",
    title: "Strong Bodies, Strong Spirits",
    text: "Games and activities that build fitness, teamwork and fair play.",
  },
  {
    photo: "cultural",
    eyebrow: "Culture & Celebration",
    title: "Education for a Brighter Tomorrow",
    text: "A stage for every talent, rooted in the traditions of Malwa and India.",
  },
];

const INTERVAL = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const go = useCallback((n: number) => setIndex((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused || hovering) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => go(index + 1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [index, paused, hovering, go]);

  return (
    <section
      className="relative isolate h-[calc(100svh-7rem)] min-h-[560px] max-h-[860px] overflow-hidden bg-ink text-ink-foreground"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
    >
      {SLIDES.map((s, i) => {
        const photo = PHOTOS[s.photo];
        const active = i === index;
        return (
          <div
            key={s.photo}
            className={cn("absolute inset-0 transition-opacity duration-[1200ms]", active ? "z-10 opacity-100" : "z-0 opacity-0")}
            aria-hidden={!active}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${SLIDES.length}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className={cn("absolute inset-0 h-full w-full object-cover", active && "animate-kenburns")}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
            <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden="true" />
            <div className="container-site relative flex h-full flex-col justify-center pb-16">
              {active && (
                <div className="max-w-2xl">
                  <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.26em] text-gold animate-rise">
                    <span className="h-px w-10 bg-gold" aria-hidden="true" />
                    {s.eyebrow}
                  </p>
                  {i === 0 ? (
                    <h1 className="mt-5 text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-7xl animate-rise" style={{ animationDelay: "120ms" }}>
                      {s.title}
                    </h1>
                  ) : (
                    <p className="mt-5 font-display text-4xl font-semibold leading-[1.04] sm:text-5xl md:text-7xl animate-rise" style={{ animationDelay: "120ms" }}>
                      {s.title}
                    </p>
                  )}
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/85 md:text-xl animate-rise" style={{ animationDelay: "240ms" }}>
                    {s.text}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3 animate-rise" style={{ animationDelay: "360ms" }}>
                    <Button asChild size="lg" className="h-12 bg-accent px-7 text-accent-foreground hover:bg-accent/90">
                      <Link to="/$section/$page" params={{ section: "admissions", page: "enquiry" }}>
                        Admission Enquiry <ArrowRight />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-12 border-ink-foreground/40 bg-transparent px-7 text-ink-foreground hover:bg-ink-foreground hover:text-ink"
                    >
                      <Link to="/$section/$page" params={{ section: "about", page: "introduction" }}>
                        Discover the School
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="container-site flex items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.photo}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className="group flex h-8 items-center"
              >
                <span className={cn("block h-[3px] rounded-full bg-ink-foreground/35 transition-all", i === index ? "w-12 bg-gold" : "w-6 group-hover:bg-ink-foreground/70")} />
              </button>
            ))}
            <span className="ml-3 font-display text-sm tabular-nums text-ink-foreground/70">
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/30 transition-colors hover:border-gold hover:text-gold"
            >
              {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/30 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-foreground/30 transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
