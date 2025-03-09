/**
 * Application route constants
 */

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  PROJECTS: '/projects',
  ABOUT: '/about',
  CONTACT: '/contact',
  
  BLOG: {
    INDEX: '/blog',
    POST: (slug: string) => `/blog/${slug}`
  },
  
  LEGAL: {
    PRIVACY: '/legal/privacy',
    TERMS: '/legal/terms',
    ETHICS: '/legal/ethics'
  }
} as const;