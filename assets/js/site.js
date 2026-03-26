document.addEventListener("DOMContentLoaded", () => {
  const mobileQuery = window.matchMedia("(max-width: 1535px)");

  document.querySelectorAll(".site-header").forEach((header) => {
    const toggle = header.querySelector(".menu-toggle");
    const panel = header.querySelector(".site-header__panel");

    if (!toggle || !panel) {
      return;
    }

    const closeMenu = () => {
      header.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    const syncMenu = () => {
      if (!mobileQuery.matches) {
        closeMenu();
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-menu-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    panel.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileQuery.matches) {
          closeMenu();
        }
      });
    });

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", syncMenu);
    } else {
      mobileQuery.addListener(syncMenu);
    }

    syncMenu();
  });
});
