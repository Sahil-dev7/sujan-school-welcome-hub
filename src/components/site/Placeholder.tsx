import { PencilLine } from "lucide-react";
import { cn } from "@/lib/utils";

/** Clearly marked box for information the school has not supplied yet. */
export function Placeholder({ label, hint, className }: { label: string; hint: string; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-dashed border-placeholder-foreground/35 bg-placeholder p-6 text-placeholder-foreground",
        className,
      )}
      data-placeholder="true"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-placeholder-foreground/10">
          <PencilLine className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]">To be added by the school</p>
          <p className="mt-1 font-display text-lg font-semibold">{label}</p>
          <p className="mt-1 text-sm leading-relaxed opacity-90">{hint}</p>
        </div>
      </div>
    </div>
  );
}

/** Small tag for suggested wording awaiting the school's review. */
export function DraftTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-placeholder px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-placeholder-foreground",
        className,
      )}
      title="Suggested wording — for the school to review and edit"
    >
      <PencilLine className="h-3 w-3" aria-hidden="true" /> Draft for review
    </span>
  );
}

export function PhotoNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs italic text-muted-foreground", className)}>
      Representative photographs — to be replaced with the school's own pictures.
    </p>
  );
}
