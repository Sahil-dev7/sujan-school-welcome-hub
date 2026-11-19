import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Phone, Send } from "lucide-react";

import {
  admissionEnquirySchema,
  CLASS_OPTIONS,
  contactEnquirySchema,
  type AdmissionEnquiryInput,
  type ContactEnquiryInput,
} from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { SCHOOL, telHref } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function Success({ onReset, kind }: { onReset: () => void; kind: "admission" | "contact" }) {
  return (
    <div role="status" className="flex flex-col items-center rounded-2xl border bg-card px-6 py-12 text-center shadow-soft">
      <CheckCircle2 className="h-14 w-14 text-accent" aria-hidden="true" />
      <h3 className="mt-5 text-2xl font-semibold text-primary">Thank you — your {kind === "admission" ? "enquiry" : "message"} has been sent</h3>
      <p className="mt-3 max-w-md text-muted-foreground">
        The school office will contact you on the mobile number you provided. For anything urgent, please call{" "}
        <a href={telHref(SCHOOL.phones[0])} className="font-semibold text-foreground hover:text-accent">
          {SCHOOL.phones[0]}
        </a>
        .
      </p>
      <Button variant="outline" className="mt-6" onClick={onReset}>
        Send another
      </Button>
    </div>
  );
}

function Required() {
  return (
    <span className="text-accent" aria-hidden="true">
      {" "}
      *
    </span>
  );
}

export function AdmissionEnquiryForm() {
  const send = useServerFn(submitEnquiry);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<AdmissionEnquiryInput>({
    resolver: zodResolver(admissionEnquirySchema),
    defaultValues: { kind: "admission", parentName: "", studentName: "", mobile: "", email: "", message: "" } as AdmissionEnquiryInput,
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setError(null);
    try {
      await send({ data: values });
      setDone(true);
      form.reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  });

  if (done) return <Success kind="admission" onReset={() => setDone(false)} />;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-2xl border bg-card p-6 shadow-soft md:grid-cols-2 md:p-8">
        <FormField
          control={form.control}
          name="parentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parent / Guardian name<Required /></FormLabel>
              <FormControl>
                <Input autoComplete="name" placeholder="Full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student name<Required /></FormLabel>
              <FormControl>
                <Input placeholder="Child's full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="classApplying"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Class applying for<Required /></FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger onBlur={field.onBlur}>
                    <SelectValue placeholder="Choose a class" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CLASS_OPTIONS.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile number<Required /></FormLabel>
              <FormControl>
                <Input type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Email <span className="font-normal text-muted-foreground">(optional)</span></FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Message <span className="font-normal text-muted-foreground">(optional)</span></FormLabel>
              <FormControl>
                <Textarea rows={4} placeholder="Any questions about admission, transport or fees" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <p role="alert" className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive md:col-span-2">
            {error}
          </p>
        )}
        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">Fields marked * are required. Your details are only used to respond to your enquiry.</p>
          <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
            {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
            Send enquiry
          </Button>
        </div>
      </form>
    </Form>
  );
}

export function ContactEnquiryForm() {
  const send = useServerFn(submitEnquiry);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<ContactEnquiryInput>({
    resolver: zodResolver(contactEnquirySchema),
    defaultValues: { kind: "contact", name: "", mobile: "", email: "", subject: "", message: "" },
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setError(null);
    try {
      await send({ data: values });
      setDone(true);
      form.reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  });

  if (done) return <Success kind="contact" onReset={() => setDone(false)} />;

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-2xl border bg-card p-6 shadow-soft md:grid-cols-2 md:p-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name<Required /></FormLabel>
              <FormControl>
                <Input autoComplete="name" placeholder="Full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile number<Required /></FormLabel>
              <FormControl>
                <Input type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email <span className="font-normal text-muted-foreground">(optional)</span></FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject<Required /></FormLabel>
              <FormControl>
                <Input placeholder="What is this about?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Message<Required /></FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder="Write your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && (
          <p role="alert" className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive md:col-span-2">
            {error}
          </p>
        )}
        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
          <a href={telHref(SCHOOL.phones[0])} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
            <Phone className="h-4 w-4" aria-hidden="true" /> Prefer to talk? Call {SCHOOL.phones[0]}
          </a>
          <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
            Send message
          </Button>
        </div>
      </form>
    </Form>
  );
}
