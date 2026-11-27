import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Block } from "@/content/types";
import { PHOTOS } from "@/lib/photos";
import { cn } from "@/lib/utils";
import { ContactCards } from "./ContactCards";
import { CtaBand } from "./CtaBand";
import { AdmissionEnquiryForm, ContactEnquiryForm } from "./EnquiryForm";
import { Icon } from "./Icon";
import { KeyFacts } from "./KeyFacts";
import { MapEmbed } from "./MapEmbed";
import { NewsList } from "./NewsList";
import { PhotoGallery } from "./PhotoGallery";
import { DraftTag, PhotoNote } from "./Placeholder";
import { PrincipalMessage } from "./PrincipalMessage";
import { Programmes } from "./Programmes";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { VideoEmbed } from "./VideoEmbed";

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return (
        <Reveal className="max-w-3xl">
          {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
          {block.heading && <h2 className="mt-2 text-3xl font-semibold leading-tight text-primary md:text-4xl">{block.heading}</h2>}
          {block.draft && <DraftTag className="mt-3" />}
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {block.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Reveal>
      );
    case "placeholder":
      return null;
    case "links":
      return (
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">{block.heading}</h2>
          <div className="mt-6 flex flex-col items-start gap-3">
            {block.items.map((item) => (
              <Button key={item.url} asChild variant="link" className="h-auto whitespace-normal px-0 text-left">
                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.label}<ArrowUpRight className="shrink-0" /></a>
              </Button>
            ))}
          </div>
        </Reveal>
      );
    case "features":
      return (
        <div>
          <SectionHeading eyebrow={block.eyebrow} title={block.heading} intro={block.intro}>
            {block.draft && <DraftTag className="mt-4" />}
          </SectionHeading>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((it, i) => (
              <Reveal key={it.title} delay={i * 70} className="group rounded-2xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon name={it.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      );
    case "list":
      return (
        <Reveal className="max-w-3xl rounded-2xl border bg-card p-6 shadow-soft md:p-8">
          <h2 className="text-2xl font-semibold text-primary md:text-3xl">{block.heading}</h2>
          {block.note && <p className="mt-2 text-sm italic text-placeholder-foreground">{block.note}</p>}
          <ul className="mt-6 space-y-3">
            {block.items.map((it) => (
              <li key={it} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-foreground">{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      );
    case "steps":
      return (
        <div>
          <SectionHeading title={block.heading}>
            {block.note && <p className="mt-3 text-sm italic text-placeholder-foreground">{block.note}</p>}
          </SectionHeading>
          <ol className="mt-10 grid gap-5 md:grid-cols-5">
            {block.items.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="relative rounded-2xl border bg-card p-6 shadow-soft">
                <span className="font-display text-5xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      );
    case "imageText": {
      const photo = block.image ? PHOTOS[block.image] : null;
      return (
        <div className={cn("grid items-center gap-10 lg:gap-16", photo ? "lg:grid-cols-2" : "max-w-3xl")}>
          {photo && <Reveal className={cn("relative", block.reverse && "lg:order-2")}>
            <div className="absolute -bottom-4 -left-4 -z-10 h-2/3 w-2/3 rounded-2xl bg-sand" aria-hidden="true" />
            {photo ? (
              <>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lift"
                  style={{ objectPosition: photo.position }}
                />
                <PhotoNote className="mt-3" />
              </>
            ) : null}
          </Reveal>}
          <Reveal delay={120}>
            {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-primary md:text-4xl">{block.heading}</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      );
    }
    case "facts":
      return <KeyFacts />;
    case "timeline":
      return (
        <div>
          <SectionHeading title={block.heading} />
          <ol className="relative mt-10 max-w-3xl border-l-2 border-gold/60 pl-8">
            {block.items.filter((t) => !t.placeholder).map((t, i) => (
              <Reveal as="li" key={t.title + i} delay={i * 80} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-accent" aria-hidden="true" />
                <p className={cn("font-display text-2xl font-semibold", t.placeholder ? "text-placeholder-foreground" : "text-accent")}>{t.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-primary">{t.title}</h3>
                <p className="mt-1 text-muted-foreground">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      );
    case "quote":
      return (
        <Reveal className="relative overflow-hidden rounded-2xl bg-ink-gradient px-8 py-14 text-center text-ink-foreground md:px-16">
          <p className="mx-auto max-w-3xl font-display text-2xl leading-relaxed md:text-4xl">“{block.text}”</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-gold">{block.by}</p>
        </Reveal>
      );
    case "principal":
      return <PrincipalMessage />;
    case "gallery":
      return (
        <div>
          {block.heading && <h2 className="mb-6 text-2xl font-semibold text-primary">{block.heading}</h2>}
          <PhotoGallery />
        </div>
      );
    case "video":
      return (
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <Reveal>
            <VideoEmbed />
          </Reveal>
          <Reveal delay={120} className="space-y-5">
            <SectionHeading eyebrow="Video gallery" title="Watch the school on YouTube" intro="Click the video to play it here, or open it on YouTube." />
          </Reveal>
        </div>
      );
    case "map":
      return <MapEmbed />;
    case "contactCards":
      return <ContactCards />;
    case "enquiry":
      return (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading
            eyebrow={block.variant === "admission" ? "Admission enquiry" : "Get in touch"}
            title={block.variant === "admission" ? "Tell us about your child" : "Send us a message"}
            intro={
              block.variant === "admission"
                ? "Fill in the form and the school office will contact you about admission, seat availability and the next steps."
                : "Have a question for the school? Send a message and the office will get back to you."
            }
          />
          {block.variant === "admission" ? <AdmissionEnquiryForm /> : <ContactEnquiryForm />}
        </div>
      );
    case "news":
      return <NewsList kind={block.kind} />;
    case "programmes":
      return (
        <div>
          <SectionHeading eyebrow="Stages of schooling" title="Our academic programmes" />
          <div className="mt-10">
            <Programmes />
          </div>
        </div>
      );
    case "cta":
      return <CtaBand heading={block.heading} text={block.text} />;
  }
}

export function PageBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-20">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}
