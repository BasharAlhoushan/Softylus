/**
 * Adds touch feedback to interactive elements
 */
export function addTouchFeedback() {
  const interactiveElements = document.querySelectorAll('a, button, .service-card, .industry-card, .blog-card, .neo-feature-card');
  
  interactiveElements.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.classList.add('touch-active');
    }, { passive: true });
    
    element.addEventListener('touchend', function() {
      this.classList.remove('touch-active');
      
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('touch-ripple');
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 500);
    }, { passive: true });
    
    element.addEventListener('touchcancel', function() {
      this.classList.remove('touch-active');
    }, { passive: true });
  });
}