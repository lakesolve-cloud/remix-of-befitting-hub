import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { track } from "@/lib/analytics";
import { ActionLink } from "@/components/ui/action";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Befitting Hub — home">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-primary font-display text-base font-bold text-primary-foreground">
        BH
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-bold tracking-tight">Befitting Hub</span>
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Befitting Group
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="container-hub flex h-18 items-center justify-between gap-6 py-3">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-foreground hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink
            href="#contact"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => track("book_enquire_clicked", { source: "header" })}
          >
            Book / Make an Enquiry
          </ActionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="container-hub py-6">
          <ul className="flex flex-col divide-y divide-border">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-lg font-semibold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ActionLink
            href="#contact"
            size="lg"
            block
            className="mt-6"
            onClick={() => {
              setOpen(false);
              track("book_enquire_clicked", { source: "mobile_menu" });
            }}
          >
            Book / Make an Enquiry
          </ActionLink>
        </nav>
      </div>
    </header>
  );
}
