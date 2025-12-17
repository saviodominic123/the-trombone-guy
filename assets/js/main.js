/* ================= HAMBURGER MENU ================= */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Toggle mobile menu
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent click from bubbling to document
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active') && !nav.contains(e.target) && e.target !== hamburger) {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

/* ================= SCROLL FADE-IN ANIMATION ================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

const animatedSections = document.querySelectorAll('.card, .hero-content, .cta');
animatedSections.forEach(section => observer.observe(section));

/* ================= SMOOTH PAGE LOAD ================= */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
