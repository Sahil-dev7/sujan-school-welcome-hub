import studentsAtEntrance from "@/assets/real/students-at-entrance.webp.asset.json";
import morningPrayerBuilding from "@/assets/real/morning-prayer-building.webp.asset.json";
import assemblyDrill from "@/assets/real/assembly-drill.webp.asset.json";
import flagHoisting from "@/assets/real/flag-hoisting.webp.asset.json";
import flagCeremony from "@/assets/real/flag-ceremony.webp.asset.json";
import schoolBuilding from "@/assets/real/school-building.webp.asset.json";
import seniorStudentsEntrance from "@/assets/real/senior-students-entrance.webp.asset.json";
import prayerHallGathering from "@/assets/real/prayer-hall-gathering.webp.asset.json";
import assemblyHallStage from "@/assets/real/assembly-hall-stage.webp.asset.json";
import annualFunctionDance from "@/assets/real/annual-function-dance.webp.asset.json";
import juniorDance from "@/assets/real/junior-dance.webp.asset.json";
import stageDrama from "@/assets/real/stage-drama.webp.asset.json";
import folkPerformance from "@/assets/real/folk-performance.webp.asset.json";
import classicalDance from "@/assets/real/classical-dance.webp.asset.json";
import groupDance from "@/assets/real/group-dance.webp.asset.json";
import prizeWinnersStage from "@/assets/real/prize-winners-stage.webp.asset.json";
import certificateWinners from "@/assets/real/certificate-winners.webp.asset.json";
import awardCeremony from "@/assets/real/award-ceremony.webp.asset.json";
import studentCertificate from "@/assets/real/student-certificate.webp.asset.json";
import studentFelicitation from "@/assets/real/student-felicitation.webp.asset.json";
import studentRecognition from "@/assets/real/student-recognition.webp.asset.json";
import teachingStaff from "@/assets/real/teaching-staff.webp.asset.json";
import staffAnnualFunction from "@/assets/real/staff-annual-function.webp.asset.json";
import staffCelebration from "@/assets/real/staff-celebration.webp.asset.json";
import schoolFamily from "@/assets/real/school-family.webp.asset.json";
import addressAtPodium from "@/assets/real/address-at-podium.webp.asset.json";

/**
 * Real photographs of The Sujan Public H.S. School, taken from the school's public
 * Facebook page. `position` is the CSS object-position used when a photo is cropped.
 *
 * No real photos exist yet for classrooms, laboratories, library, computer lab,
 * playground/sports or pre-primary — those spots show a "photo to be added" panel.
 */
export type Photo = { src: string; alt: string; category: string; position?: string };

const PHOTO_LIST = {
  campus: { src: morningPrayerBuilding.url, alt: "Students at morning prayer in front of the school building", category: "Campus", position: "50% 62%" },
  building: { src: schoolBuilding.url, alt: "The school building with The Sujan Public H.S. School name board", category: "Campus", position: "50% 35%" },
  entrance: { src: studentsAtEntrance.url, alt: "Students and staff gathered at the main entrance of the school", category: "Campus" },
  seniors: { src: seniorStudentsEntrance.url, alt: "Senior students with their certificates at the school entrance", category: "Student Life", position: "50% 70%" },
  drill: { src: assemblyDrill.url, alt: "Students in uniform taking part in morning assembly exercises outside the school building", category: "Sports", position: "50% 70%" },
  flag: { src: flagHoisting.url, alt: "Flag hoisting ceremony at the school entrance", category: "Events" },
  flagCeremony: { src: flagCeremony.url, alt: "Guests and staff at the school flag ceremony", category: "Events" },
  prayerHall: { src: prayerHallGathering.url, alt: "Students seated in the school hall during a special gathering", category: "Student Life" },
  hallStage: { src: assemblyHallStage.url, alt: "The school's assembly hall and stage", category: "Campus" },
  annualDance: { src: annualFunctionDance.url, alt: "Students performing a dance at the Annual Function", category: "Culture" },
  juniorDance: { src: juniorDance.url, alt: "Junior students performing a dance on stage at the Annual Function", category: "Culture" },
  drama: { src: stageDrama.url, alt: "Students performing a play in costume at the Annual Function", category: "Culture" },
  folk: { src: folkPerformance.url, alt: "Students in traditional dress performing at the Annual Function", category: "Culture" },
  classical: { src: classicalDance.url, alt: "A student performing a classical dance on stage", category: "Culture" },
  groupDance: { src: groupDance.url, alt: "Students performing a group dance in colourful costumes", category: "Culture" },
  prizeStage: { src: prizeWinnersStage.url, alt: "Students in uniform holding certificates on the school stage", category: "Achievements", position: "50% 40%" },
  winners: { src: certificateWinners.url, alt: "Prize winners with their certificates at the Annual Function", category: "Achievements" },
  award: { src: awardCeremony.url, alt: "A young student receiving an award from guests at the Annual Function", category: "Achievements" },
  certificate: { src: studentCertificate.url, alt: "A student receiving a certificate in the school hall", category: "Achievements" },
  felicitation: { src: studentFelicitation.url, alt: "A student being felicitated in the school hall", category: "Achievements" },
  recognition: { src: studentRecognition.url, alt: "A student being recognised in front of the school community", category: "Achievements" },
  staff: { src: teachingStaff.url, alt: "Teaching staff of the school at the Annual Function", category: "Teachers" },
  staffWide: { src: staffAnnualFunction.url, alt: "School staff together on the Annual Function stage", category: "Teachers" },
  staffStage: { src: staffCelebration.url, alt: "Teachers and staff on stage at a school celebration", category: "Teachers", position: "50% 30%" },
  family: { src: schoolFamily.url, alt: "Teachers and students together in the school courtyard", category: "Teachers" },
  podium: { src: addressAtPodium.url, alt: "Addressing students from the school podium", category: "Events", position: "50% 40%" },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTO_LIST;

export const PHOTOS: Record<PhotoKey, Photo> = PHOTO_LIST;

export const GALLERY_ORDER: PhotoKey[] = [
  "campus",
  "annualDance",
  "prizeStage",
  "building",
  "classical",
  "winners",
  "drill",
  "drama",
  "staff",
  "entrance",
  "juniorDance",
  "award",
  "flag",
  "folk",
  "prayerHall",
  "certificate",
  "groupDance",
  "family",
  "seniors",
  "hallStage",
  "staffWide",
  "felicitation",
  "flagCeremony",
  "recognition",
  "staffStage",
  "podium",
];
