// Einfache Scroll-Animation (FadeIn)
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(30px)';
    }
  });
});

// Initiales Styling für Animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
});
