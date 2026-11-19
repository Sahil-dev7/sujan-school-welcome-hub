export type NewsItem = {
  category: string;
  title: string;
  text: string;
  /** null = date not yet confirmed by the school */
  date: string | null;
  placeholder?: boolean;
  link?: { section: string; page?: string; label: string };
};

export const NEWS: Record<"news" | "events" | "announcements", NewsItem[]> = {
  news: [
    {
      category: "Announcement",
      title: "Our new official website is live",
      text: "Parents and students can now find information about the school, academics, admissions and contact details in one place.",
      date: null,
    },
    {
      category: "Admissions",
      title: "Admission enquiries now accepted online",
      text: "Families can send an admission enquiry through the website and the school office will get in touch.",
      date: null,
      link: { section: "admissions", page: "enquiry", label: "Send an enquiry" },
    },
    {
      category: "News",
      title: "News item to be added",
      text: "Share recent school news here — results, celebrations, visits or achievements.",
      date: null,
      placeholder: true,
    },
  ],
  events: [
    {
      category: "Event",
      title: "Annual Function",
      text: "Date and programme to be announced by the school.",
      date: null,
      placeholder: true,
    },
    {
      category: "Event",
      title: "Annual Sports Day",
      text: "Date and events to be announced by the school.",
      date: null,
      placeholder: true,
    },
    {
      category: "Event",
      title: "Parent–Teacher Meeting",
      text: "Date to be announced by the school.",
      date: null,
      placeholder: true,
    },
  ],
  announcements: [
    {
      category: "Notice",
      title: "Contact the school office",
      text: "For any queries, call the school office on the numbers listed on our contact page.",
      date: null,
      link: { section: "contact", label: "Contact details" },
    },
    {
      category: "Notice",
      title: "Announcement to be added",
      text: "Post notices for students and parents here — holidays, examination schedules and reminders.",
      date: null,
      placeholder: true,
    },
  ],
};
