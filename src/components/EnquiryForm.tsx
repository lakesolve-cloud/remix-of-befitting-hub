import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { ENQUIRY_TYPES, LOCATION_OPTIONS, PLACEHOLDER } from "@/data/site";
import { ActionButton, ActionLink } from "@/components/ui/action";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  location: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  location: "",
  message: "",
};

const fieldClass =
  "mt-2 h-12 w-full rounded-md border border-surface-foreground/20 bg-surface-foreground/5 px-4 text-sm text-surface-foreground placeholder:text-surface-foreground/45 transition-colors focus:border-accent focus:outline-none";

function validate(v: Values) {
  const errors: Partial<Record<keyof Values, string>> = {};
  if (!v.name.trim()) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (v.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!v.enquiryType) errors.enquiryType = "Please select an enquiry type.";
  if (!v.location) errors.location = "Please select a preferred location.";
  if (v.message.trim().length < 10) errors.message = "Please tell us a little more (10+ characters).";
  return errors;
}

function buildMailto(values: Values) {
  const subject = `Enquiry from ${values.name} — ${values.enquiryType}`;
  const body = `Name: ${values.name}
Email: ${values.email}
Phone: ${values.phone}
Enquiry Type: ${values.enquiryType}
Preferred Location: ${values.location}

Message:
${values.message}`;
  return `mailto:${PLACEHOLDER.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function EnquiryForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);
  const started = useRef(false);

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    if (!started.current) {
      started.current = true;
      track("contact_form_started");
    }
    setValues((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    track("contact_form_submitted", {
      enquiryType: values.enquiryType,
      location: values.location,
    });
    if (values.enquiryType === "Examination Centre") track("examination_enquiry_submitted");
    if (values.enquiryType === "Coworking Space") track("coworking_enquiry_submitted");

    // Open the user's email client with a pre-filled enquiry to info@befittinghub.com.
    if (typeof window !== "undefined") {
      window.location.href = buildMailto(values);
    }

    setSent(true);
    setValues(EMPTY);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface py-20 text-surface-foreground md:py-28"
    >
      <div className="container-hub grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Enquiry</p>
          <h2 id="contact-heading" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Ready to Work, Test or Grow?
          </h2>
          <p className="mt-5 text-surface-foreground/80">
            Tell us what you need and our team will help you find the right solution.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink
              href={PLACEHOLDER.phoneHref}
              variant="onDark"
              onClick={() => track("phone_clicked", { source: "enquiry" })}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us
            </ActionLink>
            <ActionLink
              href={PLACEHOLDER.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="onDark"
              onClick={() => track("whatsapp_clicked", { source: "enquiry" })}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </ActionLink>
            <ActionLink
              href={`mailto:${PLACEHOLDER.email}`}
              variant="onDark"
              onClick={() => track("email_clicked", { source: "enquiry" })}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Us
            </ActionLink>
          </div>

          <p className="mt-8 text-xs text-surface-foreground/60">
            Email us at {PLACEHOLDER.email}. Phone and WhatsApp numbers are placeholders pending confirmation.
          </p>
        </div>

        <div className="rounded-xl border border-surface-foreground/15 bg-surface-foreground/[0.04] p-6 sm:p-9">
          {sent ? (
            <div role="status" className="flex flex-col items-start gap-4 py-8">
              <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold">Enquiry received</h3>
              <p className="text-surface-foreground/80">
                Thank you for contacting Befitting Hub. We've opened your email app so you can send
                the enquiry directly to {PLACEHOLDER.email}. Our team will get back to you shortly.
              </p>
              <ActionButton variant="onDark" onClick={() => setSent(false)}>
                Send another enquiry
              </ActionButton>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" id="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  className={fieldClass}
                  aria-invalid={!!errors.name}
                />
              </Field>
              <Field label="Email Address" id="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                  className={fieldClass}
                  aria-invalid={!!errors.email}
                />
              </Field>
              <Field label="Phone Number" id="phone" error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={set("phone")}
                  placeholder="e.g. 0801 234 5678"
                  className={fieldClass}
                  aria-invalid={!!errors.phone}
                />
              </Field>
              <Field label="Enquiry Type" id="enquiryType" error={errors.enquiryType}>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={values.enquiryType}
                  onChange={set("enquiryType")}
                  className={cn(fieldClass, "appearance-none")}
                  aria-invalid={!!errors.enquiryType}
                >
                  <option value="">Select an option</option>
                  {ENQUIRY_TYPES.map((t) => (
                    <option key={t} value={t} className="text-foreground">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Location" id="location" error={errors.location} full>
                <div className="mt-2 flex flex-wrap gap-3">
                  {LOCATION_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className={cn(
                        "cursor-pointer rounded-md border px-5 py-3 text-sm font-medium transition-colors",
                        values.location === opt
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-surface-foreground/20 hover:border-surface-foreground/50",
                      )}
                    >
                      <input
                        type="radio"
                        name="location"
                        value={opt}
                        checked={values.location === opt}
                        onChange={set("location")}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </Field>
              <Field label="Message" id="message" error={errors.message} full>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={set("message")}
                  placeholder="Tell us what you need — dates, number of candidates, desks required…"
                  className={cn(fieldClass, "h-auto py-3")}
                  aria-invalid={!!errors.message}
                />
              </Field>

              <div className="sm:col-span-2">
                <ActionButton type="submit" size="lg" block>
                  Send Enquiry
                </ActionButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  full,
  children,
}: {
  label: string;
  id: string;
  error?: string | undefined;
  full?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="text-sm font-semibold text-surface-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs font-medium text-accent" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
