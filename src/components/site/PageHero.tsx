import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Photo } from "@/lib/photos";

type Crumb = { label: string; section?: string };

export function PageHero({
  title,
  subtitle,
  eyebrow,
  photo,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  photo: Photo;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={photo.src}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover animate-kenburns"
        style={{ objectPosition: photo.position }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
      <div className="container-site py-20 md:py-28">
        <nav aria-label="Breadcrumb" className="animate-rise">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink-foreground/70">
            <li>
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
                {c.section && i < crumbs.length - 1 ? (
                  <Link to="/$section" params={{ section: c.section }} className="hover:text-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-gold">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="mt-8 text-xs font-bold uppercase tracking-[0.24em] text-gold animate-rise">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] md:text-6xl animate-rise" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/80 md:text-lg animate-rise" style={{ animationDelay: "160ms" }}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="h-1.5 bg-gradient-to-r from-accent via-gold to-accent" aria-hidden="true" />
    </section>
  );
}
