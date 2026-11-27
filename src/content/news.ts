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
  ],
  events: [
  ],
  announcements: [
    {
      category: "Notice",
      title: "Contact the school office",
      text: "For any queries, call the school office on the numbers listed on our contact page.",
      date: null,
      link: { section: "contact", label: "Contact details" },
    },
  ],
};
