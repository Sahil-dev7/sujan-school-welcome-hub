/**
 * Single source of truth for verified school information.
 * Anything set to `null` is not yet confirmed by the school and renders as a
   * omitted until confirmed. Fill it in here and it updates across the site.
 */
export const SCHOOL = {
  name: "The Sujan Public H.S. School",
  shortName: "Sujan Public School",
  place: "Kantaphod",
  established: 2004,
  board: "Madhya Pradesh State Board",
  medium: "English",
  type: "Private, Unaided, Co-educational",
  address: {
    line1: "Ward No. 3, Indore Road",
    town: "Kantaphod",
    tehsil: "Satwas",
    district: "Dewas",
    state: "Madhya Pradesh",
    pin: "455332",
    country: "India",
  },
  phones: ["+91 93032 62253", "+91 97132 32040"],
  email: "sahilwadhwani.sujanpublic@outlook.com",
  whatsapp: "919303262253" as string | null,
  principal: {
    name: "Sukhveer Singh Bhatia",
    title: "Principal",
  },
  social: {
    facebook:
      "https://www.facebook.com/people/The-Sujan-Public-HS-School-Kantaphod/100057378943111/",
    youtube: "https://www.youtube.com/watch?v=81c1IyvJcGY",
  },
  youtubeVideoId: "81c1IyvJcGY",
} as const;

export const FULL_ADDRESS = `${SCHOOL.address.line1}, ${SCHOOL.address.town}, Tehsil ${SCHOOL.address.tehsil}, District ${SCHOOL.address.district}, ${SCHOOL.address.state} ${SCHOOL.address.pin}, ${SCHOOL.address.country}`;

const MAP_QUERY = encodeURIComponent(
  `${SCHOOL.name}, ${SCHOOL.address.line1}, ${SCHOOL.address.town}, ${SCHOOL.address.district}, ${SCHOOL.address.state} ${SCHOOL.address.pin}`,
);
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function pageTitle(title: string) {
  return `${title} | ${SCHOOL.name}, ${SCHOOL.place}`;
}
