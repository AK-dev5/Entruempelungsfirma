// Einfache Animation beim Scrollen anzeigen
window.addEventListener('scroll', () => {
  document.querySelectorAll('.info, .kontakt').forEach(section => {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      section.style.animation = 'fadeInUp 1s ease forwards';
    }
  });
});
