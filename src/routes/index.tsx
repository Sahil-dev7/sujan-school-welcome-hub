import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";

import { NEWS } from "@/content/news";
import type { IconName } from "@/content/types";
import { PHOTOS, type PhotoKey } from "@/lib/photos";
import { SCHOOL, telHref } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { AdmissionEnquiryForm } from "@/components/site/EnquiryForm";
import { HeroSlider } from "@/components/site/HeroSlider";
import { Icon } from "@/components/site/Icon";
import { KeyFacts } from "@/components/site/KeyFacts";
import { NewsCard } from "@/components/site/NewsList";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { PhotoNote } from "@/components/site/Placeholder";
import { PrincipalMessage } from "@/components/site/PrincipalMessage";
import { Programmes } from "@/components/site/Programmes";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { VideoEmbed } from "@/components/site/VideoEmbed";

const TITLE = "The Sujan Public H.S. School, Kantaphod | English Medium School, Dewas (M.P.)";
const DESCRIPTION =
  "Official website of The Sujan Public H.S. School, Kantaphod, District Dewas — an English-medium, co-educational school affiliated to the Madhya Pradesh State Board, established in 2004.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: SCHOOL.name,
          foundingDate: String(SCHOOL.established),
          telephone: SCHOOL.phones,
          address: {
            "@type": "PostalAddress",
            streetAddress: SCHOOL.address.line1,
            addressLocality: SCHOOL.address.town,
            addressRegion: SCHOOL.address.state,
            postalCode: SCHOOL.address.pin,
            addressCountry: "IN",
          },
          sameAs: [SCHOOL.social.facebook],
        }),
      },
    ],
  }),
  component: Home,
});

const WHY: { title: string; text: string; icon: IconName }[] = [
  { title: "Quality Education", text: `A structured ${SCHOOL.board} curriculum taught in English, with care for strong fundamentals.`, icon: "book" },
  { title: "Committed Educators", text: "Teachers who guide, encourage and support every child's progress.", icon: "users" },
  { title: "Holistic Development", text: "Character, confidence and values nurtured alongside academics.", icon: "sparkles" },
  { title: "Sports and Activities", text: "Games, arts and celebrations as part of everyday school life.", icon: "trophy" },
  { title: "Student-Centred Learning", text: "Lessons that invite questions, participation and curiosity.", icon: "lightbulb" },
  { title: "Safe Learning Environment", text: "A caring, disciplined atmosphere where children feel secure.", icon: "shield" },
];

// Tiles without a `photo` show a "photo to be added" panel until the school supplies one.
const FACILITIES: { title: string; photo?: PhotoKey; page: string }[] = [
  { title: "School Building", photo: "building", page: "infrastructure" },
  { title: "Science Laboratories", page: "science-laboratories" },
  { title: "Library", page: "library" },
  { title: "Computer Laboratory", page: "computer-laboratory" },
  { title: "Assembly Hall & Stage", photo: "hallStage", page: "infrastructure" },
];

const BEYOND: { title: string; photo?: PhotoKey; page: string; icon: IconName }[] = [
  { title: "Sports & Games", photo: "drill", page: "sports-games", icon: "trophy" },
  { title: "Dance & Culture", photo: "classical", page: "cultural-activities", icon: "music" },
  { title: "Art & Creativity", page: "art-creativity", icon: "palette" },
  { title: "Assemblies & Events", photo: "flag", page: "annual-functions", icon: "star" },
];

function Home() {
  return (
    <>
      <HeroSlider />

      {/* Welcome */}
      <section className="relative bg-background">
        <div className="container-site py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow={`Welcome · Since ${SCHOOL.established}`}
                title={
                  <>
                    Welcome to <span className="italic text-accent">The Sujan Public</span> H.S. School
                  </>
                }
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded in {SCHOOL.established} on Indore Road in Kantaphod, our school offers English-medium education to boys and girls of
                Kantaphod and the surrounding villages of Tehsil Satwas, District Dewas. We follow the {SCHOOL.board} curriculum as a
                private, unaided, co-educational school.
              </p>
            </Reveal>
          </div>
          <div className="mt-14">
            <KeyFacts />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative overflow-hidden bg-secondary/60 paper-texture">
        <div className="container-site grid items-center gap-14 py-20 md:py-28 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="grid grid-cols-5 gap-4">
              <img src={PHOTOS.building.src} alt={PHOTOS.building.alt} loading="lazy" className="col-span-3 aspect-[3/4] w-full rounded-2xl object-cover shadow-lift" style={{ objectPosition: PHOTOS.building.position }} />
              <div className="col-span-2 flex flex-col gap-4 pt-12">
                <img src={PHOTOS.entrance.src} alt={PHOTOS.entrance.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover shadow-soft" />
                <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                  <p className="font-display text-5xl font-semibold text-gold">{new Date().getFullYear() - SCHOOL.established}+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]">Years of education in Kantaphod</p>
                </div>
              </div>
            </div>
            <PhotoNote className="mt-3" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="About our school" title="A school rooted in its community" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                For more than two decades, families in and around Kantaphod have trusted {SCHOOL.name} with their children's education. Our
                aim is simple: to build knowledge, character and confidence in every student.
              </p>
              <p>
                From the first day of school to the Higher Secondary examinations, we hope to help children grow into capable, responsible
                young people ready for the world.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/$section/$page" params={{ section: "about", page: "introduction" }}>
                  Read More <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/$section/$page" params={{ section: "about", page: "vision-mission" }}>
                  Vision & Mission
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-background">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Academics"
              title="Our academic programmes"
              intro={`A complete school journey, taught in English under the ${SCHOOL.board}.`}
            />
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/$section" params={{ section: "academics" }}>
                All academics <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <Programmes />
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-gold/15" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-gold/15" aria-hidden="true" />
        <div className="container-site relative py-20 md:py-28">
          <SectionHeading inverted align="center" eyebrow="Why choose us" title="An education that shapes the whole child" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-ink-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90} className="group bg-ink/60 p-8 transition-colors hover:bg-ink/30">
                <span className="font-display text-sm text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={w.icon} className="mt-4 h-8 w-8 text-gold transition-transform group-hover:-translate-y-1" />
                <h3 className="mt-5 text-2xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & facilities */}
      <section className="bg-background">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Campus & facilities" title="Spaces to learn, explore and play" />
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/$section" params={{ section: "campus" }}>
                Explore the campus <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-2 md:auto-rows-[240px]">
            {FACILITIES.filter((f) => f.photo).map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className={i === 0 ? "md:row-span-2" : "md:row-span-2"}>
                <Link
                  to="/$section/$page"
                  params={{ section: "campus", page: f.page }}
                  className="group relative block h-full overflow-hidden rounded-2xl bg-ink"
                >
                  {f.photo ? (
                    <img src={PHOTOS[f.photo].src} alt={PHOTOS[f.photo].alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ objectPosition: PHOTOS[f.photo].position }} />
                  ) : null}
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-0 left-0 flex w-full items-end justify-between p-5 text-ink-foreground">
                    <span className="font-display text-xl font-semibold md:text-2xl">{f.title}</span>
                    <ArrowUpRight className="h-5 w-5 text-gold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <PhotoNote className="mt-4" />
        </div>
      </section>

      {/* Beyond classrooms */}
      <section className="bg-sand/60">
        <div className="container-site py-20 md:py-28">
          <SectionHeading
            align="center"
            eyebrow="Beyond the classroom"
            title="Where talents find their stage"
            intro="Sports, dance, art, competitions and celebrations help every child discover what they love."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BEYOND.filter((b) => b.photo).map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <Link to="/$section/$page" params={{ section: "student-life", page: b.page }} className="group block">
                  <div className="relative overflow-hidden rounded-t-[999px] rounded-b-2xl">
                    {b.photo ? (
                      <img src={PHOTOS[b.photo].src} alt={PHOTOS[b.photo].alt} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: PHOTOS[b.photo].position }} />
                    ) : null}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Icon name={b.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent">{b.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/$section" params={{ section: "student-life" }}>
                Discover student life <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="bg-background">
        <div className="container-site py-20 md:py-28">
          <PrincipalMessage compact />
          <div className="mt-10 lg:pl-[444px]">
            <Button asChild variant="link" className="px-0 text-accent">
              <Link to="/$section/$page" params={{ section: "about", page: "principals-message" }}>
                Read the full message <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & events */}
      <section className="bg-secondary/60 paper-texture">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="News & events" title="What's happening at school" />
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/$section" params={{ section: "news" }}>
                All news & events <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {NEWS.news.slice(0, 2).map((n, i) => (
              <NewsCard key={n.title} item={n} index={i} />
            ))}
            {NEWS.events.length > 0 && <Reveal delay={160} className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-soft">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">Upcoming events</p>
              <ul className="mt-4 divide-y divide-primary-foreground/15">
                {NEWS.events.map((e) => (
                  <li key={e.title} className="flex items-center gap-4 py-4">
                    <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-gold/50 text-gold">
                      <span className="text-[10px] font-bold uppercase">Date</span>
                      <span className="font-display text-lg leading-none">TBA</span>
                    </span>
                    <span>
                      <span className="block font-display text-lg">{e.title}</span>
                      <span className="text-xs text-primary-foreground/65">{e.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/$section/$page" params={{ section: "news", page: "upcoming-events" }} className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline">
                View calendar <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>}
          </div>
        </div>
      </section>

      {/* Gallery + video */}
      <section className="bg-background">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Photo gallery" title="Moments from school life" />
            <Button asChild variant="outline" className="shrink-0">
              <Link to="/$section/$page" params={{ section: "gallery", page: "photos" }}>
                View full gallery <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-12">
            <PhotoGallery limit={6} showFilters={false} />
          </div>
          <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading eyebrow="Video" title="See our school in motion" intro="Watch our school's video on YouTube." />
            <Reveal>
              <VideoEmbed />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Admission enquiry */}
      <section id="enquiry" className="relative overflow-hidden bg-ink text-ink-foreground">
        <img src={PHOTOS.prayerHall.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
        <div className="container-site relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_1.5fr] lg:items-center">
          <div>
            <SectionHeading
              inverted
              eyebrow="Admissions"
              title="Begin your child's journey with us"
              intro="Send an admission enquiry and the school office will contact you with details about seats, the admission form and next steps."
            />
            <ul className="mt-8 space-y-3 text-sm">
              {SCHOOL.phones.map((p) => (
                <li key={p}>
                  <a href={telHref(p)} className="inline-flex items-center gap-3 hover:text-gold">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-gold">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-base font-semibold">{p}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-foreground">
            <AdmissionEnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
