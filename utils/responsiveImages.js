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
 * @returns {string} HTML resultante (picture o img).
 */
function renderImageSync({ src, alt, title = "" }) {
  // 1) Si es SVG o GIF, regresar <img> directo
  if (src.endsWith(".svg") || src.endsWith(".gif")) {
    return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
  }

  // Ajuste: si detectamos que src empieza con "/assets", lo convertimos a la ruta física real
  if (src.startsWith("/assets")) {
    // Únete al path ./src, asumiendo que tus imágenes viven en "./src/assets/"
    src = path.join(__dirname, "..", "src", src); 
    // ^ Subimos un nivel (..) para salir de /utils/, ajusta si tu estructura difiere
  }

 
  // 2) Extraer clases, id, etc. de title
  const attributes = title.match(/(\.[\w-]+)|(\#[\w-]+)/g) || [];
  const classes = attributes.filter(attr => attr.startsWith(".")).map(cls => cls.substring(1)).join(" ");
  const id = attributes.find(attr => attr.startsWith("#"))?.substring(1);

  const htmlOpts = {
    alt,
    loading: "lazy",
    decoding: "async",
  };
  if (classes) htmlOpts.class = classes;
  if (id) htmlOpts.id = id;

  // 3) Parsear skip, caption, sizes, etc.
  const parsed = (title || "")
    .replace(/(\.[\w-]+)|(\#[\w-]+)/g, "")
    .match(/^(?<skip>@skip(?:\[(?<width>\d+)x(?<height>\d+)\])? ?)?(?:\?\[(?<sizes>.*?)\] ?)?(?<caption>.*)/)
    ?.groups || {};

  // 4) @skip o rutas http/https => no procesamos
  if (parsed.skip || src.startsWith("http")) {
    const metadata = { jpeg: [{ url: src }] };
    // Si hay width y height, se los asignamos
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

  // 5) Ajustar ruta local si es necesario (opcional)
  // if (src.startsWith("/assets")) {
  //   src = "src" + src; 
  // }

  // 6) Opciones de eleventy-img
  const widths = [450, 780, 962, 1400, 1920];
  const imgOpts = {
    widths: widths,
    formats: ["webp", "jpeg"],
    urlPath: "/assets/img/",
    outputDir: "./public/assets/img/",
  };

  // 7) Generar imágenes (sincrónico)
  Image(src, imgOpts); // procesa la imagen
  const metadata = Image.statsSync(src, imgOpts);

  // 8) Generar HTML
  const generated = Image.generateHTML(metadata, {
    sizes: parsed.sizes || "(max-width: 1920px) 100vw, 1920px",
    ...htmlOpts,
  });

  // 9) Si hay caption => figure
  return parsed.caption ? figure(generated, parsed.caption) : generated;
}

module.exports = {
  renderImageSync,
};