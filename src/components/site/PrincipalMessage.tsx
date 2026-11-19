import { Quote, UserRound } from "lucide-react";
import { SCHOOL } from "@/lib/site";
import { DraftTag } from "./Placeholder";
import { Reveal } from "./Reveal";

/**
 * Principal's message. The message text is a draft — replace PRINCIPAL_MESSAGE
 * with the principal's own words, and add a photo by setting PRINCIPAL_PHOTO.
 */
const PRINCIPAL_PHOTO: string | null = null;
const PRINCIPAL_MESSAGE = [
  "Dear parents and students, welcome to The Sujan Public H.S. School.",
  "Since 2004, our school has worked to give the children of Kantaphod and the surrounding villages a sound English-medium education close to home. We believe every child has the ability to learn and to grow, and that a good school helps them discover it.",
  "Our aim is to build not only knowledge, but also character and confidence — honesty, discipline, respect for others and the courage to ask questions. We value our partnership with parents, and we invite you to visit us and see our school for yourself.",
];

export function PrincipalMessage({ compact = false }: { compact?: boolean }) {
  const initials = SCHOOL.principal.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  const paragraphs = compact ? PRINCIPAL_MESSAGE.slice(0, 2) : PRINCIPAL_MESSAGE;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
      <Reveal className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 -z-10 translate-x-5 translate-y-5 rounded-2xl border-2 border-gold" aria-hidden="true" />
        {PRINCIPAL_PHOTO ? (
          <img src={PRINCIPAL_PHOTO} alt={`${SCHOOL.principal.name}, ${SCHOOL.principal.title}`} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lift" />
        ) : (
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-2xl bg-ink-gradient text-ink-foreground shadow-lift">
            <span className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/60 font-display text-4xl text-gold">{initials}</span>
            <span className="mt-6 flex items-center gap-2 rounded-full bg-placeholder px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-placeholder-foreground">
              <UserRound className="h-3.5 w-3.5" aria-hidden="true" /> Photograph to be added
            </span>
          </div>
        )}
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden="true" /> Principal's Message
        </p>
        <Quote className="mt-6 h-10 w-10 text-gold" aria-hidden="true" />
        <div className="mt-4 space-y-4 font-display text-xl leading-relaxed text-primary md:text-2xl">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t pt-6">
          <div>
            <p className="font-display text-xl font-semibold text-primary">{SCHOOL.principal.name}</p>
            <p className="text-sm text-muted-foreground">
              {SCHOOL.principal.title}, {SCHOOL.name}
            </p>
          </div>
          <DraftTag className="ml-auto" />
        </div>
      </Reveal>
    </div>
  );
}
