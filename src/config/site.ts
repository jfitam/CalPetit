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
  lang: "ca",
  // BCP 47 locale used for Open Graph (e.g. "en_US", "fr_FR", "de_DE")
  ogLocale: "ca_ES",
  name: "Cal Petit",
  tagline: "El teu racó Gatrobar a Peralada",
  description:
    "Un raconet acollidor amb les millors viandes de la comarca. Visita'ns i gaudeix d'una experiència gastronòmica única.",

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
  },

  // --- Opening hours (shown on the site AND injected into the JSON-LD) -------
  // days: 0 = Monday ... 6 = Sunday. closed: true = closing day.
  openingHours: [
    { label: "Dilluns", days: [0], closed: true },
    { label: "Dimarts", days: [1], closed: true },
    { label: "Dimecres", days: [2], opens: "19:00", closes: "24:00"},
    { label: "Dijous", days: [3], opens: "19:00", closes: "24:00" },
    { label: "Divendres", days: [4], opens: "19:00", closes: "24:00" },
    { label: "Dissabte", days: [5], opens: "19:00", closes: "24:00" },
    { label: "Diumenge", days: [6], opens: "19:00", closes: "24:00" },
  ] as OpeningHours[],

  // --- Navigation (home page anchors + pages) --------------------------------
  navigation: [
    { label: "Valors", href: "/#services" },
    { label: "Nosaltres", href: "/#about" },
    { label: "Imatges", href: "/#gallery" },
    { label: "Opinions", href: "/#reviews" },
    { label: "Visita'ns", href: "/#info" },
    { label: "Contacte", href: "/#contact" },
  ],

  // --- Hero section -----------------------------------------------------------
  hero: {
    // "immersive" = the photo fills the whole first screen behind a dark
    //               veil (use a wide atmospheric photo, ≥1600px).
    // "split"     = text left, framed photo right, on the dark background
    //               (best with a product close-up).
    layout: "immersive" as "immersive" | "split",
    title: "El sabor de l'Empordà a cada mossegada",
    // Optional: a substring of the title rendered in italic accent color.
    // Leave "" to disable.
    titleHighlight: "sabor",
    subtitle:
      "Gastrobar del primer nivell, acollidor, a prop teu.",
    image: "/images/hero.jpeg",
    imageAlt: "Entrada a Cal Petit Gastrobar",
    primaryCta: { label: "Els nostres valors", href: "/#services" },
    secondaryCta: { label: "On som", href: "/#info" },
    // Trust badges shown under the buttons (2 to 4 short items).
    // Great spots for the Google rating, founding year, a signature promise.
    highlights: ["★ 4.9 a Google", "De la terra", "Menjar cassolà"],
  },

  // --- Services / products (3 to 6 cards) -------------------------------------
  services: {
    eyebrow: "Valors", // small uppercase label above the title ("" hides it)
    title: "Així entenem la cuina",
    intro: "Perquè cuinar va més enllà dels fogons.",
    items: [
      {
        title: "Ingredients de proximitat",
        description:
          "Treballem amb productes frescos i de temporada, prioritzant sempre que podem els proveïdors de la zona.",
        icon: "bread",
      },
      {
        title: "Cuina cassolana",
        description:
          "Plats fets a casa, amb receptes senzilles, sabors reconeixibles i molta cura en cada elaboració.",
        icon: "croissant",
      },
      {
        title: "Receptes de temporada",
        description:
          "Adaptem la nostra cuina al producte de cada època de l’any per oferir plats variats i amb més sabor.",
        icon: "cake",
      },
      {
        title: "Ambient acollidor",
        description:
          "Volem que et sentis a gust des que entres: un espai proper, tranquil i pensat per gaudir sense presses.",
        icon: "sandwich",
      },
    ],
  },

  // --- About -------------------------------------------------------------------
  about: {
    eyebrow: "Nosaltres",
    title: "La nostra història",
  paragraphs: [
    "Cal Petit és un projecte jove, nascut de l’experiència acumulada durant anys en altres restaurants i de les ganes de crear un espai propi.",
    "Darrere de la cuina hi ha dues persones amb ofici, entusiasme i una manera molt clara d’entendre l’hostaleria: bon producte, plats fets amb cura i un tracte proper."
  ],
    image: "/images/about.jpeg",
    imageAlt: "Interior del local",
  },

  // --- Gallery (4 to 8 images) ---------------------------------------------------
  gallery: {
    eyebrow: "Imatges",
    title: "Un cop d'ull als nostres plats",
    // The first image is featured (2×2 in the grid): 5 or 7 images fill the
    // grid perfectly on desktop.
    images: [
      { src: "/images/galeria-1.jpeg", alt: "Escalivada" },
      { src: "/images/galeria-2.jpeg", alt: "Plat1" },
      { src: "/images/galeria-3.jpeg", alt: "Plat2" },
      { src: "/images/galeria-4.jpeg", alt: "Plat3" },
      { src: "/images/galeria-5.jpeg", alt: "Plat4" },
    ],
  },

  // --- Customer reviews (copied from the business's Google profile) --------------
  reviews: {
    eyebrow: "Opinions",
    title: "El que diuen els nostres clients",
    googleRating: 4.9,
    // Link to the "reviews" tab of the Google profile, to read or leave more
    allReviewsUrl: "https://maps.app.goo.gl/Myp1z3rP8Lf9ZnEN7",
    items: [
      {
        author: "laia ros",
        rating: 5,
        text: "Muy buen descubrimiento!!! La atención es de 10. Los platos están deliciosos, recomiendo el Magrec d’anec, de lo mejor que hemos probado en mucho tiempo. El bacalla estaba muy rico! Los postres están muy elaborados y caseros. Tienen cosas sin gluten, para los celíacos. A destacar, que es petfriendly y pudimos estar con nuestro perro! Muchas gracias 🙏🏼.",
      },
      {
        author: "Yelyzaveta Latysheva",
        rating: 5,
        text: "Very good local restaurant! The food was delicious and the people are super nice! Recommend eating here, if you are in the area.",
      },
      {
        author: "Anna Orta",
        rating: 5,
        text: "Sitio recientemente inaugurado, nos han tratado de manera inmejorable y el lugar es muy acogedor. La comida buenísima y de mucha calidad. El tataki de atún un espectáculo, el magret muy jugoso y los boquerones muy sabrosos. Hasta el pan con tomate estaba buenísimo. Volveremos pronto seguro.",
      },
    ],
  },

  // --- FAQ (SEO bonus: questions people actually type into Google) ---------------
  faq: {
    eyebrow: "Consultes",
    title: "Preguntes freqüents",
    items: [
      {
        question: "Teniu opcions per a persones celíaques?",
        answer:
          "Disposem d’algunes opcions sense gluten. Si tens celiaquia o alguna intolerància, avisa’ns abans de demanar per poder informar-te correctament.",
      },
      {
        question: "Puc consultar els al·lèrgens dels plats?",
        answer:
          "Sí. Pregunta’ns i t’informarem dels al·lèrgens presents en cada plat.",
      },
      {
        question: "Teniu opcions vegetarianes?",
        answer:
          "Sí, disposem d’opcions vegetarianes. Consulta’ns per saber quines tenim disponibles aquell dia.",
      },
      {
        question: "Teniu menú infantil?",
        answer:
          "Disposem d’opcions pensades per als més petits. Pregunta’ns i t’ajudarem a trobar la millor opció.",
      },
      {
        question: "Feu menjar per emportar?",
        answer:
          "Sí, alguns dels nostres plats es poden preparar per emportar. Consulta’ns disponibilitat.",
      },
      {
        question: "Admeteu animals?",
        answer:
          "Sí, som pet friendly. Et recomanem avisar-nos si vens amb un animal, especialment si voleu seure a l’interior.",
      },
      {
        question: "Cal reservar taula?",
        answer:
          "No sempre és necessari, però recomanem reservar especialment els caps de setmana i en hores punta.",
      },
      {
        question: "Accepteu grups?",
        answer:
          "Sí, podem acollir grups. Per a grups nombrosos, et recomanem contactar amb nosaltres amb antelació.",
      },
      {
        question: "Teniu terrassa?",
        answer:
          "Sí, disposem de terrassa subjecta a disponibilitat i a les condicions meteorològiques.",
      },
      {
        question: "On es pot aparcar?",
        answer:
          "Hi ha opcions d’aparcament a prop del restaurant. Consulta’ns si necessites indicacions.",
      },
    ],
  },

  // --- Call-to-action banner ------------------------------------------------------
  ctaBanner: {
    title: "Vols reservar taula?",
    text: "Reserva amb antelació i assegura’t lloc, especialment els caps de setmana.",
    button: {
      label: "Reservar taula",
      href: "/#contact",
    },
  },

  // --- Contact form ------------------------------------------------------------------
  contact: {
    eyebrow: "Contacte",
    title: "Vine'ns a conèixer",
    intro:
      "Posa't en contacte amb nosaltres, per qualsevol dubte o per reservar taula.",
    // Form endpoint. Options:
    //  1. Formspree/Basin: paste the URL the service gives you.
    //  2. Your own backend (any endpoint accepting a classic form POST).
    //  3. Leave empty "": the form falls back to a mailto button automatically.
    endpoint: "",
    // Name of the hidden anti-spam (honeypot) field. Your backend must reject
    // any submission where this field is filled in. Keep the default unless
    // your form backend expects a specific field name.
    honeypotField: "website",
  },

  // --- Legal pages ---------------------------------------------------------------------
  // Shown on /legal-notice/ — mandatory for professional sites in many
  // EU countries (e.g. France's LCEN, Germany's Impressumspflicht).
  legal: {
    companyType: "SARL with a capital of €10,000",
    registrationNumber: "000 000 000 00000",
    publisher: "Jeanne Ravanel",
    host: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
      url: "https://vercel.com",
    },
  },

  // --- UI strings ------------------------------------------------------------------------
  // Every fixed label used by the components. Translate this section (plus the
  // content above) to ship the site in another language — no component edits.
  ui: {
    skipToContent: "Saltar al contingut",
    menuOpenLabel: "Obrir menu",
    closedLabel: "Tancat",
    hoursTitle: "Horari d'obertura",
    findUsTitle: "Troba'ns",
    infoEyebrow: "Informació",
    infoTitle: "Visita'ns",
    directionsLabel: "Direccions a Google Maps",
    googleProfileLabel: "El nostre perfil de Google",
    readAllReviews: "Llegeix més opinions →",
    ratingLabel: "Valoració:", // followed by "4 out of 5"
    ratingOutOf: "de 5",
    reviewsScoreLabel: "desde Google Reviews", // under the big average score
    formNameLabel: "Nom",
    formEmailLabel: "Email",
    formMessageLabel: "Missatge",
    formSubmitLabel: "Enviar",
    formHoneypotLabel: "Deixa aquest camp buit (anti-spam)",
    legalNoticeLabel: "Informació legal",
    privacyPolicyLabel: "Política de privacitat",
    allRightsReserved: "Tots els drets reservats",
    notFoundTitle: "No s'ha trobat la pàgina",
    notFoundText: "La pàgina que estàs buscant no existeix o ha estat eliminada",
    notFoundCta: "Tornar a la pàgina principal",
    closingDaysLabel: "Dies de tancament",
    openingHoursLabel: "Horari d'obertura",
    kitchenOpeningHoursLabel: "Horari de cuina",
  },
} as const;

// --- Utility types ---------------------------------------------------------------------
export interface OpeningHours {
  label: string;
  days: number[];
  opens?: string;
  closes?: string;
  closed?: boolean;
}

export type SiteConfig = typeof SITE;
