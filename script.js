document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling für Anker
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const trg = document.querySelector(a.getAttribute('href'));
      if (trg) trg.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Scroll-Animationsbeobachter
  const els = document.querySelectorAll('header, .hero, .leistungen, .über-uns, .kontakt, .footer');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('visible');
        o.unobserve(ent.target);
      }
    });
  }, { threshold: 0.2 });

  els.forEach(el => {
    el.classList.add('before-visible');
    obs.observe(el);
  });
});
