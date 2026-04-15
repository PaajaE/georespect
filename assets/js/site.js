document.addEventListener("DOMContentLoaded", () => {
  // Keep desktop navigation visible; only collapse to a panel on smaller screens.
  const mobileQuery = window.matchMedia("(max-width: 64rem)");

  document.querySelectorAll(".site-header").forEach((header) => {
    const toggle = header.querySelector(".menu-toggle");
    const panel = header.querySelector(".site-header__panel");

    if (!toggle || !panel) {
      return;
    }

    const closeMenu = () => {
      header.classList.remove("is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      document.documentElement.classList.remove("is-nav-open");
      document.body.classList.remove("is-nav-open");
    };

    const syncMenu = () => {
      if (!mobileQuery.matches) {
        closeMenu();
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-menu-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.documentElement.classList.toggle("is-nav-open", isOpen);
      document.body.classList.toggle("is-nav-open", isOpen);
    });

    panel.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileQuery.matches) {
          closeMenu();
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (!mobileQuery.matches) {
        return;
      }

      if (event.key === "Escape") {
        closeMenu();
      }
    });

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", syncMenu);
    } else {
      mobileQuery.addListener(syncMenu);
    }

    syncMenu();
  });
});
