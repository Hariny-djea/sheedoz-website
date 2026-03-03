/**
 * SHEEDOZ WEBSITE - Main JavaScript
 * Handles interactions, animations, and user experience enhancements
 */

// ==========================================
// 1. SMOOTH SCROLL NAVIGATION
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    // Skip if href is just "#" (for placeholder links)
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      // Close mobile menu if open
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
      }

      // Smooth scroll to target
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==========================================
// 2. STICKY HEADER WITH SCROLL EFFECT
// ==========================================
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

function handleHeaderScroll() {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }

  lastScrollY = scrollY;
}

// Throttle scroll events for performance
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleHeaderScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// Initial check
handleHeaderScroll();

// ==========================================
// 3. MOBILE MENU TOGGLE
// ==========================================
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }

  // Close menu when clicking outside
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close menu when clicking on any mobile menu link
  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ==========================================
// 4. INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, observerOptions);

// Observe all elements with .animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ==========================================
// 5. PLATFORM DETECTION FOR SMART CTA BUTTONS
// ==========================================
function detectPlatform() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);

  // App Store and Google Play URLs (update these with real URLs when apps are published)
  const appStoreURL = 'https://apps.apple.com/app/sheedoz'; // Add real App ID
  const googlePlayURL = 'https://play.google.com/store/apps/details?id=com.harinydjearamane.sheedoz';

  // Get all CTA buttons
  const appStoreBtns = document.querySelectorAll('#cta-app-store, [href*="apps.apple.com"]');
  const googlePlayBtns = document.querySelectorAll('#cta-google-play, [href*="play.google.com"]');

  if (isIOS) {
    // On iOS devices, prioritize App Store button
    appStoreBtns.forEach(btn => {
      btn.href = appStoreURL;
      btn.style.order = '1'; // Show first
    });
    googlePlayBtns.forEach(btn => {
      btn.style.order = '2'; // Show second
    });
  } else if (isAndroid) {
    // On Android devices, prioritize Google Play button
    googlePlayBtns.forEach(btn => {
      btn.href = googlePlayURL;
      btn.style.order = '1'; // Show first
    });
    appStoreBtns.forEach(btn => {
      btn.style.order = '2'; // Show second
    });
  }

  // Update all App Store links
  appStoreBtns.forEach(btn => {
    if (!btn.href || btn.href.includes('#')) {
      btn.href = appStoreURL;
    }
  });

  // Update all Google Play links
  googlePlayBtns.forEach(btn => {
    if (!btn.href || btn.href.includes('#')) {
      btn.href = googlePlayURL;
    }
  });
}

// Run platform detection on load
detectPlatform();

// ==========================================
// 6. IMPROVED FOCUS MANAGEMENT (Accessibility)
// ==========================================
// Add visible focus indicator when navigating with keyboard
let isUsingMouse = false;

document.addEventListener('mousedown', () => {
  isUsingMouse = true;
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    isUsingMouse = false;
  }
});

// ==========================================
// 7. HANDLE EXTERNAL LINK SECURITY
// ==========================================
// Add rel="noopener noreferrer" to all external links for security
document.querySelectorAll('a[href^="http"]').forEach(link => {
  const url = new URL(link.href);
  if (url.hostname !== window.location.hostname) {
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ==========================================
// 8. CONSOLE MESSAGE (Easter Egg)
// ==========================================
console.log(
  '%cSheedoz 💡',
  'font-size: 24px; font-weight: bold; color: #D6724A; font-family: "Playfair Display", serif;'
);
console.log(
  '%cTu fouilles dans la console ? Tu as l\'esprit curieux ! 🔍\nOn recrute des développeuses passionnées. Envoie ton CV à contact@sheedoz.app',
  'font-size: 14px; color: #4B2E2A; font-family: "Poppins", sans-serif;'
);

// ==========================================
// 9. PERFORMANCE OPTIMIZATION
// ==========================================
// Lazy load images if Intersection Observer is supported
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// ==========================================
// 10. ANALYTICS TRACKING (Placeholder)
// ==========================================
// Track CTA clicks
function trackCTAClick(buttonId, platform) {
  // Placeholder for analytics tracking (Google Analytics, PostHog, etc.)
  console.log(`CTA clicked: ${buttonId} - ${platform}`);

  // Example: Google Analytics
  // if (window.gtag) {
  //   gtag('event', 'cta_click', {
  //     'button_id': buttonId,
  //     'platform': platform
  //   });
  // }
}

// Add tracking to all CTA buttons
document.querySelectorAll('.btn--primary, .btn--secondary').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const buttonText = btn.textContent.trim();
    const platform = buttonText.includes('App Store') ? 'iOS' :
                     buttonText.includes('Google Play') ? 'Android' : 'Web';
    trackCTAClick(btn.id || 'unknown', platform);
  });
});

// ==========================================
// 11. ERROR HANDLING
// ==========================================
// Log errors to console (in production, send to error tracking service)
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.message, e.filename, e.lineno, e.colno);
});

// ==========================================
// 12. PAGE LOAD COMPLETE
// ==========================================
window.addEventListener('load', () => {
  // Hide loading spinner if any
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none';
  }

  // Log page load time for performance monitoring
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page loaded in ${pageLoadTime}ms`);
  }
});

// ==========================================
// 13. BROWSER COMPATIBILITY CHECKS
// ==========================================
// Check for essential features and show warning if not supported
function checkBrowserCompatibility() {
  const requiredFeatures = [
    'IntersectionObserver',
    'fetch',
    'Promise'
  ];

  const unsupportedFeatures = requiredFeatures.filter(feature => !(feature in window));

  if (unsupportedFeatures.length > 0) {
    console.warn('Some features may not work in your browser:', unsupportedFeatures);
    // In production, you might want to show a polite upgrade message
  }
}

checkBrowserCompatibility();
