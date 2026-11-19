import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { PHOTOS } from "@/lib/photos";
import { SCHOOL, telHref } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CtaBand({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl bg-ink px-6 py-12 text-ink-foreground md:px-12">
      <img src={PHOTOS.students.src} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold">{heading}</h2>
          <p className="mt-2 text-ink-foreground/80">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/$section/$page" params={{ section: "admissions", page: "enquiry" }}>
              Admission Enquiry <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-ink-foreground/40 bg-transparent text-ink-foreground hover:bg-ink-foreground hover:text-ink">
            <a href={telHref(SCHOOL.phones[0])}>
              <Phone /> {SCHOOL.phones[0]}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
