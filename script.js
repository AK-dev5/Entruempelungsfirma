// Animation beim Scrollen für die Features
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
  revealFeatures(); // direkt beim Laden prüfen
});
