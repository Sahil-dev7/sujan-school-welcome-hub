import { Mail, MapPin, Phone } from "lucide-react";
import { FULL_ADDRESS, SCHOOL, telHref } from "@/lib/site";
import { FacebookIcon, WhatsappIcon, YoutubeIcon } from "./SocialIcons";
import { Reveal } from "./Reveal";

export function ContactCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <Reveal className="rounded-2xl border bg-card p-6 shadow-soft">
        <MapPin className="h-6 w-6 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-primary">Address</h3>
        <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">{FULL_ADDRESS}</address>
      </Reveal>
      <Reveal delay={80} className="rounded-2xl border bg-card p-6 shadow-soft">
        <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-primary">Phone</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {SCHOOL.phones.map((p) => (
            <li key={p}>
              <a href={telHref(p)} className="font-medium text-foreground hover:text-accent">
                {p}
              </a>
            </li>
          ))}
        </ul>
        {SCHOOL.whatsapp && (
          <a
            href={`https://wa.me/${SCHOOL.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            <WhatsappIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
        )}
      </Reveal>
      <Reveal delay={160} className="rounded-2xl border bg-card p-6 shadow-soft">
        <Mail className="h-6 w-6 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-primary">Email</h3>
          <a href={`mailto:${SCHOOL.email}`} className="mt-2 block break-all text-sm font-medium hover:text-accent">
            {SCHOOL.email}
          </a>
      </Reveal>
      <Reveal delay={240} className="rounded-2xl border bg-card p-6 shadow-soft">
        <FacebookIcon className="h-6 w-6 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-primary">Social</h3>
        <div className="mt-4 flex gap-3 text-sm">
          <a href={SCHOOL.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium hover:text-accent">
            <FacebookIcon className="h-4 w-4" /> Facebook
          </a>
          <a href={SCHOOL.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium hover:text-accent">
            <YoutubeIcon className="h-4 w-4" /> YouTube
          </a>
        </div>
      </Reveal>
    </div>
  );
}
