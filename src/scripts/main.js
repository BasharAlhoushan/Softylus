// Main JavaScript entry point
import { initSmoothScrolling } from './utils/navigation.js';
import { lazyLoadImages } from './utils/images.js';
import { addTouchFeedback } from './utils/touch.js';
import { initScrollProgress, initBackToTopButton } from './utils/scroll.js';
import { applyIOSEnhancements } from './utils/ios.js';

// Import AOS
import 'aos/dist/aos.css';
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  // Detect if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Initialize smooth scrolling behavior
  initSmoothScrolling();
  
  // Initialize AOS with performance optimizations
  AOS.init({
    duration: prefersReducedMotion ? 0 : 800,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
    once: true,
    mirror: false,
    offset: 50,
    disable: prefersReducedMotion || window.innerWidth < 768
  });
  
  // Optimize for touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add('touch-device');
    addTouchFeedback();
  }
  
  // Lazy load images for better mobile performance
  lazyLoadImages();
  
  // Initialize scroll progress indicator for mobile
  initScrollProgress();
  
  // Initialize back to top button for mobile
  initBackToTopButton();
  
  // iOS specific enhancements
  applyIOSEnhancements();
});