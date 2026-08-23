import { Check } from "lucide-react";
import { WHY_ITEMS } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";
import { ActionLink } from "@/components/ui/action";

export function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section aria-labelledby="why-heading" className="border-y border-border bg-secondary/60 py-20 md:py-28">
      <div className="container-hub" ref={ref}>
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Why us</p>
            <h2 id="why-heading" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Why Choose Befitting Hub?
            </h2>
            <p className="mt-4 text-muted-foreground">
              A serious facility for serious work — built for examination bodies, professionals and
              teams across Lagos.
            </p>
          </div>
          <ActionLink href="#services" variant="outline">
            Explore Services
          </ActionLink>
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="reveal bg-card p-7 transition-colors hover:bg-background"
              style={{ transitionDelay: `${(i % 3) * 60}ms` }}
            >
              <dt className="flex items-start gap-3 font-display text-base font-semibold">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {item.title}
              </dt>
              <dd className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
