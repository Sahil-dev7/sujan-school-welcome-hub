import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

import type { Database, TablesInsert } from "@/integrations/supabase/types";
import { enquirySchema } from "./enquiry-schema";

/** Public endpoint: validates and stores an admission or contact enquiry. Insert-only; nothing is read back. */
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const row: TablesInsert<"enquiries"> =
      data.kind === "admission"
        ? {
            kind: "admission",
            name: data.parentName,
            student_name: data.studentName,
            class_applying: data.classApplying,
            mobile: data.mobile,
            email: data.email ?? null,
            message: data.message || null,
          }
        : {
            kind: "contact",
            name: data.name,
            mobile: data.mobile,
            email: data.email ?? null,
            subject: data.subject,
            message: data.message,
          };

    const { error } = await supabase.from("enquiries").insert(row);
    if (error) {
      console.error("enquiry insert failed", error);
      throw new Error("We couldn't send your enquiry. Please try again or call the school office.");
    }
    return { ok: true as const };
  });
