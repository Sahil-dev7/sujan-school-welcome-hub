import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { SECTIONS } from "@/content/sections";
import { PHOTOS } from "@/lib/photos";
import { SCHOOL, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SocialLinks } from "./SocialIcons";
import { Wordmark } from "./Logo";

function TopBar() {
  return (
    <div className="bg-ink text-ink-foreground">
      <div className="container-site flex h-10 items-center justify-between gap-4 text-xs">
        <div className="flex min-w-0 items-center gap-5">
          <span className="hidden items-center gap-1.5 md:flex">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Indore Road, Kantaphod, Dewas (M.P.) {SCHOOL.address.pin}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {SCHOOL.phones.map((p, i) => (
              <span key={p} className={cn(i > 0 && "hidden sm:inline")}>
                {i > 0 && <span className="mx-1.5 opacity-40">/</span>}
                <a href={telHref(p)} className="hover:text-gold">
                  {p}
                </a>
              </span>
            ))}
          </span>
          {SCHOOL.email && (
            <a href={`mailto:${SCHOOL.email}`} className="hidden items-center gap-1.5 hover:text-gold lg:flex">
              <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {SCHOOL.email}
            </a>
          )}
        </div>
        <SocialLinks className="shrink-0 [&_a]:h-7 [&_a]:w-7" iconClassName="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Main" className="hidden bg-primary text-primary-foreground xl:block">
      <ul className="container-site flex items-stretch justify-between">
        <li>
          <Link
            to="/"
            className={cn(
              "flex h-12 items-center px-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-gold",
              pathname === "/" && "text-gold",
            )}
          >
            Home
          </Link>
        </li>
        {SECTIONS.map((section, idx) => {
          const active = pathname === `/${section.slug}` || pathname.startsWith(`/${section.slug}/`);
          const alignRight = idx >= SECTIONS.length - 4;
          const photo = PHOTOS[section.image];
          return (
            <li key={section.slug} className="group relative">
              <Link
                to="/$section"
                params={{ section: section.slug }}
                className={cn(
                  "flex h-12 items-center gap-1 px-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-gold group-focus-within:text-gold",
                  active && "text-gold",
                )}
                aria-haspopup="true"
              >
                {section.title}
                <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" aria-hidden="true" />
              </Link>
              <span
                className={cn(
                  "absolute inset-x-2 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform group-hover:scale-x-100",
                  active && "scale-x-100",
                )}
                aria-hidden="true"
              />
              <div
                className={cn(
                  "invisible absolute top-full z-50 pt-0 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
                  alignRight ? "right-0" : "left-0",
                )}
              >
                <div className="grid w-[580px] grid-cols-[200px_1fr] overflow-hidden rounded-b-xl border border-t-0 bg-popover text-popover-foreground shadow-lift">
                  <div className="relative flex flex-col justify-end p-5 text-ink-foreground">
                    <img src={photo.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
                    <div className="relative">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{section.title}</p>
                      <p className="mt-1 font-display text-lg leading-snug">{section.tagline}</p>
                    </div>
                  </div>
                  <ul className="grid gap-0.5 p-3">
                    {section.pages.map((page) => (
                      <li key={page.slug}>
                        <Link
                          to="/$section/$page"
                          params={{ section: section.slug, page: page.slug }}
                          className="group/item flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-secondary focus-visible:bg-secondary"
                          activeProps={{ className: "bg-secondary" }}
                        >
                          <span className="text-sm font-semibold text-primary group-hover/item:text-accent">{page.title}</span>
                          <span className="text-xs text-muted-foreground">{page.summary}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full overflow-y-auto p-0 sm:max-w-sm [&>button]:hidden">
        <SheetHeader className="flex flex-row items-center justify-between border-b p-4">
          <SheetTitle className="sr-only">Site menu</SheetTitle>
          <Wordmark compact />
          <SheetClose asChild>
            <Button variant="ghost" size="icon" aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </SheetClose>
        </SheetHeader>
        <nav aria-label="Mobile" className="px-4 pb-6">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex border-b py-4 font-display text-lg font-semibold text-primary"
          >
            Home
          </Link>
          <Accordion type="single" collapsible>
            {SECTIONS.map((section) => (
              <AccordionItem key={section.slug} value={section.slug}>
                <AccordionTrigger className="py-4 font-display text-lg font-semibold text-primary hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-1 border-l-2 border-gold pl-4">
                    <li>
                      <Link
                        to="/$section"
                        params={{ section: section.slug }}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm font-semibold text-accent"
                      >
                        {section.title} overview
                      </Link>
                    </li>
                    {section.pages.map((page) => (
                      <li key={page.slug}>
                        <Link
                          to="/$section/$page"
                          params={{ section: section.slug, page: page.slug }}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-foreground hover:text-accent"
                        >
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button asChild className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
            <Link to="/$section/$page" params={{ section: "admissions", page: "enquiry" }} onClick={() => setOpen(false)}>
              Admission Enquiry
            </Link>
          </Button>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            {SCHOOL.phones.map((p) => (
              <a key={p} href={telHref(p)} className="flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" /> {p}
              </a>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <TopBar />
      <header className={cn("sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow", scrolled && "shadow-soft")}>
        <div className={cn("container-site flex items-center justify-between gap-4 transition-all", scrolled ? "h-16" : "h-20 md:h-24")}>
          <Link to="/" aria-label={`${SCHOOL.name} — home`}>
            <Wordmark compact={scrolled} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden text-right text-xs leading-tight lg:block">
              <p className="font-semibold uppercase tracking-[0.14em] text-primary">{SCHOOL.board}</p>
              <p className="mt-1 text-muted-foreground">English Medium · Co-educational · Since {SCHOOL.established}</p>
            </div>
            <span className="hidden h-10 w-px bg-border lg:block" aria-hidden="true" />
            <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex" size="lg">
              <Link to="/$section/$page" params={{ section: "admissions", page: "enquiry" }}>
                Admission Enquiry
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
        <DesktopNav pathname={pathname} />
      </header>
    </>
  );
}
