import { ArrowDown, ClipboardCheck, Laptop, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-exam-hall.jpg";
import { ActionLink } from "@/components/ui/action";
import { track } from "@/lib/analytics";

const pills = [
  { icon: ClipboardCheck, label: "Examination facilities" },
  { icon: Laptop, label: "Coworking spaces" },
  { icon: MapPin, label: "Festac & Yaba, Lagos" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-surface pt-18">
      <img
        src={heroImg}
        alt="Examination hall at Befitting Hub with rows of computer workstations and privacy dividers"
        width={1920}
        height={1200}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-surface/85 md:bg-gradient-to-r md:from-surface/95 md:via-surface/85 md:to-surface/50"
      />

      <div className="container-hub flex min-h-[86svh] flex-col justify-center py-20 md:py-28">
        <div className="max-w-3xl text-surface-foreground">
          <p className="eyebrow">A professional hub for examinations, work &amp; productivity</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            A Professional Space to Work, Test and Grow.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-surface-foreground/80 sm:text-lg">
            Befitting Hub provides reliable examination facilities and flexible coworking spaces
            designed for individuals, professionals, businesses and examination bodies.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink
              href="#contact"
              size="lg"
              onClick={() => track("book_enquire_clicked", { source: "hero" })}
            >
              Book / Make an Enquiry
            </ActionLink>
            <ActionLink href="#services" size="lg" variant="onDark">
              Explore Our Services
            </ActionLink>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-surface-foreground/15 pt-6">
            {pills.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-surface-foreground/85"
              >
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-surface-foreground/70 transition-colors hover:text-accent md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
