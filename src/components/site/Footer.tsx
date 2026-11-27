import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { SECTIONS } from "@/content/sections";
import { FULL_ADDRESS, SCHOOL, telHref } from "@/lib/site";
import { Wordmark } from "./Logo";
import { SocialLinks } from "./SocialIcons";

const QUICK = [
  { section: "about", page: "introduction" },
  { section: "about", page: "principals-message" },
  { section: "admissions", page: "procedure" },
  { section: "campus", page: "infrastructure" },
  { section: "gallery", page: "photos" },
  { section: "news", page: "latest" },
];

function titleOf(section: string, page: string) {
  return SECTIONS.find((s) => s.slug === section)?.pages.find((p) => p.slug === page)?.title ?? page;
}

export function Footer() {
  const academics = SECTIONS.find((s) => s.slug === "academics")!;
  return (
    <footer className="bg-ink-gradient text-ink-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Link to="/" aria-label={`${SCHOOL.name} — home`}>
            <Wordmark inverted />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            A private, English-medium, co-educational school in Kantaphod, District Dewas, affiliated to the {SCHOOL.board}.
            Educating children since {SCHOOL.established}.
          </p>
          <SocialLinks className="mt-6 text-ink-foreground" />
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {QUICK.map((q) => (
              <li key={q.page}>
                <Link to="/$section/$page" params={{ section: q.section, page: q.page }} className="text-ink-foreground/75 hover:text-gold">
                  {titleOf(q.section, q.page)}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/$section" params={{ section: "contact" }} className="text-ink-foreground/75 hover:text-gold">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">Academics</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {academics.pages.slice(0, 7).map((p) => (
              <li key={p.slug}>
                <Link to="/$section/$page" params={{ section: "academics", page: p.slug }} className="text-ink-foreground/75 hover:text-gold">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <address className="not-italic leading-relaxed">{FULL_ADDRESS}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                {SCHOOL.phones.map((p) => (
                  <a key={p} href={telHref(p)} className="hover:text-gold">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${SCHOOL.email}`} className="min-w-0 break-all hover:text-gold">
                  {SCHOOL.email}
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-ink-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SCHOOL.name}, {SCHOOL.place}. All rights reserved.
          </p>
          <p>Photographs from the school's official Facebook page.</p>
        </div>
      </div>
    </footer>
  );
}
