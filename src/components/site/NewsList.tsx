import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { NEWS, type NewsItem } from "@/content/news";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function NewsCard({ item, index = 0 }: { item: NewsItem; index?: number }) {
  if (item.placeholder) return null;
  return (
    <Reveal
      as="article"
      delay={index * 80}
      className={cn(
        "flex h-full flex-col rounded-2xl border p-6 shadow-soft transition-shadow hover:shadow-lift",
        item.placeholder ? "border-dashed border-placeholder-foreground/35 bg-placeholder" : "bg-card",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{item.category}</span>
        {item.date && <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {item.date}
        </span>}
      </div>
      <h3 className={cn("mt-5 text-xl font-semibold leading-snug", item.placeholder ? "text-placeholder-foreground" : "text-primary")}>{item.title}</h3>
      <p className={cn("mt-2 flex-1 text-sm leading-relaxed", item.placeholder ? "text-placeholder-foreground/90" : "text-muted-foreground")}>{item.text}</p>
      {item.link &&
        (item.link.page ? (
          <Link
            to="/$section/$page"
            params={{ section: item.link.section, page: item.link.page }}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            {item.link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to="/$section"
            params={{ section: item.link.section }}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            {item.link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ))}
    </Reveal>
  );
}

export function NewsList({ kind }: { kind: keyof typeof NEWS }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {NEWS[kind].map((n, i) => (
        <NewsCard key={n.title + i} item={n} index={i} />
      ))}
    </div>
  );
}
