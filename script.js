document.addEventListener("DOMContentLoaded", () => {
  const revealText = document.querySelector(".hero-copy h1");
  const menuButton = document.querySelector(".mobile-menu-btn");
  const siteNav = document.querySelector(".site-nav");

  if (revealText) {
    revealText.style.opacity = "0";
    revealText.style.transform = "translateY(16px)";
    revealText.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    requestAnimationFrame(() => {
      revealText.style.opacity = "1";
      revealText.style.transform = "translateY(0)";
    });
  }

  if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Sluit navigatie" : "Open navigatie");
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigatie");
      });
    });
  }
});
