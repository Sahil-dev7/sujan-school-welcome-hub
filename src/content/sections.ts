import { SCHOOL } from "@/lib/site";
import type { Section } from "./types";

const YEARS = new Date().getFullYear() - SCHOOL.established;

/**
 * Site map and page content. Text marked `draft` is suggested wording for the
 * school to review; `placeholder` blocks mark information the school must supply.
 */
export const SECTIONS: Section[] = [
  {
    slug: "about",
    title: "About Us",
    tagline: "Rooted in Kantaphod since 2004",
    intro: `${SCHOOL.name} is a private, English-medium, co-educational school in Kantaphod, District Dewas, affiliated to the ${SCHOOL.board}.`,
    image: "campus",
    pages: [
      {
        slug: "introduction",
        title: "School Introduction",
        summary: "Who we are, where we are, and what we stand for.",
        icon: "building",
        image: "campus",
        blocks: [
          {
            type: "imageText",
            image: "students",
            eyebrow: "Welcome",
            heading: "An English-medium school for the families of Kantaphod",
            paragraphs: [
              `${SCHOOL.name} was established in ${SCHOOL.established} on Indore Road in Kantaphod, Tehsil Satwas, District Dewas. For ${YEARS} years the school has offered English-medium education to boys and girls from the town and surrounding villages.`,
              `The school follows the ${SCHOOL.board} curriculum and is a private, unaided, co-educational institution.`,
            ],
          },
          { type: "facts" },
          {
            type: "placeholder",
            label: "School introduction",
            hint: "Add a short paragraph in the school's own words — the founders' intent, the community it serves and what makes the school distinctive.",
          },
        ],
      },
      {
        slug: "history",
        title: "Our History",
        summary: `From our founding in ${SCHOOL.established} to the present day.`,
        icon: "calendar",
        image: "assembly",
        blocks: [
          {
            type: "prose",
            eyebrow: "Our journey",
            heading: `Serving Kantaphod since ${SCHOOL.established}`,
            paragraphs: [
              `${SCHOOL.name} opened its doors in ${SCHOOL.established} at Ward No. 3, Indore Road, Kantaphod. It was founded to give children in the area access to English-medium schooling close to home.`,
            ],
          },
          {
            type: "timeline",
            heading: "Milestones",
            items: [
              { year: String(SCHOOL.established), title: "The school is established", text: "Founded in Kantaphod as an English-medium, co-educational school." },
              { year: "Year", title: "Milestone to be added", text: "For example: first board examination batch, a new building, or Higher Secondary classes starting.", placeholder: true },
              { year: "Year", title: "Milestone to be added", text: "Add further milestones confirmed by the school management.", placeholder: true },
              { year: String(new Date().getFullYear()), title: "Today", text: `${YEARS} years of educating children in Kantaphod and nearby villages.` },
            ],
          },
        ],
      },
      {
        slug: "vision-mission",
        title: "Vision and Mission",
        summary: "The purpose that guides our teaching and our community.",
        icon: "compass",
        image: "students",
        blocks: [
          {
            type: "quote",
            text: "To nurture confident, curious and responsible young people who carry knowledge, character and compassion into every part of their lives.",
            by: "Our Vision — draft for school review",
          },
          {
            type: "features",
            eyebrow: "Our mission",
            heading: "What we work towards every day",
            draft: true,
            items: [
              { title: "Strong foundations", text: "Give every child sound fundamentals in language, mathematics and science.", icon: "book" },
              { title: "Good character", text: "Encourage honesty, discipline, respect and service to others.", icon: "heart" },
              { title: "Confident communicators", text: "Build fluency and confidence in English alongside respect for Hindi and local culture.", icon: "megaphone" },
              { title: "All-round growth", text: "Make room for sports, arts and activities as part of everyday school life.", icon: "sparkles" },
            ],
          },
        ],
      },
      {
        slug: "philosophy",
        title: "Our Philosophy",
        summary: "How we believe children learn best.",
        icon: "lightbulb",
        image: "classroom",
        blocks: [
          {
            type: "prose",
            eyebrow: "Our philosophy",
            heading: "Every child can learn, and every child matters",
            draft: true,
            paragraphs: [
              "We believe children learn best when they feel safe, known and encouraged. Our classrooms aim to balance discipline with warmth, and instruction with curiosity.",
              "Education is a partnership between school and family. We value parents as partners and keep them informed about their child's progress and wellbeing.",
            ],
          },
          {
            type: "placeholder",
            label: "School philosophy",
            hint: "Replace the draft above with the school's own statement of educational philosophy.",
          },
        ],
      },
      {
        slug: "principals-message",
        title: "Principal's Message",
        summary: `A message from our Principal, ${SCHOOL.principal.name}.`,
        icon: "users",
        image: "assembly",
        blocks: [{ type: "principal" }],
      },
      {
        slug: "management",
        title: "Management",
        summary: "The people responsible for the school's direction.",
        icon: "users",
        image: "campus",
        blocks: [
          {
            type: "prose",
            heading: "School management",
            paragraphs: [
              `${SCHOOL.name} is a private, unaided school managed independently of government funding.`,
            ],
          },
          {
            type: "placeholder",
            label: "Management committee",
            hint: "Add the name of the managing society or trust, and the names and roles of the Chairperson, Director, Secretary and other members — with photographs if available.",
          },
        ],
      },
      {
        slug: "values",
        title: "Our Values",
        summary: "The principles we hope every student carries with them.",
        icon: "heart",
        image: "students",
        blocks: [
          {
            type: "features",
            eyebrow: "Our values",
            heading: "What we stand for",
            draft: true,
            items: [
              { title: "Respect", text: "For teachers, parents, classmates and ourselves.", icon: "heart" },
              { title: "Integrity", text: "Being honest and doing the right thing, even when no one is watching.", icon: "shield" },
              { title: "Curiosity", text: "Asking questions and enjoying the process of finding answers.", icon: "lightbulb" },
              { title: "Discipline", text: "Punctuality, effort and care in everything we do.", icon: "clipboard" },
              { title: "Compassion", text: "Kindness towards others and care for our community.", icon: "users" },
              { title: "Excellence", text: "Doing our best and taking pride in our work.", icon: "star" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "academics",
    title: "Academics",
    tagline: `${SCHOOL.board} · English medium`,
    intro: `Our academic programme follows the ${SCHOOL.board} curriculum, taught in English, from the early years through to the senior classes.`,
    image: "classroom",
    overview: [{ type: "programmes" }],
    pages: [
      {
        slug: "overview",
        title: "Academic Overview",
        summary: "Our curriculum, stages of schooling and approach to learning.",
        icon: "graduation",
        image: "classroom",
        blocks: [
          {
            type: "imageText",
            image: "classroom",
            eyebrow: "Academics",
            heading: `Following the ${SCHOOL.board}`,
            paragraphs: [
              `Teaching at ${SCHOOL.name} follows the syllabus and examination framework of the ${SCHOOL.board}. English is the medium of instruction across classes.`,
              "Schooling is organised into stages, each with its own focus — from early literacy and numeracy to subject depth and board examination preparation.",
            ],
          },
          { type: "programmes" },
        ],
      },
      {
        slug: "pre-primary",
        title: "Pre-Primary Education",
        summary: "Early years learning through play, stories and activity.",
        icon: "sparkles",
        image: "prePrimary",
        blocks: [
          {
            type: "placeholder",
            label: "Pre-primary classes",
            hint: "Confirm whether the school offers Nursery / LKG / UKG classes, the age criteria, and timings. Remove this page from the menu if not offered.",
          },
          {
            type: "imageText",
            image: "prePrimary",
            eyebrow: "The early years",
            heading: "Learning through play",
            paragraphs: [
              "In the early years, children learn best through play, songs, stories and hands-on activities that build language, number sense, motor skills and confidence.",
            ],
          },
        ],
      },
      {
        slug: "primary",
        title: "Primary Education",
        summary: "Classes I to V — building strong foundations.",
        icon: "book",
        image: "art",
        blocks: [
          {
            type: "imageText",
            image: "art",
            eyebrow: "Classes I – V",
            heading: "Strong foundations in reading, writing and number",
            paragraphs: [
              "The primary years focus on fluent reading and writing in English and Hindi, confident arithmetic, and curiosity about the world through environmental studies, art and activity.",
            ],
          },
          {
            type: "placeholder",
            label: "Primary subjects and timings",
            hint: "List the subjects taught in Classes I–V, school timings and class sizes if the school wishes to share them.",
          },
        ],
      },
      {
        slug: "middle-school",
        title: "Middle School",
        summary: "Classes VI to VIII — widening horizons.",
        icon: "compass",
        image: "computer",
        blocks: [
          {
            type: "imageText",
            image: "computer",
            eyebrow: "Classes VI – VIII",
            heading: "Widening horizons, building independence",
            paragraphs: [
              "In the middle years students meet each subject in greater depth — science, mathematics, social science and languages — and develop habits of independent study.",
            ],
          },
          {
            type: "placeholder",
            label: "Middle school subjects",
            hint: "List the subjects, languages and any computer or activity periods offered in Classes VI–VIII.",
          },
        ],
      },
      {
        slug: "secondary",
        title: "Secondary Education",
        summary: "Classes IX to XII — board preparation and higher secondary.",
        icon: "graduation",
        image: "science",
        blocks: [
          {
            type: "imageText",
            image: "science",
            eyebrow: "Classes IX – XII",
            heading: "Secondary and Higher Secondary",
            paragraphs: [
              `Students in Classes IX and X prepare for the ${SCHOOL.board} High School examination. Higher Secondary (Classes XI and XII) leads to the Higher Secondary examination.`,
            ],
          },
          {
            type: "placeholder",
            label: "Higher Secondary streams",
            hint: "List the streams offered in Classes XI–XII (for example Science – Maths, Science – Biology, Commerce, Arts) and the subjects in each.",
          },
        ],
      },
      {
        slug: "curriculum",
        title: "Curriculum",
        summary: `The ${SCHOOL.board} framework we follow.`,
        icon: "clipboard",
        image: "library",
        blocks: [
          {
            type: "prose",
            eyebrow: "Curriculum",
            heading: `${SCHOOL.board} curriculum`,
            paragraphs: [
              `The school follows the prescribed curriculum and textbooks of the ${SCHOOL.board}, with English as the medium of instruction.`,
              "Alongside core subjects, students take part in co-curricular activities such as sports, art, music and cultural programmes.",
            ],
          },
          {
            type: "placeholder",
            label: "Subjects by class",
            hint: "Add a class-wise subject list and the assessment pattern (unit tests, half-yearly and annual examinations).",
          },
        ],
      },
      {
        slug: "teaching-methodology",
        title: "Teaching Methodology",
        summary: "How lessons are planned and delivered.",
        icon: "lightbulb",
        image: "classroom",
        blocks: [
          {
            type: "features",
            eyebrow: "In the classroom",
            heading: "Our approach to teaching",
            draft: true,
            items: [
              { title: "Clear explanation", text: "Concepts are explained step by step, with examples from everyday life.", icon: "lightbulb" },
              { title: "Active participation", text: "Students are encouraged to ask questions, discuss and present.", icon: "users" },
              { title: "Practice and revision", text: "Regular classwork, homework and revision build lasting understanding.", icon: "book" },
              { title: "Regular assessment", text: "Tests help teachers identify where each child needs support.", icon: "clipboard" },
            ],
          },
        ],
      },
      {
        slug: "academic-calendar",
        title: "Academic Calendar",
        summary: "Key dates for the school year.",
        icon: "calendar",
        image: "assembly",
        blocks: [
          {
            type: "prose",
            heading: "Academic calendar",
            paragraphs: ["The school's calendar of terms, examinations, holidays and events will be published here."],
          },
          {
            type: "placeholder",
            label: "Academic calendar for the current session",
            hint: "Add session start date, examination schedule, vacations and major events — or upload the calendar as a PDF.",
          },
        ],
      },
    ],
  },
  {
    slug: "campus",
    title: "Campus & Facilities",
    tagline: "Spaces for learning, play and growth",
    intro: "An overview of the school's campus and learning spaces. Photographs shown are representative and will be replaced with images of our own campus.",
    image: "library",
    pages: [
      {
        slug: "infrastructure",
        title: "School Infrastructure",
        summary: "Our buildings, classrooms and grounds.",
        icon: "building",
        image: "campus",
        blocks: [
          {
            type: "imageText",
            image: "campus",
            eyebrow: "Our campus",
            heading: "On Indore Road, Kantaphod",
            paragraphs: [`The school campus is located at Ward No. 3, Indore Road, Kantaphod, District Dewas.`],
          },
          {
            type: "placeholder",
            label: "Campus details",
            hint: "Describe the campus: number of buildings and classrooms, playground, drinking water, toilets, and any other facilities the school wishes to highlight.",
          },
        ],
      },
      {
        slug: "smart-classrooms",
        title: "Smart Classrooms",
        summary: "Technology-assisted teaching.",
        icon: "monitor",
        image: "classroom",
        blocks: [
          {
            type: "placeholder",
            label: "Smart classrooms",
            hint: "Confirm whether the school has smart classrooms or projectors, how many, and for which classes. Remove this page if not applicable.",
          },
        ],
      },
      {
        slug: "science-laboratories",
        title: "Science Laboratories",
        summary: "Learning science by doing.",
        icon: "flask",
        image: "science",
        blocks: [
          {
            type: "imageText",
            image: "science",
            eyebrow: "Science",
            heading: "Learning science by doing",
            paragraphs: ["Practical work helps students understand scientific concepts and prepares senior students for board practical examinations."],
          },
          {
            type: "placeholder",
            label: "Laboratories",
            hint: "List the laboratories available (Physics, Chemistry, Biology) and the classes that use them.",
          },
        ],
      },
      {
        slug: "computer-laboratory",
        title: "Computer Laboratory",
        summary: "Digital skills for a modern world.",
        icon: "monitor",
        image: "computer",
        blocks: [
          {
            type: "imageText",
            image: "computer",
            eyebrow: "Digital skills",
            heading: "Computer education",
            paragraphs: ["Basic computer skills — typing, documents, internet safety and an introduction to programming — are increasingly essential for every student."],
          },
          {
            type: "placeholder",
            label: "Computer lab details",
            hint: "Add the number of computers, the classes that use the lab and the computer curriculum.",
          },
        ],
      },
      {
        slug: "library",
        title: "Library",
        summary: "A home for reading and research.",
        icon: "library",
        image: "library",
        blocks: [
          {
            type: "imageText",
            image: "library",
            eyebrow: "Reading",
            heading: "Building a love of reading",
            paragraphs: ["Reading widely builds vocabulary, imagination and understanding across every subject."],
          },
          {
            type: "placeholder",
            label: "Library details",
            hint: "Add the number of books, newspapers or magazines available, and library periods for students.",
          },
        ],
      },
      {
        slug: "sports-facilities",
        title: "Sports Facilities",
        summary: "Grounds and equipment for games and fitness.",
        icon: "trophy",
        image: "cricket",
        blocks: [
          {
            type: "imageText",
            image: "cricket",
            eyebrow: "Sports",
            heading: "Room to run and play",
            paragraphs: ["Physical activity is part of a healthy school day, building fitness, teamwork and sportsmanship."],
          },
          {
            type: "placeholder",
            label: "Sports facilities",
            hint: "List the playground and sports facilities available (e.g. cricket, kabaddi, kho-kho, volleyball, athletics) and indoor games.",
          },
        ],
      },
      {
        slug: "transportation",
        title: "Transportation",
        summary: "Getting to and from school.",
        icon: "bus",
        image: "campus",
        blocks: [
          {
            type: "placeholder",
            label: "School transport",
            hint: "Confirm whether the school provides bus or van transport, the routes and villages covered, and how parents can enquire. Remove this page if not offered.",
          },
          { type: "cta", heading: "Ask about transport", text: "Call the school office to ask about travel arrangements for your child." },
        ],
      },
      {
        slug: "safety-security",
        title: "Safety and Security",
        summary: "Keeping every child safe at school.",
        icon: "shield",
        image: "assembly",
        blocks: [
          {
            type: "prose",
            heading: "A safe place to learn",
            paragraphs: ["Children learn best when they feel safe. The safety and wellbeing of every student is a shared responsibility of the school and its families."],
          },
          {
            type: "placeholder",
            label: "Safety measures",
            hint: "Describe the school's safety arrangements — for example CCTV, boundary wall, gate staff, visitor policy, first aid and fire safety — only as actually in place.",
          },
        ],
      },
    ],
  },
  {
    slug: "student-life",
    title: "Student Life",
    tagline: "Beyond the classroom",
    intro: "School is about more than lessons. Sports, arts, celebrations and competitions help children discover their talents and grow in confidence.",
    image: "cultural",
    pages: [
      {
        slug: "sports-games",
        title: "Sports and Games",
        summary: "Fitness, teamwork and the joy of play.",
        icon: "trophy",
        image: "sports",
        blocks: [
          {
            type: "imageText",
            image: "sports",
            eyebrow: "Sports",
            heading: "Fitness, teamwork and fair play",
            paragraphs: ["Games teach children to work as a team, to win graciously and to lose with dignity — lessons that last a lifetime."],
          },
          { type: "placeholder", label: "Sports offered", hint: "List the sports and games students play, and any annual sports day or inter-house events." },
        ],
      },
      {
        slug: "cultural-activities",
        title: "Cultural Activities",
        summary: "Celebrating music, dance and tradition.",
        icon: "music",
        image: "cultural",
        blocks: [
          {
            type: "imageText",
            image: "cultural",
            eyebrow: "Culture",
            heading: "Celebrating music, dance and tradition",
            paragraphs: ["Festivals and cultural programmes give students a stage to perform and a chance to celebrate the rich traditions of Malwa and India."],
          },
          { type: "placeholder", label: "Cultural programmes", hint: "List the festivals and national days celebrated at school, and cultural activities offered." },
        ],
      },
      {
        slug: "art-creativity",
        title: "Art and Creativity",
        summary: "Drawing, painting and craft.",
        icon: "palette",
        image: "art",
        blocks: [
          {
            type: "imageText",
            image: "art",
            eyebrow: "Art",
            heading: "Room for imagination",
            paragraphs: ["Drawing, painting and craft help children express themselves, observe carefully and build fine motor skills."],
          },
          { type: "placeholder", label: "Art activities", hint: "Describe art periods, exhibitions or craft activities at the school." },
        ],
      },
      {
        slug: "competitions",
        title: "Competitions",
        summary: "Quizzes, debates and contests.",
        icon: "medal",
        image: "students",
        blocks: [
          {
            type: "placeholder",
            label: "Competitions",
            hint: "List the inter-school or in-school competitions students take part in — quiz, debate, essay, drawing, science exhibition, sports meets.",
          },
        ],
      },
      {
        slug: "educational-trips",
        title: "Educational Trips",
        summary: "Learning beyond the school gate.",
        icon: "map",
        image: "students",
        blocks: [
          {
            type: "placeholder",
            label: "Educational trips",
            hint: "Add details and photographs of recent educational excursions or picnics organised by the school.",
          },
        ],
      },
      {
        slug: "annual-functions",
        title: "Annual Functions",
        summary: "Our yearly celebration of student talent.",
        icon: "star",
        image: "cultural",
        blocks: [
          {
            type: "imageText",
            image: "cultural",
            eyebrow: "Annual day",
            heading: "A celebration of the year",
            paragraphs: ["The annual function brings students, parents and teachers together to celebrate a year of learning and talent."],
          },
          { type: "placeholder", label: "Annual function", hint: "Add the date, chief guests, programme and photographs of the most recent annual function." },
        ],
      },
      {
        slug: "student-clubs",
        title: "Student Clubs",
        summary: "Interest groups and houses.",
        icon: "users",
        image: "assembly",
        blocks: [
          {
            type: "placeholder",
            label: "Clubs and houses",
            hint: "List any student clubs (eco, science, literary) or house system at the school, with their activities.",
          },
        ],
      },
    ],
  },
  {
    slug: "admissions",
    title: "Admissions",
    tagline: "Join the Sujan family",
    intro: "We welcome enquiries from families in Kantaphod and the surrounding area. Send an enquiry online or call the school office to learn more.",
    image: "students",
    pages: [
      {
        slug: "overview",
        title: "Admission Overview",
        summary: "How to begin your child's journey with us.",
        icon: "graduation",
        image: "students",
        blocks: [
          {
            type: "imageText",
            image: "students",
            eyebrow: "Admissions",
            heading: "Welcome to the admissions office",
            paragraphs: [
              `${SCHOOL.name} is a co-educational, English-medium school following the ${SCHOOL.board}. Admission enquiries are welcome throughout the year.`,
              "The quickest way to begin is to send an online enquiry — the school office will contact you with details about seat availability, the admission form and the next steps.",
            ],
          },
          {
            type: "placeholder",
            label: "Admission dates",
            hint: "Add the admission window for the upcoming session (start and last date) and seat availability by class.",
          },
          { type: "cta", heading: "Ready to begin?", text: "Send an admission enquiry and the school office will get back to you." },
        ],
      },
      {
        slug: "procedure",
        title: "Admission Procedure",
        summary: "Step by step, from enquiry to confirmation.",
        icon: "clipboard",
        blocks: [
          {
            type: "steps",
            heading: "How admission works",
            note: "Typical process — to be confirmed by the school office.",
            items: [
              { title: "Send an enquiry", text: "Fill in the online enquiry form or call the school office." },
              { title: "Visit the school", text: "Meet the staff, see the campus and collect the admission form." },
              { title: "Submit the form", text: "Return the completed form with the required documents." },
              { title: "Interaction", text: "Where applicable, a short interaction or assessment for the student." },
              { title: "Confirmation", text: "On confirmation of the seat, complete the fee formalities." },
            ],
          },
        ],
      },
      {
        slug: "eligibility",
        title: "Eligibility Criteria",
        summary: "Age and class requirements.",
        icon: "users",
        blocks: [
          {
            type: "prose",
            heading: "Eligibility",
            paragraphs: ["Admission to each class depends on the child's age and their previous schooling, in line with the rules of the Madhya Pradesh School Education Department."],
          },
          {
            type: "placeholder",
            label: "Age criteria by class",
            hint: "Add the minimum age for each entry class (for example Nursery, KG, Class I) as of the cut-off date, and requirements for admission to higher classes.",
          },
        ],
      },
      {
        slug: "documents",
        title: "Required Documents",
        summary: "What to bring with the admission form.",
        icon: "file",
        blocks: [
          {
            type: "list",
            heading: "Documents usually required",
            note: "Typical list — please confirm with the school office before your visit.",
            items: [
              "Birth certificate of the student",
              "Transfer Certificate (TC) from the previous school, for Class II and above",
              "Mark sheet / report card of the previous class",
              "Aadhaar card of the student and parents",
              "Samagra ID (family and member ID)",
              "Recent passport-size photographs of the student",
              "Caste certificate, if applicable",
            ],
          },
        ],
      },
      {
        slug: "fee-structure",
        title: "Fee Structure",
        summary: "Fees for the current session.",
        icon: "wallet",
        blocks: [
          {
            type: "placeholder",
            label: "Fee structure",
            hint: "Add the class-wise fee structure for the current session (admission fee, tuition fee, other charges and payment schedule), or note that fee details are shared by the office on request.",
          },
          { type: "cta", heading: "Questions about fees?", text: "Call the school office or send an enquiry for fee details." },
        ],
      },
      {
        slug: "enquiry",
        title: "Online Admission Enquiry",
        summary: "Send us your enquiry online.",
        icon: "mail",
        blocks: [{ type: "enquiry", variant: "admission" }],
      },
    ],
  },
  {
    slug: "achievements",
    title: "Achievements",
    tagline: "Celebrating our students",
    intro: "A record of our students' accomplishments in academics, sports and beyond.",
    image: "sports",
    pages: [
      {
        slug: "academic",
        title: "Academic Achievements",
        summary: "Board results and academic honours.",
        icon: "graduation",
        image: "science",
        blocks: [
          {
            type: "placeholder",
            label: "Academic achievements",
            hint: "Add verified board examination results, toppers' names and photographs, and other academic honours.",
          },
        ],
      },
      {
        slug: "sports",
        title: "Sports Achievements",
        summary: "Medals and tournament results.",
        icon: "trophy",
        image: "cricket",
        blocks: [
          {
            type: "placeholder",
            label: "Sports achievements",
            hint: "Add verified results from block, district, state or other tournaments, with student names and photographs.",
          },
        ],
      },
      {
        slug: "student-awards",
        title: "Student Awards",
        summary: "Recognition for talent and character.",
        icon: "medal",
        image: "students",
        blocks: [
          {
            type: "placeholder",
            label: "Student awards",
            hint: "Add awards and recognition received by students in competitions, olympiads, arts or community service.",
          },
        ],
      },
    ],
  },
  {
    slug: "gallery",
    title: "Gallery",
    tagline: "Moments from school life",
    intro: "Photographs and videos from life at school. Photographs currently shown are representative and will be replaced with the school's own pictures.",
    image: "cultural",
    pages: [
      {
        slug: "photos",
        title: "Photo Gallery",
        summary: "Moments from classrooms, grounds and stage.",
        icon: "camera",
        image: "cultural",
        blocks: [{ type: "gallery" }],
      },
      {
        slug: "videos",
        title: "Video Gallery",
        summary: "Watch our school videos.",
        icon: "video",
        image: "assembly",
        blocks: [{ type: "video" }],
      },
      {
        slug: "events",
        title: "School Events",
        summary: "Photographs from our celebrations and events.",
        icon: "star",
        image: "sports",
        blocks: [
          {
            type: "placeholder",
            label: "Event albums",
            hint: "Add photo albums from school events — Independence Day, Republic Day, annual function, sports day and festivals.",
          },
          { type: "gallery", heading: "Representative photographs" },
        ],
      },
    ],
  },
  {
    slug: "news",
    title: "News & Events",
    tagline: "What's happening at school",
    intro: "Latest news, upcoming events and announcements from the school.",
    image: "assembly",
    pages: [
      {
        slug: "latest",
        title: "Latest News",
        summary: "Recent news from the school.",
        icon: "megaphone",
        image: "assembly",
        blocks: [{ type: "news", kind: "news" }],
      },
      {
        slug: "upcoming-events",
        title: "Upcoming Events",
        summary: "Dates for your diary.",
        icon: "calendar",
        image: "cultural",
        blocks: [{ type: "news", kind: "events" }],
      },
      {
        slug: "announcements",
        title: "School Announcements",
        summary: "Notices for students and parents.",
        icon: "clipboard",
        image: "classroom",
        blocks: [{ type: "news", kind: "announcements" }],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact Us",
    tagline: "We'd love to hear from you",
    intro: "Visit us on Indore Road in Kantaphod, call the school office, or send us a message.",
    image: "campus",
    overview: [{ type: "contactCards" }, { type: "map" }, { type: "enquiry", variant: "contact" }],
    pages: [
      {
        slug: "address",
        title: "School Address",
        summary: "Where to find us.",
        icon: "pin",
        blocks: [{ type: "contactCards" }, { type: "map" }],
      },
      {
        slug: "information",
        title: "Contact Information",
        summary: "Phone numbers and email.",
        icon: "phone",
        blocks: [{ type: "contactCards" }],
      },
      {
        slug: "map",
        title: "Google Maps",
        summary: "Directions to the school.",
        icon: "map",
        blocks: [{ type: "map" }],
      },
      {
        slug: "enquiry-form",
        title: "Enquiry Form",
        summary: "Send us a message.",
        icon: "mail",
        blocks: [{ type: "enquiry", variant: "contact" }],
      },
    ],
  },
];

export function getSection(slug: string) {
  return SECTIONS.find((s) => s.slug === slug);
}

export function getPage(sectionSlug: string, pageSlug: string) {
  const section = getSection(sectionSlug);
  const page = section?.pages.find((p) => p.slug === pageSlug);
  return section && page ? { section, page } : undefined;
}
