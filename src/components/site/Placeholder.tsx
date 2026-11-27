import { PencilLine } from "lucide-react";
import { cn } from "@/lib/utils";

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
      Photographs from the school's official Facebook page.
    </p>
  );
}

