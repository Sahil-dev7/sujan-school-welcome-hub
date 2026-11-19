import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMMES } from "@/content/programmes";
import { PHOTOS } from "@/lib/photos";
import { Reveal } from "./Reveal";

export function Programmes() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PROGRAMMES.map((p, i) => {
        const photo = PHOTOS[p.image];
        return (
          <Reveal key={p.stage} delay={i * 90} as="article">
            <Link
              to="/$section/$page"
              params={{ section: "academics", page: p.page }}
              className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-ink-foreground shadow-soft transition-shadow hover:shadow-lift"
            >
              <img src={photo.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/0" aria-hidden="true" />
              <div className="relative p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">{p.classes}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight">{p.stage}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/80">{p.text}</p>
                {p.toConfirm && (
                  <p className="mt-3 inline-block rounded-full bg-placeholder px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-placeholder-foreground">
                    Availability to be confirmed
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
