/**
 * Initializes smooth scrolling for anchor links
 */
export function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const href = this.getAttribute('href');
      
      if (href && !prefersReducedMotion) {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const headerOffset = 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          history.pushState(null, null, href);
        }
      }
    });
  });
}