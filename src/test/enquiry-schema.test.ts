import { describe, expect, it } from "vitest";
import { admissionEnquirySchema, contactEnquirySchema } from "@/lib/enquiry-schema";

const validAdmission = {
  kind: "admission" as const,
  parentName: "Ramesh Patel",
  studentName: "Anika Patel",
  classApplying: "Class V",
  mobile: "9303262253",
  email: "",
  message: "",
};

describe("admission enquiry validation", () => {
  it("accepts a complete enquiry and drops an empty email", () => {
    const r = admissionEnquirySchema.parse(validAdmission);
    expect(r.email).toBeUndefined();
    expect(r.mobile).toBe("9303262253");
  });

  it("normalises a +91 prefix and spaces in the mobile number", () => {
    const r = admissionEnquirySchema.parse({ ...validAdmission, mobile: "+91 93032 62253" });
    expect(r.mobile).toBe("9303262253");
  });

  it("rejects a mobile number that does not start with 6-9", () => {
    expect(admissionEnquirySchema.safeParse({ ...validAdmission, mobile: "5303262253" }).success).toBe(false);
  });

  it("rejects a mobile number that is not 10 digits", () => {
    expect(admissionEnquirySchema.safeParse({ ...validAdmission, mobile: "93032622" }).success).toBe(false);
  });

  it("requires the parent name", () => {
    expect(admissionEnquirySchema.safeParse({ ...validAdmission, parentName: " " }).success).toBe(false);
  });

  it("requires the student name", () => {
    expect(admissionEnquirySchema.safeParse({ ...validAdmission, studentName: "" }).success).toBe(false);
  });

  it("requires a class from the list", () => {
    expect(admissionEnquirySchema.safeParse({ ...validAdmission, classApplying: "Class XIII" }).success).toBe(false);
  });

  it("rejects an invalid email when one is given", () => {
    expect(admissionEnquirySchema.safeParse({ ...validAdmission, email: "not-an-email" }).success).toBe(false);
  });
});

describe("contact enquiry validation", () => {
  const validContact = {
    kind: "contact" as const,
    name: "Sunita Verma",
    mobile: "9713232040",
    subject: "School timings",
    message: "Please share the school timings for Class VI.",
  };

  it("accepts a complete message", () => {
    expect(contactEnquirySchema.safeParse(validContact).success).toBe(true);
  });

  it("requires a message of at least 10 characters", () => {
    expect(contactEnquirySchema.safeParse({ ...validContact, message: "Hi" }).success).toBe(false);
  });

  it("requires a subject", () => {
    expect(contactEnquirySchema.safeParse({ ...validContact, subject: "" }).success).toBe(false);
  });
});
