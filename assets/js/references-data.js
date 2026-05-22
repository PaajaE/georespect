/**
 * Reference gallery data (titles and bodies from legacy site content).
 *
 * type ReferenceItem = {
 *   id: string,
 *   image: string,
 *   year: string,
 *   title: { en: string, es: string, cz: string },
 *   body: { en: string, es: string, cz: string },
 *   tier: "short" | "medium" | "long"
 * }
 */

(function () {
  window.GEORespect = window.GEORespect || {};

  /** @type {Array<ReferenceItem>} */
  window.GEORespect.references = [
    {
      id: "hambaricho",
      tier: "short",
      image: "../assets/images/references/optimized/hambaricho.jpg",
      year: "2023 - 2025",
      title: {
        en: "Agriculture Systems Adaptation Program in the Hambaricho Mountain Watershed — ASAP in Hambaricho",
        es: "Programa de adaptación de los sistemas agrícolas en la cuenca hidrográfica de la Sierra Hambaricho - ASAP en Hambaricho",
        cz: "Program adaptace zemědělských systémů v povodí pohoří Hambaricho – ASAP v Hambaricho",
      },
      body: {
        es: "<p>Ubicación: Región Sidama, Etiopía</p><p>Contratante: ONG People in Need - Agencia de Desarrollo de la República Checa</p><p>Objetivo: Análisis de los riesgos geológicos y medioambientales en la zona de la Sierra Hambaricho.</p>",
        en: "<p>Location: Sidama Region, Ethiopia</p><p>Client: NGO People in Need — Czech Development Agency</p><p>Objective: Analysis of geological and environmental risks in the Hambaricho Mountain area.</p>",
        cz: "<p>Lokalita: region Sidama, Etiopie</p><p>Zadavatel: NGO People in Need – Česká rozvojová agentura</p><p>Cíl: Analýza geologických a environmentálních rizik v oblasti pohoří Hambaricho.</p>",
      },
    },
    {
      id: "sidama",
      tier: "long",
      image: "../assets/images/references/optimized/sidama.jpg",
      year: "2023 - 2024",
      title: {
        en: "Participatory development of the productive landscape in the Sidama region, Ethiopia, II",
        es: "Desarrollo participativo del paisaje productivo en la región de Sidama, Etiopia, II",
        cz: "Participativní rozvoj produkční krajiny v regionu Sidama, Etiopie, II",
      },
      body: {
        es: "<p><em>Ubicación:</em> Región Sidama, Etiopía</p><p><em>Contratante:</em> ONG People in Need - Agencia de Desarrollo de la República Checa</p><p><em>Objetivo:</em> Estudio biofísico (riesgos geológicos), exploración y documentación enfocadas en las características geomorfológicas, litológicas y geodinámicas locales a fin de conservar y gestionar los recursos de agua y suelo hacia una agricultura sostenible y protección de los recursos naturales.</p>",
        en: "<p><em>Location:</em> Sidama Region, Ethiopia</p><p><em>Client:</em> NGO People in Need — Czech Development Agency</p><p><em>Objective:</em> Biophysical study (geological risks), exploration and documentation focused on local geomorphological, lithological and geodynamic characteristics in order to conserve and manage water and soil resources towards sustainable agriculture and protection of natural resources.</p>",
        cz: "<p><em>Lokalita:</em> region Sidama, Etiopie</p><p><em>Zadavatel:</em> NGO People in Need – Česká rozvojová agentura</p><p><em>Cíl:</em> Biofyzikální studie (geologická rizika), průzkum a dokumentace zaměřené na místní geomorfologické, litologické a geodynamické charakteristiky za účelem ochrany a hospodaření s vodními a půdními zdroji směrem k udržitelnému zemědělství a ochraně přírodních zdrojů.</p>",
      },
    },
    {
      id: "radioactive-waste-cz",
      tier: "short",
      image: "../assets/images/references/optimized/radioactive-storage.jpg",
      year: "2023 - 2025",
      title: {
        en: "Research and selection of suitable sites for underground storage facilities for radioactive waste in the Czech Republic",
        es: "Investigación y selección de emplazamientos adecuados para la construcción de instalaciones de almacenamiento subterráneo de pasivos radioactivos en la República Checa",
        cz: "Výzkum a výběr vhodných lokalit pro výstavbu podzemních zařízení pro ukládání radioaktivního odpadu v České republice",
      },
      body: {
        es: "<p><em>Contratante</em>: Autoridad de Repositorios de Residuos Radiactivos (SURAO)</p><p><em>Ubicación:</em> República Checa</p><p><em>Objetivo:</em> Consultoría especializada en geología y geomorfología para la investigación y selección emplazamientos adecuados para la construcción de instalaciones de almacenamiento subterráneo de pasivos radioactivos.</p>",
        en: "<p><em>Client</em>: Radioactive Waste Repositories Authority (SURAO)</p><p><em>Location:</em> Czech Republic</p><p><em>Objective:</em> Specialized geology and geomorphology consultancy for research and selection of suitable sites for the construction of underground storage facilities for radioactive waste.</p>",
        cz: "<p><em>Zadavatel</em>: Správa úložišť radioaktivních odpadů (SURAO)</p><p><em>Lokalita:</em> Česká republika</p><p><em>Cíl:</em> Specializovaná geologická a geomorfologická konzultace pro výzkum a výběr vhodných lokalit pro výstavbu podzemních zařízení pro ukládání radioaktivního odpadu.</p>",
      },
    },
    {
      id: "sumava",
      tier: "medium",
      image: "../assets/images/references/optimized/sumava.jpg",
      year: "2023 - 2024",
      title: {
        en: "Interpretation of geomorphological data for visitors to the Šumava Real Geopark",
        es: "Interpretación de los datos geomorfológicos para los visitantes del Geoparque Šumava Real",
        cz: "Interpretace geomorfologických dat pro návštěvníky Geoparku Šumava Real",
      },
      body: {
        es: "<p><em>Ubicación:</em> Región Pilsen y Región Bohemia, República Checa</p><p><em>Objetivo:</em></p><ul><li>Análisis geomorfológico del terreno e interpretación de datos topográficos por escaneo LIDAR.</li><li>Mapa geomorfológico del terreno (500 km2).</li><li>Aplicativo digital.</li></ul>",
        en: "<p><em>Location:</em> Pilsen Region and Bohemia Region, Czech Republic</p><p><em>Objective:</em></p><ul><li>Geomorphological terrain analysis and interpretation of topographic data from LIDAR scanning.</li><li>Geomorphological map of the terrain (500 km²).</li><li>Digital application.</li></ul>",
        cz: "<p><em>Lokalita:</em> Plzeňský a Jihočeský kraj, Česká republika</p><p><em>Cíl:</em></p><ul><li>Geomorfologická analýza terénu a interpretace topografických dat z LIDAR skenování.</li><li>Geomorfologická mapa terénu (500 km²).</li><li>Digitální aplikace.</li></ul>",
      },
    },
    {
      id: "miami-beach",
      tier: "short",
      image: "../assets/images/references/optimized/miami-beach.jpg",
      year: "2022",
      title: {
        en: "Preliminary assessment of geological hazards through geomorphological analysis for the “Miami Beach Peruano” real estate project",
        es: "Evaluación preliminar de peligros geológicos mediante el análisis geomorfológico para el proyecto inmobiliario “Miami Beach Peruano”",
        cz: "Předběžné hodnocení geologických rizik geomorfologickou analýzou pro projekt „Miami Beach Peruano“",
      },
      body: {
        es: "<p><em>Ubicación:</em> Distrito Comandante Noel, Provincia de Casma, Región Ancash, Perú</p><p><em>Objetivo:</em> Evaluación preliminar para la identificación de peligros geológicos existentes en un contexto de hasta 50 km2 mediante el análisis geomorfológico en gabinete de acuerdo con el siguiente detalle: 20Km2 (escala: 1: 5000), 30Km2 (escala: 1:25 000).</p>",
        en: "<p><em>Location:</em> Comandante Noel District, Casma Province, Ancash Region, Peru</p><p><em>Objective:</em> Preliminary assessment for identification of existing geological hazards in an area of up to 50 km² through desk-based geomorphological analysis as follows: 20 km² (scale 1:5,000), 30 km² (scale 1:25,000).</p>",
        cz: "<p><em>Lokalita:</em> distrikt Comandante Noel, provincie Casma, region Ancash, Peru</p><p><em>Cíl:</em> Předběžné hodnocení za účelem identifikace existujících geologických rizik v rozsahu až 50 km² pomocí kancelářské geomorfologické analýzy v rozsahu: 20 km² (měřítko 1:5 000), 30 km² (měřítko 1:25 000).</p>",
      },
    },
    {
      id: "amazonas",
      tier: "long",
      image: "../assets/images/references/optimized/amazonas.jpg",
      year: "2022",
      title: {
        en: "Vulnerability study for geological hazards after a 7.5 magnitude earthquake for conceptual road alternatives — sawmill sector km 265+390 to km 275+050, Amazonas Region, Peru",
        es: "Estudio de vulnerabilidad por peligros geológicos post evento sísmico de 7.5 grados para la recomendación de alternativas de carretera a nivel conceptual - sector aserradero km 265+390 al km 275+050, Región Amazonas, Perú",
        cz: "Studie zranitelnosti vůči geologickým rizikům po zemětřesení o síle 7,5 stupně pro doporučení koncepčních variant trasy – úsek Pila km 265+390 až km 275+050, region Amazonas, Peru",
      },
      body: {
        es: "<p><em>Tipo del proyecto:</em> Proyecto de la Concesionaria IIRSA NORTE</p><p><em>Ubicación:</em> Sector Aserradero, Distrito de Jamalca, Provincia Utcubamba, Región Amazonas, Perú</p><p><em>Objetivo del proyecto:</em></p><ul><li>Levantamiento topográfico LIDAR por UAV del área de estudio que abarca hasta 60km2.</li><li>Creación del modelo digital del relieve (MDR) en un área de hasta 60km2 a escala 1:10,000.</li><li>Análisis geomorfológico del terreno e interpretación geomorfológica de las imágenes satelitales y MDR.</li><li>Relevamiento de campo de la documentación geológica y geomorfológica de forma visual.</li><li>Análisis de la susceptibilidad del territorio por peligros naturales.</li><li>Con base en la identificación de las zonas de la alta vulnerabilidad por peligros geológicos, plantear al menos 03 alternativas de trazo para el sector de Aserradero a nivel conceptual.</li><li>Presentar una propuesta de las medidas de protección para eliminar el impacto de los procesos naturales.</li></ul>",
        en: "<p><em>Project type:</em> Concessionaire IIRSA NORTE project</p><p><em>Location:</em> Sawmill sector, Jamalca District, Utcubamba Province, Amazonas Region, Peru</p><p><em>Project objective:</em></p><ul><li>UAV LIDAR topographic survey of the study area covering up to 60 km².</li><li>Creation of a digital terrain model (DTM) for an area of up to 60 km² at scale 1:10,000.</li><li>Geomorphological terrain analysis and geomorphological interpretation of satellite imagery and DTM.</li><li>Field survey for visual documentation of geological and geomorphological features.</li><li>Analysis of territory susceptibility to natural hazards.</li><li>Based on identification of areas of high vulnerability to geological hazards, propose at least three conceptual route alternatives for the Sawmill sector.</li><li>Present a proposal of protection measures to eliminate the impact of natural processes.</li></ul>",
        cz: "<p><em>Typ projektu:</em> projekt koncesionáře IIRSA NORTE</p><p><em>Lokalita:</em> úsek Pila, distrikt Jamalca, provincie Utcubamba, region Amazonas, Peru</p><p><em>Cíl projektu:</em></p><ul><li>Topografické zaměření LIDAR pomocí UAV v oblasti studia do 60 km².</li><li>Vytvoření digitálního modelu reliéfu (DMR) v oblasti do 60 km² v měřítku 1:10 000.</li><li>Geomorfologická analýza terénu a geomorfologická interpretace satelitních snímků a DMR.</li><li>Terénní průzkum pro vizuální dokumentaci geologických a geomorfologických údajů.</li><li>Analýza susceptibility území vůči přírodním rizikům.</li><li>Na základě identifikace oblastí s vysokou zranitelností vůči geologickým rizikům navrhnout nejméně tři koncepční varianty trasy pro úsek Pila.</li><li>Předložit návrh ochranných opatření pro eliminaci dopadů přírodních procesů.</li></ul>",
      },
    },
    {
      id: "piura-outlet",
      tier: "short",
      image: "../assets/images/references/optimized/piura-outlet.jpg",
      year: "2022",
      title: {
        en: "“Piura River outlet to the Pacific Ocean” report for the master flood control plan of the Piura River — Authority for Reconstruction with Changes (ARCC)",
        es: "“Salida del río Piura hacia el océano Pacífico” informe para la elaboración del plan maestro de control de inundaciones del río Piura - autoridad para la reconstrucción con cambios (ARCC)",
        cz: "„Výtok řeky Piura do Tichého oceánu“ – zpráva pro zpracování hlavního plánu záplavové ochrany řeky Piura – Úřad pro obnovu se změnami (ARCC)",
      },
      body: {
        es: "<p>Recomendación de una ruta adecuada para la descarga de aguas de inundación al mar mediante el análisis geomorfológico del terreno.</p><p>Proyecto de la Autoridad para la Reconstrucción con Cambios, Gobierno Peruano.<br>Subcontrato de GEORESPECT s.r.o. para ARUP PERÚ.</p>",
        en: "<p>Recommendation of a suitable route for discharging flood waters to the sea through geomorphological terrain analysis.</p><p>Project of the Authority for Reconstruction with Changes, Government of Peru.<br>Subcontract of GEORESPECT s.r.o. for ARUP PERU.</p>",
        cz: "<p>Doporučení vhodné trasy pro odvod záplavových vod do moře na základě geomorfologické analýzy terénu.</p><p>Projekt Úřadu pro obnovu se změnami, peruánská vláda.<br>Subdodávka GEORESPECT s.r.o. pro ARUP PERU.</p>",
      },
    },
    {
      id: "ethiopia-mapping",
      tier: "medium",
      image: "../assets/images/references/optimized/ethiopia.jpg",
      year: "2020 - 2022",
      title: {
        en: "Geological and hydrogeological map compilation on a 1:1,000,000 scale for the entire territory of Ethiopia",
        es: "GEOLOGICAL AND HYDROGEOLOGICAL MAP COMPILATION ON A 1:1,000,000 SCALE FOR THE ENTIRE TERRITORY OF ETHIOPIA",
        cz: "Geologická a hydrogeologická mapová kompilace v měřítku 1:1 000 000 pro celé území Etiopie",
      },
      body: {
        es: "<p>GEORESPECT como subcontrator del Servicio Geológico Checo implementa las siguientes actividades dentro de este proyecto:</p><ul><li>Desarrollo de una base topográfica para el mapeo geológico a escala 1: 750.000 del territorio del país de Etiopía;</li><li>Análisis morfo-tectónico del territorio del país de Etiopía a escala 1: 750.000.</li></ul><p>El proyecto está financiado por la Agencia Checa de Desarrollo.</p>",
        en: "<p>GEORESPECT, as a subcontractor to the Czech Geological Survey, carries out the following activities within this project:</p><ul><li>Development of a topographic base for geological mapping at scale 1:750,000 of the territory of Ethiopia;</li><li>Morpho-tectonic analysis of the territory of Ethiopia at scale 1:750,000.</li></ul><p>The project is funded by the Czech Development Agency.</p>",
        cz: "<p>GEORESPECT jako subdodavatel České geologické služby v rámci tohoto projektu realizuje:</p><ul><li>Vytvoření topografického podkladu pro geologické mapování v měřítku 1:750 000 území Etiopie;</li><li>Morfo-tectonickou analýzu území Etiopie v měřítku 1:750 000.</li></ul><p>Projekt je financován Českou rozvojovou agenturou.</p>",
      },
    },
    {
      id: "piura-pilot",
      tier: "medium",
      image: "../assets/images/references/optimized/piura-pilot.jpg",
      year: "2018 - 2019",
      title: {
        en: "Analysis of vulnerability of the lower Piura River basin to floods and possibilities for their reduction (a pilot project of natural disaster vulnerability analysis in Peru)",
        es: "ANÁLISIS DE LA VULNERABILIDAD DE LA CUENCA BAJA DEL RÍO PIURA POR LAS INUNDACIONES Y LA POSIBILIDADES DE SU ELIMINACIÓN (UN PROYECTO PILOTO DE EL ANÁLISIS DE LA VULNERABILIDAD DEL PADESASTRES NATURALES EN EL PERÚ)",
        cz: "Analýza zranitelnosti dolního povodí řeky Piura vůči záplavám a možností jejich omezení (pilotní projekt analýzy zranitelnosti vůči přírodním katastrofám v Peru)",
      },
      body: {
        es: "<p>El tema del proyecto fue analizar 2 500 km2 de la cuenca baja del Río Piura en términos de su vulnerabilidad a las inundaciones. La implementación incluyó:</p><ul><li>Evaluación de los impactos del fenómeno El Niño 2017.</li><li>Estudio de susceptibilidad de la zona por las inundaciones una escala de 1: 25,000.</li><li>Propuesta de medidas para reducir la vulnerabilidad del territorio a las inundaciones.</li></ul><p>El proyecto se ejecutó con el apoyo financiero de la Agencia Checa de Desarrollo.</p>",
        en: "<p>The subject of the project was to analyse 2,500 km² of the lower Piura River basin in terms of its vulnerability to floods. Implementation included:</p><ul><li>Assessment of the impacts of the 2017 El Niño phenomenon.</li><li>Flood susceptibility study of the area at scale 1:25,000.</li><li>Proposal of measures to reduce the territory’s vulnerability to floods.</li></ul><p>The project was carried out with financial support from the Czech Development Agency.</p>",
        cz: "<p>Předmětem projektu byla analýza 2 500 km² dolního povodí řeky Piura z hlediska jeho zranitelnosti vůči záplavám. Realizace zahrnovala:</p><ul><li>Hodnocení dopadů jevu El Niño v roce 2017.</li><li>Studii susceptibility území vůči záplavám v měřítku 1:25 000.</li><li>Návrh opatření ke snížení zranitelnosti území vůči záplavám.</li></ul><p>Projekt byl realizován s finanční podporou České rozvojové agentury.</p>",
      },
    },
  ];
})();
