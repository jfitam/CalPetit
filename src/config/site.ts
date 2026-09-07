// ============================================================================
// SITE CONFIG — the ONE file to edit for each new site.
// ============================================================================
// All of the site's content (copy, contact details, opening hours, services,
// reviews...) lives here. Components contain NO hard-coded text: they read
// this config. To spin up a new site: fill in this file, replace the images
// in public/images/, and adjust the colors in src/styles/tokens.css.
//
// This data also powers the SEO: the JSON-LD LocalBusiness markup
// (JsonLdLocalBusiness.astro) is generated automatically from SITE.business.
//
// Every visible UI string lives in SITE.ui — translate that section and the
// content below to ship the site in any language (a full French example is
// provided in examples/french-bakery/).

export const SITE = {
  // --- Identity & URLs -------------------------------------------------------
  url: "https://astro-chalet.vercel.app", // NO trailing slash

    // --- Business (powers the JSON-LD LocalBusiness markup) --------------------
  business: {
    // The most specific schema.org type you can find. Useful examples:
    // "Bakery", "Restaurant", "LodgingBusiness", "HairSalon", "Plumber",
    // "SportingGoodsStore", "TouristInformationCenter"... (see schema.org)
    schemaType: "Restaurant",
    phone: "+34972290691",
    email: "hello@alpineloaf.example.com",
    address: {
      street: "Carrer Requesens, 7",
      postalCode: "17491",
      city: "Peralada",
      country: "ES",
    },
    // GPS coordinates (Google Maps → right-click the location → copy)
    geo: { latitude: 42.3082307, longitude: 3.007987 },
    // Price range shown by Google: "€", "€€", "€€€" (or "$", "$$"...)
    priceRange: "€",
    // Link to the business's Google Business Profile
    googleBusinessUrl: "https://maps.app.goo.gl/CUdXZztYFVLsJ7Fo8",
    socialProfiles: [
      "https://www.instagram.com/example",
    ],
    // Link to the "reviews" tab of the Google profile, to read or leave more
    allReviewsUrl: "https://maps.app.goo.gl/Myp1z3rP8Lf9ZnEN7",
  },

  // --- Opening hours (shown on the site AND injected into the JSON-LD) -------
  // days: 0 = Monday ... 6 = Sunday. closed: true = closing day.
  openingHours: [
    { days: [0], closed: true },
    { days: [1], closed: true },
    { days: [2, 3, 4, 5, 6], opens: "11:00", closes: "17:00"},
    { days: [2, 3, 4, 5, 6], opens: "19:00", closes: "24:00"},
  ] as OpeningHours[],

  kitchenOpeningHours: [
    { days: [2, 3, 4, 5, 6], opens: "12:30", closes: "15:30"},
    { days: [2, 3, 4, 5, 6], opens: "19:30", closes: "22:00"},
  ] as OpeningHours[],

  navigationBase: [
    { key: "services", href: "/#services" },
    { key: "about", href: "/#about" },
    { key: "gallery", href: "/#gallery" },
    { key: "reviews", href: "/#reviews" },
    { key: "info", href: "/#info" },
    { key: "contact", href: "/#contact" },
  ],

    // --- Hero section -----------------------------------------------------------
  hero: {
    // "immersive" = the photo fills the whole first screen behind a dark
    //               veil (use a wide atmospheric photo, ≥1600px).
    // "split"     = text left, framed photo right, on the dark background
    //               (best with a product close-up).
    layout: "immersive" as "immersive" | "split",
  },

    // --- Legal pages ---------------------------------------------------------------------
  // Shown on /legal-notice/ — mandatory for professional sites in many
  // EU countries (e.g. France's LCEN, Germany's Impressumspflicht).
  legal: {
    companyName: "Cal Petit Gastrobar",
    address: "Carrer Requesens, 7, 17491 Peralada, Girona, Espanya",
    companyType: "Societat Limitada",
    registrationNumber: "000 000 000 00000",
    province: "Girona",
    book: "",
    sheet: "",
    file: "",
    inscriptionNumber: "",
    host: {
      name: "XXX",
      address: "ADDRESS",
      url: "url",
    },
  },

} as const;

// --- Utility types ---------------------------------------------------------------------
export interface OpeningHours {
  days: number[];
  opens?: string;
  closes?: string;
  closed?: boolean;
}

export type SiteConfig = typeof SITE;

