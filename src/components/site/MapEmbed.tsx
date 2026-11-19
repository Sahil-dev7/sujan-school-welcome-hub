import { ExternalLink } from "lucide-react";
import { FULL_ADDRESS, MAP_EMBED_URL, MAP_LINK_URL, SCHOOL } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-soft">
      <iframe
        src={MAP_EMBED_URL}
        title={`Map showing ${SCHOOL.name}, Kantaphod`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[380px] w-full md:h-[460px]"
      />
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">{FULL_ADDRESS}</p>
        <Button asChild variant="outline" className="shrink-0">
          <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer">
            Open in Google Maps <ExternalLink />
          </a>
        </Button>
      </div>
    </div>
  );
}
