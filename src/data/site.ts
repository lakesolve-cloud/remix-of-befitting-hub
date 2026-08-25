const examImg = "/images/service-examination.jpeg";
const coworkImg = "/images/service-coworking.jpeg";
const festacImg = "/images/location-festac.jpeg";
const yabaImg = "/images/location-yaba.jpeg";
const galleryReception = "/images/gallery-reception.jpeg";
const galleryMeeting = "/images/gallery-meeting.jpeg";
const galleryWorkstation = "/images/gallery-workstation.jpeg";
const galleryLounge = "/images/gallery-lounge.jpeg";
const galleryBooths = "/images/gallery-booths.jpeg";
const galleryWaiting = "/images/gallery-waiting.jpeg";

export const HERO_IMAGE = "/images/hero-exam-hall.jpeg";
const heroImg = HERO_IMAGE;

/**
 * Central content source. Replace placeholder values (marked TODO) with real
 * Befitting Hub details when supplied — no presentation changes required.
 */

export const PLACEHOLDER = {
  phone: "+234 000 000 0000", // TODO: real phone number
  phoneHref: "tel:+2340000000000", // TODO
  whatsapp: "https://wa.me/2340000000000", // TODO
  email: "info@befittinghub.com",
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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Festac+Lagos", // TODO: exact listing
    image: festacImg,
    alt: "Exterior of the Befitting Hub building in Lagos",
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
    alt: "Reception area at Befitting Hub Yaba with front desk and soft seating",
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
    alt: "Examination hall at Befitting Hub with numbered computer stations and privacy dividers",
    category: "Examination Centre",
    span: "wide",
  },
  {
    src: coworkImg,
    alt: "Private office desk at Befitting Hub with ergonomic chairs",
    category: "Coworking Space",
  },
  {
    src: galleryWorkstation,
    alt: "Close-up of a candidate workstation with monitor and keyboard at Befitting Hub",
    category: "Workstations",
  },
  {
    src: galleryMeeting,
    alt: "Private desk and seating in a quiet office room at Befitting Hub",
    category: "Meeting / Training Areas",
  },
  {
    src: galleryReception,
    alt: "Reception area at Befitting Hub with front desk and sofa seating",
    category: "Reception",
    span: "wide",
  },
  {
    src: galleryBooths,
    alt: "Row of numbered examination booths at Befitting Hub",
    category: "Examination Centre",
  },
  {
    src: galleryLounge,
    alt: "Waiting area at Befitting Hub with wraparound bench seating",
    category: "Waiting Area",
  },
  {
    src: galleryWaiting,
    alt: "Candidate waiting bench along a bright corridor at Befitting Hub",
    category: "Facilities",
  },
  {
    src: festacImg,
    alt: "Exterior of the Befitting Hub building in Lagos",
    category: "Our Building",
  },
  {
    src: yabaImg,
    alt: "Reception and lounge at Befitting Hub Yaba",
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
    logo: "/images/idp-logo.jpeg",
    logoAlt: "IDP logo — International Education Specialists",
    note: "Education and placement",
  },
  {
    name: "IELTS",
    logo: "/images/ielts-logo.jpeg",
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
