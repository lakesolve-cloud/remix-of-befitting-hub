import { Instagram, Linkedin } from "lucide-react";
import { PLACEHOLDER } from "@/data/site";
import { Logo } from "@/components/Logo";
import { track } from "@/lib/analytics";

function TiktokIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Locations", href: "#locations" },
      { label: "Gallery", href: "#gallery" },
      { label: "Partners", href: "#partners" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Examination Centre", href: "#examinations" },
      { label: "Coworking Space", href: "#coworking" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "Festac", href: "#locations" },
      { label: "Yaba", href: "#locations" },
    ],
  },
];

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/befitting_hub?igsi=dnd5cnBuZzJhczNw" },
  { label: "TikTok", icon: TiktokIcon, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/befitting-hub/" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container-hub">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo imageClassName="h-14" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A professional hub for examinations, work and productivity — with facilities in Festac
              and Yaba, Lagos, Nigeria.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                {col.heading}
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em]">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={PLACEHOLDER.phoneHref}
                  onClick={() => track("phone_clicked", { source: "footer" })}
                  className="hover:text-accent"
                >
                  {PLACEHOLDER.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${PLACEHOLDER.email}`} className="hover:text-accent">
                  {PLACEHOLDER.email}
                </a>
              </li>
              <li>
                <a
                  href={PLACEHOLDER.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_clicked", { source: "footer" })}
                  className="hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>232, Murtala Muhammed Way, Yaba, Lagos, Nigeria</li>
              <li>Festac, Lagos (address to be confirmed)</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Befitting Hub. All Rights Reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#contact" className="hover:text-accent">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
