/**
 * Reference gallery data.
 * Keep text short and consistent across languages.
 *
 * type ReferenceItem = {
 *   id: string,
 *   image: string,
 *   year: string,
 *   title: { en: string, es: string, cz: string },
 *   tag?: { en: string, es: string, cz: string }
 * }
 */

(function () {
  window.GEORespect = window.GEORespect || {};

  /** @type {Array<ReferenceItem>} */
  window.GEORespect.references = [
    {
      id: "hambaricho",
      image: "../assets/images/references/optimized/hambaricho.jpg",
      year: "2023–2025",
      title: {
        en: "Hambaricho – Agricultural adaptation",
        es: "Hambaricho – Adaptación agrícola",
        cz: "Hambaricho – Adaptace zemědělství",
      },
      tag: {
        en: "Risk assessment",
        es: "Evaluación de riesgos",
        cz: "Hodnocení rizik",
      },
    },
    {
      id: "sidama",
      image: "../assets/images/references/optimized/sidama.jpg",
      year: "2023–2024",
      title: {
        en: "Sidama – Productive landscape",
        es: "Sidama – Paisaje productivo",
        cz: "Sidama – Produkční krajina",
      },
      tag: {
        en: "Soil & water conservation",
        es: "Conservación de suelo y agua",
        cz: "Ochrana půdy a vody",
      },
    },
    {
      id: "radioactive-waste-cz",
      image: "../assets/images/references/optimized/radioactive-storage.jpg",
      year: "2023–2025",
      title: {
        en: "Underground waste storage – Czechia",
        es: "Almacenamiento subterráneo – Chequia",
        cz: "Podzemní úložiště – Česko",
      },
      tag: {
        en: "Site selection",
        es: "Selección de emplazamientos",
        cz: "Výběr lokality",
      },
    },
    {
      id: "sumava",
      image: "../assets/images/references/optimized/sumava.jpg",
      year: "2023–2024",
      title: {
        en: "Šumava Geopark – Terrain interpretation",
        es: "Geoparque Šumava – Interpretación",
        cz: "Geopark Šumava – Interpretace",
      },
      tag: {
        en: "Geomorphological mapping",
        es: "Cartografía geomorfológica",
        cz: "Geomorfologické mapování",
      },
    },
    {
      id: "miami-beach",
      image: "../assets/images/references/optimized/miami-beach.jpg",
      year: "2022",
      title: {
        en: "Geological hazards – Miami Beach",
        es: "Peligros geológicos – Miami Beach",
        cz: "Geologická rizika – Miami Beach",
      },
      tag: {
        en: "Geomorphological analysis",
        es: "Análisis geomorfológico",
        cz: "Geomorfologická analýza",
      },
    },
    {
      id: "amazonas",
      image: "../assets/images/references/optimized/amazonas.jpg",
      year: "2022",
      title: {
        en: "Post‑earthquake vulnerability – Amazonas",
        es: "Vulnerabilidad post‑sismo – Amazonas",
        cz: "Zranitelnost po zemětřesení – Amazonas",
      },
      tag: {
        en: "Natural hazard assessment",
        es: "Evaluación de peligros naturales",
        cz: "Hodnocení přírodních rizik",
      },
    },
    {
      id: "piura-outlet",
      image: "../assets/images/references/optimized/piura-outlet.jpg",
      year: "2022",
      title: {
        en: "Flood control – Piura River outlet",
        es: "Control de inundaciones – río Piura",
        cz: "Ochrana před povodněmi – řeka Piura",
      },
      tag: {
        en: "Flood routing",
        es: "Drenaje de crecidas",
        cz: "Odvodnění povodní",
      },
    },
    {
      id: "ethiopia-mapping",
      image: "../assets/images/references/optimized/ethiopia.jpg",
      year: "2020–2022",
      title: {
        en: "Geological mapping – Ethiopia",
        es: "Cartografía geológica – Etiopía",
        cz: "Geologické mapování – Etiopie",
      },
      tag: {
        en: "Geology & hydrogeology",
        es: "Geología e hidrogeología",
        cz: "Geologie a hydrogeologie",
      },
    },
    {
      id: "piura-pilot",
      image: "../assets/images/references/optimized/piura-pilot.jpg",
      year: "2018–2019",
      title: {
        en: "Piura – Vulnerability pilot",
        es: "Piura – Proyecto piloto",
        cz: "Piura – Pilotní projekt",
      },
      tag: {
        en: "Flood vulnerability",
        es: "Vulnerabilidad a inundaciones",
        cz: "Povodňová zranitelnost",
      },
    },
  ];
})();

