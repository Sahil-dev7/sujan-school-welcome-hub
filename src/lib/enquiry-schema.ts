import { z } from "zod";

export const CLASS_OPTIONS = [
  "Pre-Primary (Nursery / KG)",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
] as const;

const name = z
  .string()
  .trim()
  .min(2, "Please enter at least 2 characters")
  .max(100, "Please keep this under 100 characters")
  .regex(/^[\p{L} .'-]+$/u, "Please use letters only");

/** Indian mobile number: 10 digits starting with 6–9. Accepts an optional +91 / 0 prefix and spaces. */
const mobile = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""))
  .pipe(z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"));

const optionalEmail = z
  .string()
  .trim()
  .max(255, "Email is too long")
  .email("Enter a valid email address")
  .or(z.literal(""))
  .optional()
  .transform((v) => (v ? v : undefined));

export const admissionEnquirySchema = z.object({
  kind: z.literal("admission"),
  parentName: name,
  studentName: name,
  classApplying: z.enum(CLASS_OPTIONS, { errorMap: () => ({ message: "Please choose a class" }) }),
  mobile,
  email: optionalEmail,
  message: z.string().trim().max(1000, "Please keep your message under 1000 characters").optional(),
});

export const contactEnquirySchema = z.object({
  kind: z.literal("contact"),
  name,
  mobile,
  email: optionalEmail,
  subject: z.string().trim().min(3, "Please enter a subject").max(150, "Please keep the subject short"),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000, "Please keep your message under 2000 characters"),
});

export const enquirySchema = z.discriminatedUnion("kind", [admissionEnquirySchema, contactEnquirySchema]);

export type AdmissionEnquiryInput = z.input<typeof admissionEnquirySchema>;
export type ContactEnquiryInput = z.input<typeof contactEnquirySchema>;
export type EnquiryInput = z.input<typeof enquirySchema>;
