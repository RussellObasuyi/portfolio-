// =======================
// Hamburger Menu Toggle
// =======================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// =======================
// Scroll-triggered Animations
// =======================

// Select all elements with the fade-slide class
const faders = document.querySelectorAll('.fade-slide');

// Create an IntersectionObserver to detect when elements enter the viewport
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each fade-slide element
faders.forEach(el => appearOnScroll.observe(el));
