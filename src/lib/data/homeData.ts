/**
 * Data for home page sections
 * Separating data from presentation for better maintainability
 */

// Hero section data
export const heroData = {
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
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "SEO Mastery",
      description: "Data-driven optimization for maximum visibility",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    }
  ],
  cta: {
    primary: {
      text: "Initiate collaboration",
      url: "/contact"
    },
    secondary: {
      text: "Explore works",
      url: "/projects"
    }
  }
};

// Services section data
export const servicesData = {
  title: "Our Services",
  subtitle: "What We Do",
  description: "Comprehensive digital solutions tailored to your business needs.",
  services: [
    {
      id: "software-development",
      title: "Software Development",
      description: "Crafting sophisticated digital solutions that transform business operations into seamless experiences.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      number: "01"
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Engineering intuitive mobile applications that captivate users and drive engagement.",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      number: "02"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Orchestrating strategic campaigns that amplify your brand's digital presence.",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      number: "03"
    },
    {
      id: "seo-services",
      title: "SEO Services",
      description: "Optimizing digital visibility through precise, data-driven strategies.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      number: "04"
    },
    {
      id: "social-media",
      title: "Social Media Management",
      description: "Curating compelling social narratives that resonate with your audience.",
      icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
      number: "05"
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description: "Implementing intelligent systems that enhance business efficiency.",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      number: "06"
    }
  ],
  cta: {
    text: "Explore all services",
    url: "/services"
  }
};

// Industries section data
export const industriesData = {
  title: "Industries We Serve",
  subtitle: "Our Expertise",
  description: "Specialized solutions across diverse sectors.",
  industries: [
    {
      id: "crowdfunding",
      title: "Crowdfunding Platforms",
      description: "Secure and scalable solutions for modern fundraising",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      id: "fintech",
      title: "Fintech Solutions",
      description: "Innovative financial technology platforms",
      icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      id: "ecommerce",
      title: "E-commerce Systems",
      description: "End-to-end digital commerce solutions",
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    },
    {
      id: "water",
      title: "Water Management",
      description: "Smart distribution systems for resource optimization",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      id: "enterprise",
      title: "Enterprise Solutions",
      description: "Comprehensive digital transformation for businesses",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    }
  ],
  cta: {
    text: "Discover all industries",
    url: "/industries"
  }
};

// Process section data
export const processData = {
  title: "Process Manifesto",
  subtitle: "Our Methodology",
  description: "Our philosophy distilled into a precise framework that guides every project from concept to completion.",
  stages: [
    {
      id: "discover",
      title: "Discover",
      description: "Immersive research and deep analysis of objectives, constraints, and possibilities.",
      icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      number: "01"
    },
    {
      id: "define",
      title: "Define",
      description: "Crystallizing insights into precise project parameters and clear success metrics.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      number: "02"
    },
    {
      id: "design",
      title: "Design",
      description: "Transforming concepts into visually striking and functionally intuitive frameworks.",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      number: "03"
    },
    {
      id: "develop",
      title: "Develop",
      description: "Engineering elegant solutions with clean code and scalable architecture.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      number: "04"
    },
    {
      id: "deploy",
      title: "Deploy",
      description: "Meticulous testing and seamless implementation through a methodical launch framework.",
      icon: "M5 13l4 4L19 7",
      number: "05"
    },
    {
      id: "evolve",
      title: "Evolve",
      description: "Continuous optimization and thoughtful iteration based on performance analytics.",
      icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
      number: "06"
    }
  ],
  principles: [
    {
      title: "Minimalist Precision",
      description: "We eliminate the superfluous to amplify what truly matters. Every element serves a specific purpose.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      number: "01"
    },
    {
      title: "Intuitive Interaction",
      description: "Digital experiences should feel natural and effortless, guiding users through a seamless journey.",
      icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11",
      number: "02"
    },
    {
      title: "Technical Excellence",
      description: "We engineer solutions with meticulous attention to performance, security, and scalability.",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      number: "03"
    }
  ],
  stats: [
    { value: 98, label: "Client Satisfaction", symbol: "%" },
    { value: 127, label: "Projects Completed", symbol: "+" },
    { value: 14, label: "Industry Awards", symbol: "" },
    { value: 8, label: "Years of Excellence", symbol: "" }
  ],
  quote: "Design is not just what it looks like and feels like. Design is how it works."
};

// Contact CTA data
export const contactCtaData = {
  title: {
    line1: "Let's create",
    line2: "something",
    line3: "extraordinary",
  },
  description: "At the intersection of imagination and implementation, we transform concepts into experiences that resonate and innovations that endure.",
  button: {
    text: "Start a project",
    url: "/contact"
  },
  contact: {
    email: "beyond@softylus.com"
  }
};