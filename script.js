document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  function showFeatures() {
    const trigger = window.innerHeight * 0.9;
    features.forEach(feature => {
      const top = feature.getBoundingClientRect().top;
      if (top < trigger) {
        feature.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', showFeatures);
  showFeatures();
});
