/**
 * Thin analytics seam. Swap the sink for GA4 / PostHog / Segment later without
 * touching component code.
 */
export type AnalyticsEvent =
  | "homepage_viewed"
  | "service_viewed"
  | "location_viewed"
  | "gallery_viewed"
  | "partner_viewed"
  | "contact_form_started"
  | "contact_form_submitted"
  | "phone_clicked"
  | "whatsapp_clicked"
  | "email_clicked"
  | "directions_clicked"
  | "book_enquire_clicked"
  | "coworking_enquiry_submitted"
  | "examination_enquiry_submitted";

type Payload = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, payload: Payload = {}) {
  const detail = { event, ...payload, ts: Date.now() };
  if (typeof window !== "undefined") {
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push(detail);
    window.dispatchEvent(new CustomEvent("bh:analytics", { detail }));
  }
  if (import.meta.env.DEV) console.debug("[analytics]", detail);
}
