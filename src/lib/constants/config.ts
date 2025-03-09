/**
 * Application configuration constants
 */

export const CONFIG = {
  APP: {
    NAME: 'Softylus',
    VERSION: '1.0.0',
    DESCRIPTION: 'Digital reality architect'
  },
  
  API: {
    BASE_URL: import.meta.env.PUBLIC_API_URL || '',
    TIMEOUT: 30000
  },
  
  ANALYTICS: {
    ENABLED: import.meta.env.PROD,
    DEBUG: import.meta.env.DEV
  },
  
  FEATURES: {
    DARK_MODE: false,
    ANIMATIONS: true
  },
  
  BREAKPOINTS: {
    MOBILE: 640,
    TABLET: 768,
    DESKTOP: 1024,
    WIDE: 1280
  },
  
  STORAGE: {
    PREFIX: 'softylus_',
    VERSION: '1'
  }
} as const;