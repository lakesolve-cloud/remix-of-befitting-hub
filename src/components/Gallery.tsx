import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "@/data/site";
import { useInViewOnce, useReveal } from "@/hooks/use-reveal";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Gallery() {
  const revealRef = useReveal<HTMLDivElement>();
  const seenRef = useInViewOnce<HTMLElement>(() => track("gallery_viewed"));
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((cur) => (cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active === null ? null : GALLERY[active];

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20 md:py-28" ref={seenRef}>
      <div className="container-hub" ref={revealRef}>
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading" className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Explore Befitting Hub
          </h2>
          <p className="mt-4 text-muted-foreground">
            Take a look inside our professional examination and workspace facilities.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((item, i) => (
            <li
              key={item.alt}
              className={cn("reveal", item.span === "wide" && "col-span-2")}
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden rounded-lg border border-border bg-secondary"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]",
                    item.span === "wide" ? "aspect-16/9" : "aspect-4/5 sm:aspect-square",
                  )}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-surface/0 transition-colors duration-300 group-hover:bg-surface/25"
                />
                <span className="absolute bottom-3 left-3 rounded-sm bg-background/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-primary">
                  {item.category}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-60 flex items-center justify-center bg-surface/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-md border border-surface-foreground/25 text-surface-foreground hover:bg-surface-foreground/10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-md border border-surface-foreground/25 text-surface-foreground hover:bg-surface-foreground/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[78svh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-surface-foreground/80">
              <span className="font-semibold text-surface-foreground">{current.category}</span> —{" "}
              {current.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-md border border-surface-foreground/25 text-surface-foreground hover:bg-surface-foreground/10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
