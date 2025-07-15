// Animation der Features beim Scrollen
document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  const revealFeatures = () => {
    const triggerBottom = window.innerHeight * 0.85;

    features.forEach(feature => {
      const featureTop = feature.getBoundingClientRect().top;

      if(featureTop < triggerBottom) {
        feature.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealFeatures);
  revealFeatures(); // auch sofort prüfen beim Laden
});
