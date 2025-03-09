/**
 * Content configuration for Softylus
 * Centralized content management to separate content from UI
 */

export const siteContent = {
  meta: {
    title: "Softylus",
    description: "Digital reality architect crafting exceptional software solutions",
    author: "Softylus",
    social: {
      twitter: "@softylus",
      linkedin: "softylus",
      github: "softylus"
    }
  },

  header: {
    logo: {
      text: "Softylus",
      alt: "Softylus Logo"
    },
    navigation: [
      { text: "Home", href: "/" },
      { text: "Services", href: "/services" },
      { text: "Projects", href: "/projects" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" }
    ],
    languageSwitch: {
      text: "AR",
      href: "/ar"
    }
  },

  hero: {
    title: {
      main: "Digital",
      accent: "reality",
      sub: "architect"
    },
    description: "We synthesize the imagined into the tangible, where form embraces function in the poetry of computational elegance.",
    creativePhrases: [
      { text: "Software Excellence", delay: 0 },
      { text: "Mobile Innovation", delay: 100 },
      { text: "Digital Marketing Mastery", delay: 200 },
      { text: "SEO Optimization", delay: 300 },
      { text: "AI Integration", delay: 400 }
    ],
    cta: {
      primary: {
        text: "Initiate collaboration",
        href: "/contact"
      },
      secondary: {
        text: "Explore works",
        href: "/projects"
      }
    },
    features: [
      {
        title: "Adaptive Development",
        description: "Custom software solutions that evolve with your business needs",
        icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
      },
      {
        title: "Digital Marketing",
        description: "Strategic campaigns that drive engagement and growth",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Mobile Excellence",
        description: "Native and cross-platform mobile experiences",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "SEO Mastery",
        description: "Data-driven optimization for maximum visibility",
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      }
    ]
  },

  services: {
    section: {
      title: "Our Services",
      subtitle: "What We Do",
      description: "Comprehensive digital solutions tailored to your business needs."
    },
    items: [
      {
        title: " Software Development",
        description: "Crafting sophisticated digital solutions that transform business operations into seamless experiences",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        category: "Development",
        number: "01"
      },
      {
        title: "Mobile Development",
        description: "Engineering intuitive mobile applications that captivate users",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
        category: "Development",
        number: "02"
      },
      {
        title: "Digital Marketing",
        description: "Orchestrating strategic campaigns that amplify your brand",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
        category: "Marketing",
        number: "03"
      },
    
      {
        title: "SEO Services",
        description: "Optimizing digital visibility through precise, data-driven strategies.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        category: "Marketing",
        number: "04"
      },
      {
        title: "Social Media Management",
        description: "Curating compelling social narratives that resonate with your audience.",
        icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
        category: "Marketing",
        number: "05"
      },
      {
        title: "AI Solutions",
        description: "Implementing intelligent systems that enhance business efficiency.",
        icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
        category: "Technology",
        number: "06"
      }
    ],
    cta: {
      text: "Explore all services",
      href: "/services"
    }
  },

  process: {
    section: {
      title: "Our Process",
      subtitle: "How We Work",
      description: "A systematic approach to delivering excellence."
    },
    stages: [
      {
        number: "01",
        title: "Discovery",
        description: "Understanding your vision and requirements",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      },
      {
        number: "02",
        title: "Planning",
        description: "Crafting a strategic roadmap",
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      },
      {
        number: "03",
        title: "Development",
        description: "Building with precision and care",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      },
      {
        number: "04",
        title: "Delivery",
        description: "Launching and ensuring success",
        icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      }
    ]
  },

  contact: {
    section: {
      title: "Get in Touch",
      subtitle: "Contact Us",
      description: "Let's discuss your next project."
    },
    form: {
      fields: [
        {
          name: "name",
          label: "Full Name",
          type: "text",
          placeholder: "Enter your full name",
          required: true
        },
        {
          name: "email",
          label: "Email Address",
          type: "email",
          placeholder: "Enter your email address",
          required: true
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          placeholder: "Tell us about your project",
          required: true
        }
      ],
      submit: {
        text: "Send Message"
      }
    }
  },

  industries: {
    section: {
      title: "Industries We Serve",
      subtitle: "Our Expertise",
      description: "Specialized solutions across diverse sectors."
    },
    items: [
      {
        title: "Crowdfunding Platforms",
        description: "Secure and scalable solutions for modern fundraising",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Fintech Solutions",
        description: "Innovative financial technology platforms",
        icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      },
      {
        title: "E-commerce Systems",
        description: "End-to-end digital commerce solutions",
        icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      },
      {
        title: "Water Management",
        description: "Smart distribution systems for resource optimization",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Enterprise Solutions",
        description: "Comprehensive digital transformation for businesses",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      }
    ]
  },

  footer: {
    company: {
      name: "Softylus",
      tagline: "Digital reality architect",
      description: "We create at the intersection of technology and imagination, crafting experiences that transcend the expected and redefine possibility."
    },
    links: {
      services: [
        { text: "Software Development", href: "/services/software" },
        { text: "Mobile Applications", href: "/services/mobile" },
        { text: "Digital Marketing", href: "/services/marketing" },
        { text: "SEO Optimization", href: "/services/seo" },
        { text: "Social Media", href: "/services/social" },
        { text: "AI Integration", href: "/services/ai" }
      ]
    },
    locations: [
      {
        city: "Zarqa",
        country: "Jordan",
        type: "Nexus",
        coordinates: "32.0636° N, 36.0878° E"
      },
      {
        city: "London",
        country: "UK",
        type: "Atelier",
        coordinates: "51.5074° N, 0.1278° W"
      },
      {
        city: "Riyadh",
        country: "KSA",
        type: "Oasis",
        coordinates: "24.7136° N, 46.6753° E"
      }
    ],
    legal: [
      { text: "Privacy", href: "/legal/privacy" },
      { text: "Terms", href: "/legal/terms" },
      { text: "Ethics", href: "/legal/ethics" }
    ],
    social: [
      {
        name: "Twitter",
        href: "https://twitter.com/softylus",
        icon: "twitter"
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/company/softylus",
        icon: "linkedin"
      },
      {
        name: "GitHub",
        href: "https://github.com/softylus",
        icon: "github"
      }
    ],
    copyright: {
      text: "© {year} Softylus",
      signature: "Softylus"
    }
  }
} as const;

// Type exports for TypeScript support
export type SiteContent = typeof siteContent;
export type NavigationItem = typeof siteContent.header.navigation[0];
export type ServiceItem = typeof siteContent.services.items[0];
export type ProcessStage = typeof siteContent.process.stages[0];
export type FormField = typeof siteContent.contact.form.fields[0];
export type FooterLink = typeof siteContent.footer.links.services[0];
export type Location = typeof siteContent.footer.locations[0];
export type SocialLink = typeof siteContent.footer.social[0];