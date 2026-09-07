// ============================================================================
// LANGUAGE CONFIG 
// ============================================================================
// All the strings used to description of the website and the ui are here, 
// This file is used to translate the website into different languages.
// To create a new language, just copy this file and change the strings to the desired language.
// The language menu should detect the new file and add it to the list of available languages.
// Likewise, the static paths for the new language should be generated automatically by Astro.

export default {
  lang: "en",
  ogLocale: "en_GB",

  name: "Cal Petit",
  tagline: "Your local gastrobar in Peralada",
  description:
    "A welcoming little spot offering some of the finest local produce in the area. Visit us and enjoy a unique dining experience.",

  languageDescriptor: "English",

  // --- Navigation ------------------------------------------------------------

  navigationLabels: {
    services: "Values",
    about: "About us",
    gallery: "Gallery",
    reviews: "Reviews",
    info: "Visit us",
    contact: "Contact",
  },

  // --- Hero ------------------------------------------------------------------

  heroLabels: {
    title: "The taste of Empordà in every bite",
    titleHighlight: "taste",
    subtitle:
      "A welcoming, top-quality gastrobar right on your doorstep.",
    image: "/images/hero.jpeg",
    imageAlt: "Entrance to Cal Petit Gastrobar",
    primaryCta: {
      label: "Our values",
      href: "/#services",
    },
    secondaryCta: {
      label: "Find us",
      href: "/#info",
    },
    highlights: [
      "★ 4.9 on Google",
      "Local produce",
      "Homemade food",
    ],
  },

  // --- Services / values ------------------------------------------------------

  services: {
    eyebrow: "Values",
    title: "Our approach to cooking",
    intro: "Because cooking is about much more than what happens at the stove.",

    items: [
      {
        title: "Locally sourced ingredients",
        description:
          "We work with fresh, seasonal produce and give priority whenever possible to suppliers from the local area.",
        icon: "mappin",
      },
      {
        title: "Homemade cooking",
        description:
          "Home-cooked dishes made with simple recipes, familiar flavours and care in every preparation.",
        icon: "house",
      },
      {
        title: "Seasonal recipes",
        description:
          "We adapt our cooking to the produce available throughout the year to offer varied dishes with even more flavour.",
        icon: "chefhat",
      },
      {
        title: "A welcoming atmosphere",
        description:
          "We want you to feel at home from the moment you arrive: a friendly, relaxed space designed to be enjoyed without rushing.",
        icon: "heart",
      },
    ],
  },

  // --- About -----------------------------------------------------------------

  about: {
    eyebrow: "About us",
    title: "Our story",

    paragraphs: [
      "Cal Petit is a young project born from years of experience in other restaurants and the desire to create a place of our own.",
      "Behind the kitchen are two people with experience, enthusiasm and a very clear approach to hospitality: quality produce, carefully prepared dishes and friendly, personal service.",
    ],

    image: "/images/about.jpeg",
    imageAlt: "Interior of the restaurant",
  },

  // --- Gallery ---------------------------------------------------------------

  gallery: {
    eyebrow: "Gallery",
    title: "A glimpse of our dishes",

    images: [
      { src: "/images/galeria-1.jpeg", alt: "Escalivada" },
      { src: "/images/galeria-2.jpeg", alt: "Dish 1" },
      { src: "/images/galeria-3.jpeg", alt: "Dish 2" },
      { src: "/images/galeria-4.jpeg", alt: "Dish 3" },
      { src: "/images/galeria-5.jpeg", alt: "Dish 4" },
    ],
  },

  // --- Reviews ---------------------------------------------------------------

  reviews: {
    eyebrow: "Reviews",
    title: "What our customers say",
    googleRating: 4.9,

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

  // --- FAQ -------------------------------------------------------------------

  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",

    items: [
      {
        question: "Do you have options for people with coeliac disease?",
        answer:
          "We have some gluten-free options. If you have coeliac disease or any food intolerance, please let us know before ordering so that we can advise you properly.",
      },
      {
        question: "Can I check the allergens in your dishes?",
        answer:
          "Yes. Just ask us and we will provide information about the allergens present in each dish.",
      },
      {
        question: "Do you have vegetarian options?",
        answer:
          "Yes, we offer vegetarian options. Ask us which ones are available that day.",
      },
      {
        question: "Do you have a children's menu?",
        answer:
          "We have options suitable for younger guests. Ask us and we will help you find the best choice.",
      },
      {
        question: "Do you offer takeaway food?",
        answer:
          "Yes, some of our dishes can be prepared for takeaway. Please ask us about availability.",
      },
      {
        question: "Are pets allowed?",
        answer:
          "Yes, we are pet friendly. We recommend letting us know if you are bringing a pet, especially if you would like to sit indoors.",
      },
      {
        question: "Do I need to book a table?",
        answer:
          "A reservation is not always necessary, but we recommend booking, especially at weekends and during busy periods.",
      },
      {
        question: "Do you accommodate groups?",
        answer:
          "Yes, we can accommodate groups. For larger groups, we recommend contacting us in advance.",
      },
      {
        question: "Do you have a terrace?",
        answer:
          "Yes, we have outdoor terrace seating, subject to availability and weather conditions.",
      },
      {
        question: "Where can I park?",
        answer:
          "There are parking options near the restaurant. Ask us if you need directions.",
      },
    ],
  },

  // --- CTA -------------------------------------------------------------------

  ctaBanner: {
    title: "Would you like to book a table?",
    text:
      "Book in advance to secure your table, especially at weekends.",

    button: {
      label: "Book a table",
      href: "/#contact",
    },
  },

  // --- Contact ---------------------------------------------------------------

  contact: {
    eyebrow: "Contact",
    title: "Come and visit us",
    intro:
      "Get in touch with us if you have any questions or would like to book a table.",

    endpoint: "",
    honeypotField: "website",
  },

  // --- UI strings ------------------------------------------------------------

  ui: {
    skipToContent: "Skip to content",
    menuOpenLabel: "Open menu",
    closedLabel: "Closed",
    hoursTitle: "Opening hours",
    findUsTitle: "Find us",
    infoEyebrow: "Information",
    infoTitle: "Visit us",
    directionsLabel: "Directions on Google Maps",
    googleProfileLabel: "Our Google profile",
    readAllReviews: "Read more reviews →",
    ratingLabel: "Rating:",
    ratingOutOf: "out of 5",
    reviewsScoreLabel: "from Google Reviews",
    formNameLabel: "Name",
    formEmailLabel: "Email",
    formMessageLabel: "Message",
    formSubmitLabel: "Send",
    formHoneypotLabel: "Leave this field empty (anti-spam)",
    legalNoticeLabel: "Legal information",
    privacyPolicyLabel: "Privacy policy",
    allRightsReserved: "All rights reserved",
    notFoundTitle: "Page not found",
    notFoundText:
      "The page you are looking for does not exist or has been removed",
    notFoundCta: "Back to the home page",
    closingDaysLabel: "Closing days",
    openingHoursLabel: "Opening hours",
    kitchenOpeningHoursLabel: "Kitchen hours",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    closed: "Closed",
  },
} as const;
