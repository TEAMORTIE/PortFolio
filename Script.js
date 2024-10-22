document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible"); // Ajoute la classe 'visible' après 1 seconde
        }, 500); // Délai de 1000 millisecondes (1 seconde)
        observer.unobserve(entry.target); // Ne pas observer à nouveau après l'animation
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section); // Observe chaque section
  });
});
