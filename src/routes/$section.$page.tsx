import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getPage } from "@/content/sections";
import { PHOTOS } from "@/lib/photos";
import { pageTitle } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { PageBlocks } from "@/components/site/PageBlocks";
import { SectionSidebar } from "@/components/site/SectionNav";

export const Route = createFileRoute("/$section/$page")({
  loader: ({ params }) => {
    const found = getPage(params.section, params.page);
    if (!found) throw notFound();
    return { section: found.section.slug, page: found.page.slug };
  },
  head: ({ loaderData }) => {
    const found = loaderData ? getPage(loaderData.section, loaderData.page) : undefined;
    if (!found) return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    const title = pageTitle(found.page.title);
    const description = `${found.page.summary} ${found.section.title} at The Sujan Public H.S. School, Kantaphod, District Dewas, Madhya Pradesh.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SubPage,
});

function SubPage() {
  const data = Route.useLoaderData();
  const { section, page } = getPage(data.section, data.page)!;
  const idx = section.pages.findIndex((p) => p.slug === page.slug);
  const prev = section.pages[idx - 1];
  const next = section.pages[idx + 1];

  return (
    <>
      <PageHero
        title={page.title}
        eyebrow={section.title}
        subtitle={page.summary}
        photo={PHOTOS[page.image ?? section.image]}
        crumbs={[{ label: section.title, section: section.slug }, { label: page.title }]}
      />
      <div className="paper-texture">
        <div className="container-site grid gap-10 py-12 md:py-20 lg:grid-cols-[280px_1fr] lg:gap-14">
          <SectionSidebar section={section} current={page.slug} />
          <div className="min-w-0">
            <PageBlocks blocks={page.blocks} />
            <nav aria-label="More pages in this section" className="mt-20 grid gap-4 border-t pt-8 sm:grid-cols-2">
              {prev ? (
                <Link
                  to="/$section/$page"
                  params={{ section: section.slug, page: prev.slug }}
                  className="group rounded-xl border bg-card p-5 transition-colors hover:border-accent/50"
                >
                  <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Previous
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-primary group-hover:text-accent">{prev.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to="/$section/$page"
                  params={{ section: section.slug, page: next.slug }}
                  className="group rounded-xl border bg-card p-5 text-right transition-colors hover:border-accent/50"
                >
                  <span className="flex items-center justify-end gap-1 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Next <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold text-primary group-hover:text-accent">{next.title}</span>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
