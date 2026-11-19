import { BookOpenCheck, CalendarCheck, Languages, Users } from "lucide-react";
import { SCHOOL } from "@/lib/site";
import { Reveal } from "./Reveal";

const FACTS = [
  { icon: CalendarCheck, label: "Established", value: String(SCHOOL.established) },
  { icon: Languages, label: "Medium", value: "English" },
  { icon: BookOpenCheck, label: "Board", value: "M.P. State Board" },
  { icon: Users, label: "Environment", value: "Co-educational" },
];

export function KeyFacts({ inverted = false }: { inverted?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border lg:grid-cols-4">
      {FACTS.map((f, i) => (
        <Reveal key={f.label} delay={i * 80} className={inverted ? "bg-ink p-6 md:p-8" : "bg-card p-6 md:p-8"}>
          <f.icon className="h-7 w-7 text-accent" aria-hidden="true" />
          <dt className={inverted ? "mt-4 text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/60" : "mt-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"}>
            {f.label}
          </dt>
          <dd className={inverted ? "mt-1 font-display text-2xl font-semibold text-ink-foreground md:text-3xl" : "mt-1 font-display text-2xl font-semibold text-primary md:text-3xl"}>
            {f.value}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
