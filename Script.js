document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 500);
        observer.unobserve(entry.target);
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
});
