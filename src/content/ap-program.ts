import { SCHOOL } from "@/lib/site";
import type { SubPage } from "./types";

/** General AP guidance; school-specific registration details come from the office. */
export const AP_PROGRAM_PAGE: SubPage = {
  slug: "advanced-placement-program-exams",
  title: "Advanced Placement Program & Exams",
  summary: "College-level learning and AP examinations at The Sujan Public H.S. School.",
  icon: "graduation",
  image: "winners",
  blocks: [
    {
      type: "prose",
      eyebrow: "Academics · Advanced Placement",
      heading: "AP at Sujan Public School",
      paragraphs: [
        `${SCHOOL.name} officially offers Advanced Placement (AP). Contact the school office for the available subjects, preparation options and examination registration arrangements.`,
        "The College Board's AP Program gives high-school students the opportunity to study college-level material and demonstrate their learning through AP Exams. Qualifying scores may earn university credit, advanced placement, or both, depending on each university's policy.",
      ],
    },
    {
      type: "features",
      heading: "Why consider AP?",
      items: [
        { title: "Explore subjects in depth", text: "Experience demanding coursework and discover subjects you may wish to study at university.", icon: "book" },
        { title: "Develop university skills", text: "Practise analysis, problem-solving, independent study and clear communication.", icon: "lightbulb" },
        { title: "Credit and placement", text: "Some universities award credit or placement for qualifying scores. Check the policy of each institution you apply to.", icon: "graduation" },
      ],
    },
    {
      type: "prose",
      heading: "Subjects and preparation",
      paragraphs: [
        "Review College Board's AP course descriptions before choosing an exam. They explain the topics, skills and examination format for each subject.",
        "Ask the school which AP options are available and discuss preparation alongside your regular studies. AP recognition, admissions considerations and any tuition savings depend on the university; they are not guaranteed.",
      ],
    },
    {
      type: "prose",
      heading: "Exam dates and registration",
      paragraphs: [
        "AP Exams normally take place in May. Use College Board's current exam calendar for the official dates and subject schedule; do not rely on a previous year's timetable.",
        "Registration requires advance planning. Contact the school office for the applicable registration deadline, examination location, fees, payment instructions, cancellation and refund terms, and any late-testing arrangements. These can vary by testing location.",
      ],
    },
    {
      type: "links",
      heading: "Official College Board resources",
      items: [
        { label: "About AP and its benefits", url: "https://apstudents.collegeboard.org/what-is-ap" },
        { label: "AP courses and exam descriptions", url: "https://apstudents.collegeboard.org/course-index-page" },
        { label: "Current AP exam dates", url: "https://apcentral.collegeboard.org/exam-administration-ordering-scores/exam-dates" },
        { label: "International university recognition", url: "https://international.collegeboard.org/find-universities-that-recognize-ap-sat" },
      ],
    },
    { type: "cta", heading: "Enquire about AP", text: "Contact the school office for AP subjects, examination arrangements and registration details." },
  ],
};