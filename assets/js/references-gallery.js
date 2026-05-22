/**
 * Reference gallery — natural card height with scroll when details overflow.
 */

(function () {
  const SCROLL_MAX_PX = 168;

  const getLang = () => {
    const lang = (document.documentElement.getAttribute("lang") || "en")
      .toLowerCase()
      .trim();
    if (lang.startsWith("cs") || lang.startsWith("cz")) return "cz";
    if (lang.startsWith("es")) return "es";
    return "en";
  };

  const safeText = (value) => (typeof value === "string" ? value : "");

  const normalizeLabel = (text) => text.replace(/:$/, "").trim();

  const wrapDetails = (rows) => {
    const root = document.createElement("div");
    root.className = "ref-details";
    for (const row of rows) root.appendChild(row);
    return root;
  };

  /** @returns {HTMLElement[]} */
  const buildDetailRows = (html) => {
    const host = document.createElement("div");
    host.innerHTML = html;

    const rows = [];
    let listLabel = "Objective";

    const addRow = (label, valueEl, variant) => {
      const row = document.createElement("div");
      row.className = "ref-detail";
      if (variant) row.classList.add(`ref-detail--${variant}`);

      const lbl = document.createElement("span");
      lbl.className = "ref-detail__label";
      lbl.textContent = label;

      const val = document.createElement("div");
      val.className = "ref-detail__value";
      val.appendChild(valueEl);

      row.appendChild(lbl);
      row.appendChild(val);
      rows.push(row);
    };

    const addNote = (node) => {
      const row = document.createElement("div");
      row.className = "ref-detail ref-detail--note";
      const val = document.createElement("div");
      val.className = "ref-detail__value";
      val.appendChild(node.cloneNode(true));
      row.appendChild(val);
      rows.push(row);
    };

    for (const node of host.childNodes) {
      if (node.nodeType !== Node.ELEMENT_NODE) continue;

      if (node.nodeName === "UL") {
        const ul = node.cloneNode(true);
        ul.className = "ref-detail__list";
        addRow(listLabel, ul, "list");
        listLabel = "Objective";
        continue;
      }

      if (node.nodeName !== "P") continue;

      const em = node.querySelector("em");
      const afterEm = em
        ? node.textContent.slice(node.textContent.indexOf(em.textContent) + em.textContent.length).trim()
        : "";

      if (em && !afterEm) {
        listLabel = normalizeLabel(em.textContent);
        continue;
      }

      if (em) {
        const span = document.createElement("span");
        span.innerHTML = node.innerHTML.replace(em.outerHTML, "").replace(/^[\s:]+/, "");
        addRow(normalizeLabel(em.textContent), span, null);
        continue;
      }

      const text = node.textContent.trim();
      const colonAt = text.indexOf(":");
      if (colonAt > 0 && colonAt < 36) {
        const span = document.createElement("span");
        span.textContent = text.slice(colonAt + 1).trim();
        addRow(text.slice(0, colonAt).trim(), span, null);
        continue;
      }

      addNote(node);
    }

    return rows;
  };

  const updateScrollFade = (scrollEl) => {
    if (!scrollEl.classList.contains("ref-card__details-scroll--clip")) {
      scrollEl.classList.remove("ref-card__details-scroll--fade");
      return;
    }

    const remaining =
      scrollEl.scrollHeight - scrollEl.scrollTop - scrollEl.clientHeight;
    scrollEl.classList.toggle("ref-card__details-scroll--fade", remaining > 4);
  };

  const bindDetailsScroll = (scrollEl) => {
    const apply = () => {
      scrollEl.classList.remove(
        "ref-card__details-scroll--clip",
        "ref-card__details-scroll--fade"
      );

      if (scrollEl.scrollHeight > SCROLL_MAX_PX) {
        scrollEl.classList.add("ref-card__details-scroll--clip");
      }

      updateScrollFade(scrollEl);
    };

    scrollEl.addEventListener("scroll", () => updateScrollFade(scrollEl), {
      passive: true,
    });

    apply();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(apply);
      observer.observe(scrollEl);
    } else {
      window.addEventListener("load", apply, { once: true });
    }
  };

  const buildDetailsScroll = (rows) => {
    const scroll = document.createElement("div");
    scroll.className = "ref-card__details-scroll";
    scroll.setAttribute("tabindex", "0");
    scroll.appendChild(wrapDetails(rows));
    bindDetailsScroll(scroll);
    return scroll;
  };

  const createCard = (item, lang) => {
    const title = safeText(item.title && item.title[lang]);
    const bodyHtml = safeText(item.body && item.body[lang]);
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

    const cardBody = document.createElement("div");
    cardBody.className = "ref-card__body";

    const head = document.createElement("div");
    head.className = "ref-card__head";

    const h3 = document.createElement("h3");
    h3.className = "ref-card__title";
    h3.textContent = title;
    head.appendChild(h3);

    if (year) {
      const badge = document.createElement("span");
      badge.className = "ref-card__badge";
      badge.textContent = year;
      head.appendChild(badge);
    }

    cardBody.appendChild(head);

    if (bodyHtml) {
      const rows = buildDetailRows(bodyHtml);
      if (rows.length) cardBody.appendChild(buildDetailsScroll(rows));
    }

    li.appendChild(media);
    li.appendChild(cardBody);
    return li;
  };

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
      list.appendChild(createCard(item, lang));
    }

    root.replaceChildren(list);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
