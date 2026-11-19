import type { PhotoKey } from "@/lib/photos";

export type Programme = {
  stage: string;
  classes: string;
  text: string;
  image: PhotoKey;
  page: string;
  toConfirm?: boolean;
};

export const PROGRAMMES: Programme[] = [
  {
    stage: "Pre-Primary",
    classes: "Nursery – KG",
    text: "Learning through play, stories, songs and activity in the early years.",
    image: "prePrimary",
    page: "pre-primary",
    toConfirm: true,
  },
  {
    stage: "Primary",
    classes: "Classes I – V",
    text: "Strong foundations in reading, writing, number and curiosity about the world.",
    image: "art",
    page: "primary",
  },
  {
    stage: "Middle School",
    classes: "Classes VI – VIII",
    text: "Deeper study of science, mathematics, social science and languages.",
    image: "computer",
    page: "middle-school",
  },
  {
    stage: "Secondary & Higher Secondary",
    classes: "Classes IX – XII",
    text: "Focused preparation for the MP Board High School and Higher Secondary examinations.",
    image: "science",
    page: "secondary",
  },
];
