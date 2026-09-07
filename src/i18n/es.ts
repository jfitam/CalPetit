// ============================================================================
// LANGUAGE CONFIG 
// ============================================================================
// All the strings used to description of the website and the ui are here, 
// This file is used to translate the website into different languages.
// To create a new language, just copy this file and change the strings to the desired language.
// The language menu should detect the new file and add it to the list of available languages.
// Likewise, the static paths for the new language should be generated automatically by Astro.

export default {
  lang: "es",
  ogLocale: "es_ES",

  name: "Cal Petit",
  tagline: "Tu rincón gastrobar en Peralada",
  description:
    "Un rincón acogedor con los mejores productos de la comarca. Visítanos y disfruta de una experiencia gastronómica única.",

  languageDescriptor: "Castellano",

  // --- Navigation ------------------------------------------------------------

  navigationLabels: {
    services: "Valores",
    about: "Nosotros",
    gallery: "Imágenes",
    reviews: "Opiniones",
    info: "Visítanos",
    contact: "Contacto",
  },

  // --- Hero ------------------------------------------------------------------

  heroLabels: {
    title: "El sabor del Empordà en cada bocado",
    titleHighlight: "sabor",
    subtitle:
      "Gastrobar de primer nivel, acogedor y cerca de ti.",
    image: "/images/hero.jpeg",
    imageAlt: "Entrada a Cal Petit Gastrobar",
    primaryCta: {
      label: "Nuestros valores",
      href: "/#services",
    },
    secondaryCta: {
      label: "Dónde estamos",
      href: "/#info",
    },
    highlights: [
      "★ 4.9 en Google",
      "Producto local",
      "Cocina casera",
    ],
  },

  // --- Services / values ------------------------------------------------------

  services: {
    eyebrow: "Valores",
    title: "Así entendemos la cocina",
    intro: "Porque cocinar va mucho más allá de los fogones.",

    items: [
      {
        title: "Ingredientes de proximidad",
        description:
          "Trabajamos con productos frescos y de temporada, dando prioridad siempre que podemos a los proveedores de la zona.",
        icon: "mappin",
      },
      {
        title: "Cocina casera",
        description:
          "Platos hechos en casa, con recetas sencillas, sabores reconocibles y mucho cuidado en cada elaboración.",
        icon: "house",
      },
      {
        title: "Recetas de temporada",
        description:
          "Adaptamos nuestra cocina al producto de cada época del año para ofrecer platos variados y con más sabor.",
        icon: "chefhat",
      },
      {
        title: "Ambiente acogedor",
        description:
          "Queremos que te sientas a gusto desde que entras: un espacio cercano, tranquilo y pensado para disfrutar sin prisas.",
        icon: "heart",
      },
    ],
  },

  // --- About -----------------------------------------------------------------

  about: {
    eyebrow: "Nosotros",
    title: "Nuestra historia",

    paragraphs: [
      "Cal Petit es un proyecto joven, nacido de la experiencia acumulada durante años en otros restaurantes y de las ganas de crear un espacio propio.",
      "Detrás de la cocina hay dos personas con oficio, entusiasmo y una forma muy clara de entender la hostelería: buen producto, platos elaborados con cuidado y un trato cercano.",
    ],

    image: "/images/about.jpeg",
    imageAlt: "Interior del local",
  },

  // --- Gallery ---------------------------------------------------------------

  gallery: {
    eyebrow: "Imágenes",
    title: "Un vistazo a nuestros platos",

    images: [
      { src: "/images/galeria-1.jpeg", alt: "Escalivada" },
      { src: "/images/galeria-2.jpeg", alt: "Plato 1" },
      { src: "/images/galeria-3.jpeg", alt: "Plato 2" },
      { src: "/images/galeria-4.jpeg", alt: "Plato 3" },
      { src: "/images/galeria-5.jpeg", alt: "Plato 4" },
    ],
  },

  // --- Reviews ---------------------------------------------------------------

  reviews: {
    eyebrow: "Opiniones",
    title: "Lo que dicen nuestros clientes",
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
    eyebrow: "Consultas",
    title: "Preguntas frecuentes",

    items: [
      {
        question: "¿Tenéis opciones para personas celíacas?",
        answer:
          "Disponemos de algunas opciones sin gluten. Si tienes celiaquía o alguna intolerancia, avísanos antes de pedir para que podamos informarte correctamente.",
      },
      {
        question: "¿Puedo consultar los alérgenos de los platos?",
        answer:
          "Sí. Pregúntanos y te informaremos sobre los alérgenos presentes en cada plato.",
      },
      {
        question: "¿Tenéis opciones vegetarianas?",
        answer:
          "Sí, disponemos de opciones vegetarianas. Consúltanos para saber cuáles tenemos disponibles ese día.",
      },
      {
        question: "¿Tenéis menú infantil?",
        answer:
          "Disponemos de opciones pensadas para los más pequeños. Pregúntanos y te ayudaremos a encontrar la mejor opción.",
      },
      {
        question: "¿Preparáis comida para llevar?",
        answer:
          "Sí, algunos de nuestros platos pueden prepararse para llevar. Consúltanos su disponibilidad.",
      },
      {
        question: "¿Admitís animales?",
        answer:
          "Sí, somos pet friendly. Te recomendamos avisarnos si vienes con un animal, especialmente si queréis sentaros en el interior.",
      },
      {
        question: "¿Es necesario reservar mesa?",
        answer:
          "No siempre es necesario, pero recomendamos reservar especialmente los fines de semana y en horas punta.",
      },
      {
        question: "¿Aceptáis grupos?",
        answer:
          "Sí, podemos acoger grupos. Para grupos numerosos, te recomendamos contactar con nosotros con antelación.",
      },
      {
        question: "¿Tenéis terraza?",
        answer:
          "Sí, disponemos de terraza sujeta a disponibilidad y a las condiciones meteorológicas.",
      },
      {
        question: "¿Dónde se puede aparcar?",
        answer:
          "Hay opciones de aparcamiento cerca del restaurante. Consúltanos si necesitas indicaciones.",
      },
    ],
  },

  // --- CTA -------------------------------------------------------------------

  ctaBanner: {
    title: "¿Quieres reservar mesa?",
    text:
      "Reserva con antelación y asegúrate un sitio, especialmente los fines de semana.",

    button: {
      label: "Reservar mesa",
      href: "/#contact",
    },
  },

  // --- Contact ---------------------------------------------------------------

  contact: {
    eyebrow: "Contacto",
    title: "Ven a conocernos",
    intro:
      "Ponte en contacto con nosotros para cualquier duda o para reservar mesa.",

    endpoint: "",
    honeypotField: "website",
  },

  // --- UI strings ------------------------------------------------------------

  ui: {
    skipToContent: "Saltar al contenido",
    menuOpenLabel: "Abrir menú",
    closedLabel: "Cerrado",
    hoursTitle: "Horario de apertura",
    findUsTitle: "Encuéntranos",
    infoEyebrow: "Información",
    infoTitle: "Visítanos",
    directionsLabel: "Cómo llegar con Google Maps",
    googleProfileLabel: "Nuestro perfil de Google",
    readAllReviews: "Leer más opiniones →",
    ratingLabel: "Valoración:",
    ratingOutOf: "de 5",
    reviewsScoreLabel: "desde Google Reviews",
    formNameLabel: "Nombre",
    formEmailLabel: "Email",
    formMessageLabel: "Mensaje",
    formSubmitLabel: "Enviar",
    formHoneypotLabel: "Deja este campo vacío (anti-spam)",
    legalNoticeLabel: "Información legal",
    privacyPolicyLabel: "Política de privacidad",
    allRightsReserved: "Todos los derechos reservados",
    notFoundTitle: "No se ha encontrado la página",
    notFoundText:
      "La página que estás buscando no existe o ha sido eliminada",
    notFoundCta: "Volver a la página principal",
    closingDaysLabel: "Días de cierre",
    openingHoursLabel: "Horario de apertura",
    kitchenOpeningHoursLabel: "Horario de cocina",
    days: [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
    closed: "Cerrado",
  },
} as const;

