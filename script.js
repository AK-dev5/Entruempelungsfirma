document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling für Anker
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scroll-Animation (Aufdecken)
  const scrollElements = document.querySelectorAll('.card, .über-uns, .kontakt, .footer');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  scrollElements.forEach(el => {
    el.classList.add('before-visible');
    observer.observe(el);
  });
});
