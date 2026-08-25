import { Check } from "lucide-react";
import { SERVICES } from "@/data/site";
import { useReveal, useInViewOnce } from "@/hooks/use-reveal";
import { ActionLink } from "@/components/ui/action";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Services() {
  const revealRef = useReveal<HTMLDivElement>();
  const seenRef = useInViewOnce<HTMLElement>(() => track("service_viewed", { section: "services" }));

  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 md:py-28" ref={seenRef}>
      <div className="container-hub" ref={revealRef}>
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Our services</p>
          <h2 id="services-heading" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-muted-foreground">
            Two core services under one roof: professional examination facilities and flexible
            workspace.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className={cn(
                "reveal group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-300 hover:shadow-lift",
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary">
                  {service.eyebrow}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="font-display text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  Service availability varies by location and is confirmed on enquiry.
                </p>

                <div className="mt-auto pt-8">
                  <ActionLink
                    href="#contact"
                    size="md"
                    variant={i === 0 ? "primary" : "dark"}
                    onClick={() =>
                      track("book_enquire_clicked", { source: `service_${service.id}` })
                    }
                  >
                    {service.cta}
                  </ActionLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
