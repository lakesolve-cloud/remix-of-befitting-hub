import { ClipboardCheck, LayoutGrid, MapPin, ShieldCheck } from "lucide-react";
import { VALUE_CARDS } from "@/data/site";
import { useReveal } from "@/hooks/use-reveal";

const ICONS = {
  exam: ClipboardCheck,
  desk: LayoutGrid,
  pin: MapPin,
  shield: ShieldCheck,
} as const;

export function ValueProposition() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" aria-labelledby="value-heading" className="py-20 md:py-28">
      <div className="container-hub" ref={ref}>
        <div className="max-w-2xl reveal">
          <p className="eyebrow">Quick overview</p>
          <h2 id="value-heading" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Everything You Need in One Professional Hub
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <li
                key={card.title}
                className="reveal group rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-md bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
