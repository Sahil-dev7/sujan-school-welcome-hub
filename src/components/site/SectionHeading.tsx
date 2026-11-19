import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  inverted = false,
  className,
  children,
}: {
  eyebrow?: string | undefined;
  title: ReactNode;
  intro?: ReactNode | undefined;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center", inverted && "text-gold")}>
          <span className={cn("h-px w-8", inverted ? "bg-gold" : "bg-accent")} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-semibold leading-[1.1] md:text-[2.75rem]",
          inverted ? "text-ink-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", inverted ? "text-ink-foreground/75" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
      {children}
    </div>
  );
}
