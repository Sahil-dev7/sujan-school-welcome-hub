import {
  BookOpen, Users, Sparkles, Trophy, Heart, ShieldCheck, GraduationCap, FlaskConical, Monitor,
  Library, Bus, Palette, Music, Map, Star, Compass, CalendarDays, Megaphone, Leaf, Lightbulb,
  Building2, Phone, Mail, MapPin, ClipboardList, FileText, Wallet, Medal, Camera, Video,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/content/types";

const MAP: Record<IconName, React.ComponentType<LucideProps>> = {
  book: BookOpen, users: Users, sparkles: Sparkles, trophy: Trophy, heart: Heart, shield: ShieldCheck,
  graduation: GraduationCap, flask: FlaskConical, monitor: Monitor, library: Library, bus: Bus,
  palette: Palette, music: Music, map: Map, star: Star, compass: Compass, calendar: CalendarDays,
  megaphone: Megaphone, leaf: Leaf, lightbulb: Lightbulb, building: Building2, phone: Phone, mail: Mail,
  pin: MapPin, clipboard: ClipboardList, file: FileText, wallet: Wallet, medal: Medal, camera: Camera,
  video: Video,
};

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = MAP[name];
  return <C aria-hidden="true" {...props} />;
}
