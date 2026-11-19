import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import type { Section } from "@/content/types";
import { SCHOOL, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function SectionSidebar({ section, current }: { section: Section; current?: string }) {
  return (
    <aside className="lg:sticky lg:top-44 lg:self-start">
      <nav aria-label={`${section.title} pages`} className="rounded-2xl border bg-card p-3 shadow-soft">
        <Link
          to="/$section"
          params={{ section: section.slug }}
          className="block rounded-lg px-4 py-3 font-display text-lg font-semibold text-primary hover:text-accent"
        >
          {section.title}
        </Link>
        <ul className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          {section.pages.map((p) => (
            <li key={p.slug} className="shrink-0">
              <Link
                to="/$section/$page"
                params={{ section: section.slug, page: p.slug }}
                aria-current={p.slug === current ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm transition-colors",
                  p.slug === current ? "bg-primary font-semibold text-primary-foreground" : "text-foreground hover:bg-secondary",
                )}
              >
                <Icon name={p.icon} className={cn("h-4 w-4", p.slug === current ? "text-gold" : "text-accent")} />
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-5 hidden rounded-2xl bg-ink-gradient p-6 text-ink-foreground lg:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Need help?</p>
        <p className="mt-2 font-display text-xl">Call the school office</p>
        <ul className="mt-3 space-y-1 text-sm">
          {SCHOOL.phones.map((p) => (
            <li key={p}>
              <a href={telHref(p)} className="inline-flex items-center gap-2 hover:text-gold">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {p}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function SubPageCards({ section, exclude }: { section: Section; exclude?: string }) {
  const pages = section.pages.filter((p) => p.slug !== exclude);
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((p, i) => (
        <Reveal as="li" key={p.slug} delay={(i % 3) * 80}>
          <Link
            to="/$section/$page"
            params={{ section: section.slug, page: p.slug }}
            className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
          >
            <div className="flex items-start justify-between">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-primary">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
