import heroCampus from "@/assets/photos/hero-campus.webp.asset.json";
import heroClassroom from "@/assets/photos/hero-classroom.webp.asset.json";
import heroSports from "@/assets/photos/hero-sports.webp.asset.json";
import heroCultural from "@/assets/photos/hero-cultural.webp.asset.json";
import aboutStudents from "@/assets/photos/about-students.webp.asset.json";
import scienceLab from "@/assets/photos/science-lab.webp.asset.json";
import library from "@/assets/photos/library.webp.asset.json";
import computerLab from "@/assets/photos/computer-lab.webp.asset.json";
import art from "@/assets/photos/art.webp.asset.json";
import assembly from "@/assets/photos/assembly.webp.asset.json";
import cricket from "@/assets/photos/cricket.webp.asset.json";
import prePrimary from "@/assets/photos/pre-primary.webp.asset.json";

/**
 * Representative photographs used until the school supplies its own.
 * Replace an entry's `src` with a real school photo to update every page that uses it.
 */
export type Photo = { src: string; alt: string; category: string };

export const PHOTOS = {
  campus: { src: heroCampus.url, alt: "School building with arched verandas and students arriving in the morning", category: "Campus" },
  classroom: { src: heroClassroom.url, alt: "Students raising hands in a classroom lesson", category: "Academics" },
  sports: { src: heroSports.url, alt: "Students racing on the school ground", category: "Sports" },
  cultural: { src: heroCultural.url, alt: "Students performing a folk dance on stage", category: "Culture" },
  students: { src: aboutStudents.url, alt: "Three students reading a book together on the school steps", category: "Student Life" },
  science: { src: scienceLab.url, alt: "Students performing a chemistry experiment with their teacher", category: "Academics" },
  library: { src: library.url, alt: "Students reading in a quiet library", category: "Campus" },
  computer: { src: computerLab.url, alt: "Teacher guiding students at computers", category: "Academics" },
  art: { src: art.url, alt: "Young students painting with watercolours", category: "Student Life" },
  assembly: { src: assembly.url, alt: "Students standing in rows at morning assembly", category: "Student Life" },
  cricket: { src: cricket.url, alt: "Students playing cricket on the school ground", category: "Sports" },
  prePrimary: { src: prePrimary.url, alt: "Young children playing with blocks alongside their teacher", category: "Academics" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

export const GALLERY_ORDER: PhotoKey[] = [
  "campus",
  "cultural",
  "classroom",
  "sports",
  "students",
  "science",
  "art",
  "library",
  "cricket",
  "assembly",
  "computer",
  "prePrimary",
];
