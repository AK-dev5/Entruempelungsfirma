// Scroll-Animationen für Sektionen
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
      section.classList.add('visible');
    }
  });
});

// Klickanimation für Kontaktlinks
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    link.style.color = '#00cc99';
    link.style.transition = 'color 0.3s ease';
  });
});
