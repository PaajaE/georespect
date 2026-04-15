/**
 * Render the image-first reference gallery.
 * Requires `window.GEORespect.references` from `references-data.js`.
 */

(function () {
  const getLang = () => {
    const lang = (document.documentElement.getAttribute("lang") || "en")
      .toLowerCase()
      .trim();
    if (lang.startsWith("cs") || lang.startsWith("cz")) return "cz";
    if (lang.startsWith("es")) return "es";
    return "en";
  };

  const safeText = (value) => (typeof value === "string" ? value : "");

  const render = () => {
    const root = document.querySelector('[data-component="reference-gallery"]');
    if (!root) return;

    const items = (window.GEORespect && window.GEORespect.references) || [];
    if (!Array.isArray(items) || items.length === 0) return;

    const lang = getLang();

    const list = document.createElement("ul");
    list.className = "reference-gallery";

    for (const item of items) {
      if (!item || !item.id) continue;

      const title = safeText(item.title && item.title[lang]);
      const tag = safeText(item.tag && item.tag[lang]);
      const year = safeText(item.year);
      const img = safeText(item.image);

      const li = document.createElement("li");
      li.className = "ref-card";

      const media = document.createElement("div");
      media.className = "ref-card__media";

      const image = document.createElement("img");
      image.src = img;
      image.loading = "lazy";
      image.decoding = "async";
      image.alt = title;

      media.appendChild(image);

      const body = document.createElement("div");
      body.className = "ref-card__body";

      const h3 = document.createElement("h3");
      h3.className = "ref-card__title";
      h3.textContent = title;

      body.appendChild(h3);

      if (tag) {
        const pTag = document.createElement("p");
        pTag.className = "ref-card__tag";
        pTag.textContent = tag;
        body.appendChild(pTag);
      }

      const pYear = document.createElement("div");
      pYear.className = "ref-card__year";
      pYear.textContent = year;
      body.appendChild(pYear);

      li.appendChild(media);
      li.appendChild(body);
      list.appendChild(li);
    }

    root.replaceChildren(list);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();

