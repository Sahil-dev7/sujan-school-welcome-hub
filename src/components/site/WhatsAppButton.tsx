import { SCHOOL } from "@/lib/site";
import { WhatsappIcon } from "./SocialIcons";

export function WhatsAppButton() {
  if (!SCHOOL.whatsapp) return null;
  const text = encodeURIComponent(`Hello, I would like to enquire about ${SCHOOL.name}.`);
  return (
    <a
      href={`https://wa.me/${SCHOOL.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the school on WhatsApp (opens in a new tab)"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary py-3 pl-3 pr-4 text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-gold-foreground">
        <WhatsappIcon className="h-5 w-5" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp us</span>
    </a>
  );
}
