/**
 * Apply iOS-specific enhancements
 */
export function applyIOSEnhancements() {
  // Detect iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (isIOS) {
    // Add iOS-specific class to body
    document.body.classList.add('ios-device');
    
    // Fix for iOS 100vh issue
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    
    // Fix for iOS momentum scrolling
    document.addEventListener('touchmove', function(event) {
      if (event.scale !== 1) {
        event.preventDefault();
      }
    }, { passive: false });
    
    // Prevent double-tap zoom on iOS
    const doubleTapElements = document.querySelectorAll('a, button, .nav-link, .service-card, .blog-card');
    doubleTapElements.forEach(el => {
      el.addEventListener('touchend', e => {
        e.preventDefault();
        // Trigger the element's click event instead
        setTimeout(() => {
          el.click();
        }, 10);
      });
    });
    
    // Force hardware acceleration for smoother animations on iOS
    const animatedElements = document.querySelectorAll('.animated, [data-aos], .service-card, .blog-card, .neo-feature-card');
    animatedElements.forEach(el => {
      el.style.transform = 'translateZ(0)';
      el.style.backfaceVisibility = 'hidden';
      el.style.perspective = '1000px';
    });
  }
}