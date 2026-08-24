import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Locations } from "@/components/Locations";
import { Gallery } from "@/components/Gallery";
import { Partners } from "@/components/Partners";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Footer } from "@/components/Footer";
import { ActionLink } from "@/components/ui/action";
import { track } from "@/lib/analytics";

const TITLE = "Befitting Hub | Examination Centre & Coworking Space in Lagos";
const DESCRIPTION =
  "Befitting Hub provides professional examination facilities and flexible coworking spaces in Festac and Yaba, Lagos. Enquire about our facilities, services and workspace solutions.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Befitting Hub",
          parentOrganization: { "@type": "Organization", name: "Befitting Group" },
          description: DESCRIPTION,
          areaServed: "Lagos, Nigeria",
          url: "/",
          location: [
            {
              "@type": "Place",
              name: "Befitting Hub Festac",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Festac",
                addressRegion: "Lagos",
                addressCountry: "NG",
              },
            },
            {
              "@type": "Place",
              name: "Befitting Hub Yaba",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Yaba",
                addressRegion: "Lagos",
                addressCountry: "NG",
              },
            },
          ],
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Examination centre and CBT venue services",
              },
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Coworking space and workstations" },
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    track("homepage_viewed");
  }, []);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <WhyChooseUs />
        <Services />
        <Locations />
        <Gallery />
        <Partners />
        <EnquiryForm />
      </main>
      <Footer />

      {/* Mobile persistent conversion CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
        <ActionLink
          href="#contact"
          size="lg"
          block
          onClick={() => track("book_enquire_clicked", { source: "mobile_sticky" })}
        >
          Book / Make an Enquiry
        </ActionLink>
      </div>
      <div aria-hidden="true" className="h-20 sm:hidden" />
    </>
  );
}
