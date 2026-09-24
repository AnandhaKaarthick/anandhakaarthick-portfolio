export interface Project {
  id: string;
  title: string;
  badge?: string;
  codeId: string;
  problem: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    writeup?: string;
  };
  gridColsDesktop: string;
  gridColsTablet: string;
  isFlagship?: boolean;
  routingSnippet?: {
    route: string;
    delta: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "bus-tracker",
    title: "College Bus Tracker",
    badge: "Won Freshathon 2.0 · ",
    codeId: "RIT_TRANSIT_V1",
    problem: "Students had no way to know when the campus bus was actually arriving.",
    description: "A real-time bus tracking system for RIT's campus routes. Built the live map with Leaflet and OpenStreetMap plus the public OSRM routing engine — deliberately avoided Google Maps API costs. Backend serves live position updates over WebSockets so the map updates without client-side polling loops.",
    tags: ["React", "FastAPI", "WebSockets", "Leaflet.js", "OSRM", "MySQL/SQLite"],
    links: {
      github: "https://github.com/AnandhaKaarthick/college-bus-tracker",
      demo: "https://college-bus-tracker-six.vercel.app",
    },
    gridColsDesktop: "lg:col-span-8",
    gridColsTablet: "md:col-span-6",
    isFlagship: true,
    routingSnippet: {
      route: "RIT → Poonamallee Junction",
      delta: "~1.2s ping",
    },
  },
  {
    id: "msme-mate",
    title: "MSME MATE",
    badge: "AppleXfest Hackathon",
    codeId: "FLEET_OPS",
    problem: "Fragmented business tools create operational blind spots and critical cash flow risks.",
    description: "All-in-one business management and financial intelligence platform for MSMEs. Unifies real-time inventory, double-entry accounting, invoicing, and credit ledgers into an intuitive dashboard. Powered by 24/7 Gemini AI financial advisory, zero-friction onboarding, and native multilingual support across regional demographics.",
    tags: ["React", "FastAPI", "MySQL/SQLite", "WebSockets"],
    links: {
      github: "https://github.com/AnandhaKaarthick/MSMEMATE",
      demo: "https://msme-mate.onrender.com"
    },
    gridColsDesktop: "lg:col-span-6",
    gridColsTablet: "md:col-span-3",
  },
  {
    id: "phone-linux-server",
    title: "Phone → Linux Server",
    badge: "HARDWARE RESURRECTION",
    codeId: "HARDWARE_OPS",
    problem: "Two old Galaxy J7 phones were sitting unused — could they run real infrastructure instead of landfill?",
    description: "Converted two decommissioned Samsung Galaxy J7 devices into persistent Linux servers. Equipped with Termux, Kali NetHunter Rootless, Nginx, Gunicorn/Flask apps, SSH keys, and routed safely over Tailscale + Cloudflare tunnels without port forwarding.",
    tags: ["Termux", "Kali NetHunter", "nginx", "Flask", "Tailscale", "Cloudflare"],
    links: {
      github: "https://github.com/AnandhaKaarthick/phone-linux-server",
    },
    gridColsDesktop: "lg:col-span-6",
    gridColsTablet: "md:col-span-3",
  },
  {
    id: "sih-digiland",
    title: "SIH-DigiLand",
    badge: "SIH_PROTOTYPE",
    codeId: "SIH_PROTOTYPE",
    problem: "Manual land title verification causes costly deed fraud and border discrepancies.",
    description: "Land records verification & smart governance platform prototype developed to mitigate boundary disputes and automate deed validity with cryptographic audit proofs.",
    tags: ["Python", "Web3", "React", "REST API"],
    links: {
      github: "https://github.com/AnandhaKaarthick/SIH-Digiland",
      demo: "https://sih-digiland-web.onrender.com"
    },
    gridColsDesktop: "lg:col-span-4",
    gridColsTablet: "md:col-span-3",
  },
  {
    id: "vault",
    title: "DocVault",
    badge: "SECURITY_CLI",
    codeId: "SECURITY_CLI",
    problem: "Cloud password vaults introduce remote exposure and unneeded complexity.",
    description: "Secure local credential and encrypted secrets manager. Uses strong symmetric key derivation, zero external cloud dependencies, and an ultra-fast terminal interface.",
    tags: ["Python", "Cryptography", "SQLite", "CLI"],
    links: {
      github: "https://github.com/AnandhaKaarthick/Vault-web",
      demo: "https://docvault-frontend-cmqo.onrender.com"
    },
    gridColsDesktop: "lg:col-span-4",
    gridColsTablet: "md:col-span-3",
  },
  {
    id: "coffee-shop",
    title: "Coffee Shop Webpage",
    badge: "UI_SYSTEM",
    codeId: "UI_SYSTEM",
    problem: "Traditional shop pages suffer from sluggish UI and inaccessible menu navigation.",
    description: "Modern aesthetic storefront interface with responsive menu layouts, interactive ordering state, smooth micro-interactions, and accessible typography.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
    links: {
      github: "https://github.com/AnandhaKaarthick/coffee-shop-webpage",
      demo: "https://caffino.netlify.app/"
    },
    gridColsDesktop: "lg:col-span-4",
    gridColsTablet: "md:col-span-3",
  },
];
