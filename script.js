// Animation der Sektionen beim Scrollen
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// Initial Animation direkt beim Laden prüfen
window.addEventListener('load', () => {
  document.querySelectorAll('section').forEach(section => {
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (top < screenHeight - 100) {
      section.classList.add('visible');
    }
  });
});
