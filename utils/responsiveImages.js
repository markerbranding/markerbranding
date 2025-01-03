// utils/responsiveImages.js
const Image = require("@11ty/eleventy-img");
const path = require("path");

/**
 * Envuelve contenido en <figure> con <figcaption>.
 */
function figure(content, caption) {
  return `<figure>
    ${content}
    <figcaption>${caption}</figcaption>
  </figure>`;
}

/**
 * Procesa las imágenes de forma "sincrónica",
 * útil para el renderer de Markdown (que no maneja async directamente).
 * @param {Object} params
 * @param {string} params.src   Ruta de la imagen (local o http).
 * @param {string} params.alt   Texto alternativo.
 * @param {string} [params.title] Título con sintaxis especial (.clases, #id, ?[sizes], etc.).
 *        Ahora también soporta "@nolazy" para deshabilitar `loading="lazy"`.
 * @returns {string} HTML resultante (picture o img).
 */
function renderImageSync({ src, alt, title = "" }) {
  // 1) Si es SVG o GIF, regresar <img> directo con lazy (puedes también quitarlo si quieres).
  if (src.endsWith(".svg") || src.endsWith(".gif")) {
    return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
  }

  // Ajuste: si detectamos que src empieza con "/assets", lo convertimos a la ruta física real
  if (src.startsWith("/assets")) {
    src = path.join(__dirname, "..", "src", src); 
  }

  // 2) Extraer clases, id, etc. de title
  const attributes = title.match(/(\.[\w-]+)|(\#[\w-]+)/g) || [];
  const classes = attributes.filter(attr => attr.startsWith(".")).map(cls => cls.substring(1)).join(" ");
  const id = attributes.find(attr => attr.startsWith("#"))?.substring(1);

  // Atributos base
  const htmlOpts = {
    alt,
    loading: "lazy", // Por defecto lo dejamos en lazy...
    decoding: "async",
  };
  if (classes) htmlOpts.class = classes;
  if (id) htmlOpts.id = id;

  // 2.1) Detectar si en `title` aparece @nolazy
  if (title.includes("@nolazy")) {
    // Removemos `@nolazy` del title para que no afecte caption
    title = title.replace("@nolazy", "").trim();
    // Eliminamos el atributo loading del objeto
    delete htmlOpts.loading;
  }

  // 3) Parsear skip, caption, sizes, etc.
  const parsed = (title || "")
    .replace(/(\.[\w-]+)|(\#[\w-]+)/g, "")
    .match(/^(?<skip>@skip(?:\[(?<width>\d+)x(?<height>\d+)\])? ?)?(?:\?\[(?<sizes>.*?)\] ?)?(?<caption>.*)/)
    ?.groups || {};

  // 4) @skip o rutas http/https => no procesamos
  if (parsed.skip || src.startsWith("http")) {
    const metadata = { jpeg: [{ url: src }] };
    if (parsed.width && parsed.height) {
      metadata.jpeg[0].width = parsed.width;
      metadata.jpeg[0].height = parsed.height;
    }
    const generated = Image.generateHTML(metadata, {
      ...htmlOpts,
      sizes: parsed.sizes || "100vw",
    });
    return parsed.caption ? figure(generated, parsed.caption) : generated;
  }

  // 5) Eleventy Image
  const widths = [450, 780, 962, 1400, 1920];
  const imgOpts = {
    widths,
    formats: ["webp", "jpeg"],
    urlPath: "/assets/img/",
    outputDir: "./public/assets/img/",
  };

  Image(src, imgOpts);
  const metadata = Image.statsSync(src, imgOpts);

  // 6) Generar HTML final
  const generated = Image.generateHTML(metadata, {
    sizes: parsed.sizes || "(max-width: 1920px) 100vw, 1920px",
    ...htmlOpts,
  });

  // 7) Caption => figure
  return parsed.caption ? figure(generated, parsed.caption) : generated;
}

module.exports = {
  renderImageSync,
};