// ═══════════════════════════════════════════════════════════════════
// Site Configuration — Location Voiture Tunis
// Domain: locationvoituretunis.com | FR | Tunis city
// ═══════════════════════════════════════════════════════════════════

export const siteConfig = {
    lang: "fr",

    brand: {
        name: "Location Voiture Tunis",
        nameShort: "LV Tunis",
        nameUpper: "LOCATION VOITURE TUNIS",
        slug: "location-voiture-tunis",
        foundingYear: 2009,
        description: "Location voiture Tunis au meilleur prix. Louer une voiture à Tunis sans carte bancaire, livraison aéroport Tunis-Carthage gratuite.",
    },

    contact: {
        phone: {
            display: "+216 97 955 896",
            link: "+21697955896",
            whatsapp: "21697955896",
        },
        email: "nhrentcar.tn@gmail.com",
        address: {
            street: "Aeroport Tunis-Carthage",
            city: "Tunis",
            region: "Tunis",
            postalCode: "2035",
            country: "TN",
            displayShort: "Tunis, Tunisie",
        },
        geo: {
            latitude: 36.8510,
            longitude: 10.2272,
        },
    },

    url: {
        domain: "locationvoituretunis.com",
        baseUrl: "https://locationvoituretunis.com",
        googleReview: "",
    },

    social: {
        facebook: "",
        instagram: "",
    },

    logo: {
        main: "/images/logo/logo.png",
        white: "/images/logo/logo-wh.png",
        external: "",
        ogImage: "/images/og-image.jpg",
    },

    rating: {
        value: 4.9,
        reviewCount: 165,
        bestRating: 5,
        worstRating: 1,
    },

    pricing: {
        currency: "TND",
        currencyDisplay: "DT",
        eurRate: 3.3,
        minPrice3Days: 324,
        minPrice3DaysEur: 98,
        maxPrice3Days: 1521,
        priceRange3Days: "324 DT - 1521 DT",
        priceRange3DaysEur: "98€ - 461€",
        pricingLabel: "Prix pour 3 jours",
    },

    seo: {
        titleDefault: "Location Voiture Tunis – Moins Cher & Livraison Aéroport",
        titleTemplate: "%s | Location Voiture Tunis",
        description: "Location voiture Tunis pas cher. Livraison gratuite aéroport Tunis-Carthage, Lac, Belvédère, centre-ville. Sans carte bancaire. Kilométrage illimité. Dès 324 DT/3j.",
        keywords: [
            "location voiture tunis",
            "louer voiture tunis",
            "location voiture tunis pas cher",
            "location voiture aeroport tunis carthage",
            "location voiture tunis centre ville",
            "location voiture tunis sans carte bancaire",
            "location auto tunis",
            "voiture de location tunis",
            "location voiture tunis lac",
            "location voiture tunis belvédère",
            "location voiture tunis livraison hotel",
            "location voiture tunis kilométrage illimité",
        ],
        locale: "fr_TN",
        language: "fr",
        googleVerification: "",
    },

    booking: {
        storageKey: "lvtunis-booking-storage",
        reviewStorageKey: "lvtunis_reviewed",
        defaultLocation: "Tunis, Tunisie",
    },

    telegram: {
        botToken: "",
        chatId: "",
    },

    email: {
        to: "nhrentcar.tn@gmail.com",
    },

    content: {
        hero: {
            h1: "Location Voiture Tunis",
            subtitle: "Louez une voiture à Tunis avec livraison gratuite à l'aéroport Tunis-Carthage et dans tout le Grand Tunis. Sans carte bancaire, kilométrage illimité, assurance incluse.",
            badge: "Livraison Aéroport",
        },
        nav: {
            links: [
                { href: "/", label: "Accueil" },
                { href: "/nos-voitures", label: "Nos Voitures" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/contact", label: "Contact" },
            ],
            mobileAvailability: "Disponible 24h/24, 7j/7",
            currencyLabel: "Devise :",
        },
        trust: {
            badges: [
                {
                    icon: "credit_card_off",
                    title: "Sans Carte Bancaire",
                    desc: "Payez en espèces à la livraison. Réservation 100% gratuite et sans engagement.",
                },
                {
                    icon: "flight_land",
                    title: "Livraison Aéroport",
                    desc: "Récupérez votre voiture directement à l'aéroport Tunis-Carthage. Rapide et gratuit.",
                },
                {
                    icon: "verified_user",
                    title: "Assurance Incluse",
                    desc: "Tous nos véhicules sont assurés tous risques. Conduisez l'esprit tranquille.",
                },
            ],
        },
        footer: {
            tagline: "Location de voiture à Tunis avec livraison gratuite à l'aéroport Tunis-Carthage et dans tout le Grand Tunis.",
            cityLinksHeading: "Location par Ville",
            servicesHeading: "Nos Services",
            serviceLinks: [
                { name: "Nos Voitures", href: "/nos-voitures" },
                { name: "Tarifs", href: "/tarifs" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
            ],
            allRightsReserved: "Tous droits réservés.",
        },
        promo: {
            badge: "Offre Spéciale Tunis",
            h2: "Explorez Tunis et ses alentours librement",
            subtitle: "Voiture avec chauffeur ou conduite autonome – livraison à votre hôtel ou directement à l'aéroport. Tarifs imbattables.",
            priceLabel: "À partir de",
            priceSuffix: "/ 3 jours",
            cta: "Voir les offres",
        },
        home: {
            fleetLabel: "Notre Flotte",
            fleetTitle: "Nos Véhicules",
            viewAll: "Voir tout",
            viewAllMobile: "Voir tous les véhicules",
            faqLabel: "Questions Fréquentes",
            faqTitle: "Tout savoir sur la location de voiture à Tunis",
        },
        meta: {
            ogTitle: "Location Voiture Tunis – Livraison Aéroport | dès 324 DT",
            ogDesc: "Louez une voiture à Tunis dès 324 DT/3 jours. Livraison gratuite aéroport Tunis-Carthage. Sans carte bancaire.",
            ogImageAlt: "Location Voiture Tunis – Livraison Aéroport Gratuite",
        },
    },

    theme: {
        heroVariant: "split",   // "overlay" | "split"
        cardVariant: "outlined",   // "default" | "outlined"
        primary: "#047857",
        primaryContainer: "#065f46",
        primaryFixed: "#dbe1ff",
        onPrimary: "#ffffff",
        onPrimaryContainer: "#6ee7b7",
        accent: "#047857",
        accentDark: "#065f46",
        background: "#f7f9fc",
        surface: "#f7f9fc",
        surfaceContainerLow: "#f2f4f7",
        surfaceContainerLowest: "#ffffff",
        surfaceContainerHighest: "#e0e3e6",
        onSurface: "#191c1e",
        onSurfaceVariant: "#444651",
        outlineVariant: "#c4c6d3",
        footerBg: "#022c22",
    },
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.whatsapp}`;
export const telUrl = `tel:${siteConfig.contact.phone.link}`;
export const mailtoUrl = `mailto:${siteConfig.contact.email}`;
export const ogImageUrl = `${siteConfig.url.baseUrl}${siteConfig.logo.ogImage}`;
export const logoFullUrl = `${siteConfig.url.baseUrl}/images/logo/logo.png`;
export const copyrightLine = (year: number) =>
    `© ${siteConfig.brand.foundingYear} - ${year} ${siteConfig.brand.name}. ${siteConfig.content.footer.allRightsReserved}`;

export type SiteConfig = typeof siteConfig;
