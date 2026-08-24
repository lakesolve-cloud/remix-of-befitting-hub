import examAsset from "@/assets/service-examination.jpg.asset.json";
import coworkAsset from "@/assets/service-coworking.jpg.asset.json";
import festacAsset from "@/assets/location-festac.jpg.asset.json";
import yabaAsset from "@/assets/location-yaba.jpg.asset.json";
import galleryReceptionAsset from "@/assets/gallery-reception.jpg.asset.json";
import galleryMeetingAsset from "@/assets/gallery-meeting.jpg.asset.json";
import galleryWorkstationAsset from "@/assets/gallery-workstation.jpg.asset.json";
import galleryLoungeAsset from "@/assets/gallery-lounge.jpg.asset.json";
import galleryBoothsAsset from "@/assets/gallery-booths.jpg.asset.json";
import galleryWaitingAsset from "@/assets/gallery-waiting.jpg.asset.json";
import heroAsset from "@/assets/hero-exam-hall.jpg.asset.json";
import idpLogoAsset from "@/assets/idp-logo.png.asset.json";
import ieltsLogoAsset from "@/assets/ielts-logo.png.asset.json";

const examImg = examAsset.url;
const coworkImg = coworkAsset.url;
const festacImg = festacAsset.url;
const yabaImg = yabaAsset.url;
const galleryReception = galleryReceptionAsset.url;
const galleryMeeting = galleryMeetingAsset.url;
const galleryWorkstation = galleryWorkstationAsset.url;
const galleryLounge = galleryLoungeAsset.url;
const galleryBooths = galleryBoothsAsset.url;
const galleryWaiting = galleryWaitingAsset.url;
export const HERO_IMAGE = heroAsset.url;
const heroImg = HERO_IMAGE;


/**
 * Central content source. Replace placeholder values (marked TODO) with real
 * Befitting Hub details when supplied — no presentation changes required.
 */

export const PLACEHOLDER = {
  phone: "+234 000 000 0000", // TODO: real phone number
  phoneHref: "tel:+2340000000000", // TODO
  whatsapp: "https://wa.me/2340000000000", // TODO
  email: "hello@befittinghub.com", // TODO
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Locations", href: "#locations" },
  { label: "Gallery", href: "#gallery" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export const VALUE_CARDS = [
  {
    icon: "exam",
    title: "Examination Centre",
    body: "Professional and reliable facilities for examinations, assessments and testing.",
  },
  {
    icon: "desk",
    title: "Coworking Space",
    body: "Comfortable and productive workspaces for individuals, entrepreneurs and teams.",
  },
  {
    icon: "pin",
    title: "Strategic Locations",
    body: "Conveniently located facilities in Festac and Yaba, Lagos.",
  },
  {
    icon: "shield",
    title: "Professional Environment",
    body: "A secure, comfortable and technology-enabled environment designed for productivity and reliability.",
  },
] as const;

export const WHY_ITEMS = [
  {
    title: "Professional Facilities",
    body: "Well-maintained spaces designed to support examinations and productive work.",
  },
  {
    title: "Strategic Locations",
    body: "Convenient locations in Festac and Yaba.",
  },
  {
    title: "Reliable Infrastructure",
    body: "Suitable infrastructure to support examination and coworking activities.",
  },
  {
    title: "Comfortable Environment",
    body: "A clean, organized and professional environment.",
  },
  {
    title: "Flexible Solutions",
    body: "Services designed for individuals, businesses and examination organizations.",
  },
  {
    title: "Trusted Partnerships",
    body: "Association with recognized examination and education organizations.",
  },
  {
    title: "Customer Support",
    body: "Responsive support for enquiries, bookings and facility-related requests.",
  },
] as const;

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    id: "examinations",
    eyebrow: "Service 01",
    title: "Examination Centre",
    description:
      "Befitting Hub provides professional examination facilities for examination bodies, institutions, organizations and candidates.",
    features: [
      "Computer-based examinations",
      "Professional examinations",
      "Educational assessments",
      "Certification examinations",
      "Recruitment/assessment tests",
      "Institutional examinations",
      "Examination venue services",
    ],
    cta: "Enquire About Examination Services",
    image: examImg,
    alt: "Computer-based testing room at Befitting Hub with individual candidate workstations and dividers",
  },
  {
    id: "coworking",
    eyebrow: "Service 02",
    title: "Coworking Space",
    description:
      "A comfortable and professional workspace designed for people who need a productive environment to work, meet and collaborate.",
    features: [
      "Dedicated workstations",
      "Shared workspaces",
      "High-speed internet",
      "Power/electricity",
      "Meeting areas",
      "Comfortable seating",
      "Professional environment",
      "Printing/document services where available",
    ],
    cta: "Explore Coworking",
    image: coworkImg,
    alt: "Private office desk at Befitting Hub with ergonomic chairs and bright lighting",
  },
];

export type Location = {
  id: string;
  name: string;
  city: string;
  address: string;
  hours: string;
  services: string[];
  highlights: string[];
  phone: string;
  phoneHref: string;
  whatsapp: string;
  mapsUrl: string;
  image: string;
  alt: string;
};

/** Add another object here to publish an additional location. */
export const LOCATIONS: Location[] = [
  {
    id: "festac",
    name: "Befitting Hub Festac",
    city: "Festac, Lagos",
    address: "Address to be confirmed — Festac, Lagos, Nigeria", // TODO
    hours: "Opening hours to be confirmed", // TODO
    services: ["Examination centre", "Coworking space", "Meeting areas"],
    highlights: [
      "Facility highlights to be confirmed",
      "Candidate workstations",
      "Reception and waiting area",
    ], // TODO
    phone: PLACEHOLDER.phone,
    phoneHref: PLACEHOLDER.phoneHref,
    whatsapp: PLACEHOLDER.whatsapp,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Festac+Lagos", // TODO: exact listing
    image: festacImg,
    alt: "Exterior of the building housing Befitting Hub Festac in Lagos",
  },
  {
    id: "yaba",
    name: "Befitting Hub Yaba",
    city: "Yaba, Lagos",
    address: "232, Murtala Muhammed Way, Yaba, Lagos, Nigeria",
    hours: "Opening hours to be confirmed", // TODO
    services: ["Examination centre", "Coworking space", "Training areas"],
    highlights: [
      "Facility highlights to be confirmed",
      "Shared and dedicated desks",
      "Reception and waiting area",
    ], // TODO
    phone: PLACEHOLDER.phone,
    phoneHref: PLACEHOLDER.phoneHref,
    whatsapp: PLACEHOLDER.whatsapp,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=232+Murtala+Muhammed+Way+Yaba+Lagos",
    image: yabaImg,
    alt: "Exterior of the building housing Befitting Hub Yaba in Lagos",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  span?: "tall" | "wide";
};

export const GALLERY: GalleryItem[] = [
  {
    src: heroImg,
    alt: "Examination hall at Befitting Hub with rows of computer stations and privacy dividers",
    category: "Examination Centre",
    span: "wide",
  },
  {
    src: coworkImg,
    alt: "Coworking space at Befitting Hub with shared desks and daylight",
    category: "Coworking Space",
  },
  {
    src: galleryWorkstation,
    alt: "Single workstation with monitor, keyboard and desk lamp at Befitting Hub",
    category: "Workstations",
  },
  {
    src: galleryMeeting,
    alt: "Meeting and training room at Befitting Hub with conference table and wall screen",
    category: "Meeting / Training Areas",
  },
  {
    src: galleryReception,
    alt: "Reception and waiting area at Befitting Hub",
    category: "Reception",
    span: "wide",
  },
  {
    src: galleryLounge,
    alt: "Shared work lounge with soft seating at Befitting Hub",
    category: "Facilities",
  },
  {
    src: festacImg,
    alt: "Befitting Hub Festac location exterior in Lagos",
    category: "Festac",
  },
  {
    src: yabaImg,
    alt: "Befitting Hub Yaba location exterior in Lagos",
    category: "Yaba",
  },
];

export type Partner = {
  name: string;
  logo: string;
  logoAlt: string;
  note: string;
};

export const PARTNERS: Partner[] = [
  {
    name: "IDP",
    logo: idpLogoAsset.url,
    logoAlt: "IDP logo — International Education Specialists",
    note: "Education and placement",
  },
  {
    name: "IELTS",
    logo: ieltsLogoAsset.url,
    logoAlt: "IELTS logo — English for International Opportunity",
    note: "English language testing",
  },
];

export const ENQUIRY_TYPES = [
  "Examination Centre",
  "Coworking Space",
  "Partnership",
  "Corporate Booking",
  "General Enquiry",
  "Other",
] as const;

export const LOCATION_OPTIONS = ["Festac", "Yaba"] as const;

export { heroImg };
