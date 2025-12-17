/* ================= HAMBURGER MENU ================= */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active'); // matches your CSS
  });
}

/* ================= CLOSE MENU ON LINK CLICK (MOBILE) ================= */
const navLinks = document.querySelectorAll('.nav a'); // FIXED from docum

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
