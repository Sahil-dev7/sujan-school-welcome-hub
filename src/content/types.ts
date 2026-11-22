import type { PhotoKey } from "@/lib/photos";

export type IconName =
  | "book"
  | "users"
  | "sparkles"
  | "trophy"
  | "heart"
  | "shield"
  | "graduation"
  | "flask"
  | "monitor"
  | "library"
  | "bus"
  | "palette"
  | "music"
  | "map"
  | "star"
  | "compass"
  | "calendar"
  | "megaphone"
  | "leaf"
  | "lightbulb"
  | "building"
  | "phone"
  | "mail"
  | "pin"
  | "clipboard"
  | "file"
  | "wallet"
  | "medal"
  | "camera"
  | "video";

/** Content blocks rendered by <PageBlocks />. */
export type Block =
  | { type: "prose"; heading?: string; eyebrow?: string; paragraphs: string[]; draft?: boolean }
  | { type: "placeholder"; label: string; hint: string }
  | {
      type: "features";
      heading?: string;
      eyebrow?: string;
      intro?: string;
      items: { title: string; text: string; icon: IconName }[];
      draft?: boolean;
    }
  | { type: "list"; heading: string; items: string[]; ordered?: boolean; note?: string }
  | { type: "steps"; heading: string; items: { title: string; text: string }[]; note?: string }
  | {
      type: "imageText";
      /** A real school photo. Leave out and set `missingPhoto` when none exists yet. */
      image?: PhotoKey;
      missingPhoto?: string;
      eyebrow?: string;
      heading: string;
      paragraphs: string[];
      reverse?: boolean;
    }
  | { type: "facts" }
  | { type: "timeline"; heading: string; items: { year: string; title: string; text: string; placeholder?: boolean }[] }
  | { type: "quote"; text: string; by: string }
  | { type: "principal" }
  | { type: "gallery"; heading?: string }
  | { type: "video" }
  | { type: "map" }
  | { type: "contactCards" }
  | { type: "enquiry"; variant: "admission" | "contact" }
  | { type: "news"; kind: "news" | "events" | "announcements" }
  | { type: "programmes" }
  | { type: "cta"; heading: string; text: string };

export type SubPage = {
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
  image?: PhotoKey;
  blocks: Block[];
};

export type Section = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  image: PhotoKey;
  pages: SubPage[];
  /** Blocks shown on the section's overview page, above the sub-page cards. */
  overview?: Block[];
};
