import { PARTNERS } from "@/data/site";
import { useInViewOnce, useReveal } from "@/hooks/use-reveal";
import { track } from "@/lib/analytics";

export function Partners() {
  const revealRef = useReveal<HTMLDivElement>();
  const seenRef = useInViewOnce<HTMLElement>(() => track("partner_viewed"));

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="border-y border-border bg-secondary/60 py-20 md:py-24"
      ref={seenRef}
    >
      <div className="container-hub grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center" ref={revealRef}>
        <div className="reveal">
          <p className="eyebrow">Credibility</p>
          <h2 id="partners-heading" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Trusted Partners
          </h2>
          <p className="mt-4 text-muted-foreground">
            Working with recognized examination and education organizations.
          </p>
        </div>

        <ul className="reveal grid grid-cols-2 gap-5">
          {PARTNERS.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col items-center justify-center rounded-lg border border-border bg-card px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
            >
              <img
                src={partner.logo}
                alt={partner.logoAlt}
                width={200}
                height={80}
                loading="lazy"
                className="h-16 w-auto max-w-[180px] object-contain"
              />
              <span className="mt-4 text-xs text-muted-foreground">{partner.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
