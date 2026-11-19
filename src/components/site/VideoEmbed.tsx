import { useState } from "react";
import { Play } from "lucide-react";
import { SCHOOL } from "@/lib/site";

/** Click-to-load YouTube player so the page stays fast until a visitor chooses to watch. */
export function VideoEmbed({ videoId = SCHOOL.youtubeVideoId, title = `${SCHOOL.name} on YouTube` }: { videoId?: string; title?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-lift">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0" aria-label={`Play video: ${title}`}>
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 to-ink/10" aria-hidden="true" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lift transition-transform group-hover:scale-110">
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            </span>
          </span>
          <span className="absolute bottom-5 left-6 text-left text-ink-foreground">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Watch</span>
            <span className="font-display text-xl">{title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
