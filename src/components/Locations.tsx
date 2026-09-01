import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone, Sparkles } from "lucide-react";
import { PLACEHOLDER } from "@/data/site";
import { LOCATIONS } from "@/data/site";
import { useReveal, useInViewOnce } from "@/hooks/use-reveal";
import { ActionLink } from "@/components/ui/action";
import { track } from "@/lib/analytics";

export function Locations() {
  const revealRef = useReveal<HTMLDivElement>();
  const seenRef = useInViewOnce<HTMLElement>(() => track("location_viewed"));

  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="border-y border-border bg-secondary/60 py-20 md:py-28"
      ref={seenRef}
    >
      <div className="container-hub" ref={revealRef}>
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Locations</p>
          <h2 id="locations-heading" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Find a Befitting Hub Near You
          </h2>
          <p className="mt-4 text-muted-foreground">
            Professional facilities in two strategic Lagos locations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <article
              key={loc.id}
              className="reveal group overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-300 hover:shadow-lift"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative aspect-16/9 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-4 left-4 rounded-sm bg-surface/90 px-3 py-1 text-xs font-semibold text-surface-foreground">
                  {loc.city}
                </span>
              </div>

              <div className="p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold">{loc.name}</h3>

                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Address</dt>
                      <dd className="text-muted-foreground">{loc.address}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Opening hours</dt>
                      <dd className="text-muted-foreground">{loc.hours}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <div>
                      <dt className="font-semibold">Available services &amp; highlights</dt>
                      <dd className="mt-1 flex flex-wrap gap-2">
                        {[...loc.services, ...loc.highlights].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-sm bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4">
                    <a
                      href={loc.phoneHref}
                      onClick={() => track("phone_clicked", { location: loc.id })}
                      className="inline-flex items-center gap-2 font-medium hover:text-accent"
                    >
                      <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                      {loc.phone}
                    </a>
                    <a
                      href={loc.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track("whatsapp_clicked", { location: loc.id })}
                      className="inline-flex items-center gap-2 font-medium hover:text-accent"
                    >
                      <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:${PLACEHOLDER.email}`}
                      onClick={() => track("email_clicked", { location: loc.id })}
                      className="inline-flex items-center gap-2 font-medium hover:text-accent"
                    >
                      <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                      {PLACEHOLDER.email}
                    </a>
                  </div>
                </dl>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ActionLink
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    onClick={() => track("directions_clicked", { location: loc.id })}
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </ActionLink>
                  <ActionLink
                    href="#contact"
                    onClick={() => track("book_enquire_clicked", { source: `location_${loc.id}` })}
                  >
                    Make an Enquiry
                  </ActionLink>
                </div>
              </div>
            </article>
          ))}

           </div>

        <p className="mt-8 text-xs text-muted-foreground">
          .
        </p>
      </div>
    </section>
  );
}
