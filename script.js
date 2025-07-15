// Scroll-Animationen für Features
document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    features.forEach(feature => {
      const featureTop = feature.getBoundingClientRect().top;
      if (featureTop < triggerBottom) {
        feature.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Beim Laden prüfen
});
