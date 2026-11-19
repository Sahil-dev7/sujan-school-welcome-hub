import { createFileRoute, notFound } from "@tanstack/react-router";

import { getSection } from "@/content/sections";
import { PHOTOS } from "@/lib/photos";
import { pageTitle } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { PageBlocks } from "@/components/site/PageBlocks";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SubPageCards } from "@/components/site/SectionNav";

export const Route = createFileRoute("/$section/")({
  loader: ({ params }) => {
    const section = getSection(params.section);
    if (!section) throw notFound();
    return { slug: section.slug };
  },
  head: ({ loaderData }) => {
    const section = loaderData ? getSection(loaderData.slug) : undefined;
    if (!section) return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    const title = pageTitle(section.title);
    return {
      meta: [
        { title },
        { name: "description", content: section.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: section.intro },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SectionPage,
});

function SectionPage() {
  const { slug } = Route.useLoaderData();
  const section = getSection(slug)!;
  return (
    <>
      <PageHero
        title={section.title}
        eyebrow={section.tagline}
        subtitle={section.intro}
        photo={PHOTOS[section.image]}
        crumbs={[{ label: section.title, section: section.slug }]}
      />
      <div className="paper-texture">
        <div className="container-site space-y-20 py-16 md:py-24">
          {section.overview && <PageBlocks blocks={section.overview} />}
          <div>
            <SectionHeading eyebrow={section.title} title={`Explore ${section.title}`} />
            <div className="mt-10">
              <SubPageCards section={section} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
