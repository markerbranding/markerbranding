const { DateTime } = require("luxon");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const Image = require("@11ty/eleventy-img");

const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

// 1. Importamos la función que creamos en utils
const { renderImageSync } = require("./utils/responsiveImages");

// 2. Configurar Markdown-it con atributos
const markdown = markdownIt({
  html: true,
  linkify: true
}).use(markdownItAttrs);

// 2.1. Podemos crear aquí la función figure si la quieres local,
//     pero vamos a usar la que viene dentro de `renderImageSync`.

//
// 3. Reemplazar la regla de Markdown para imágenes
//
markdown.renderer.rules.image = function (tokens, idx /*, options, env, self */) {
  const token = tokens[idx];
  const imgSrc = token.attrGet("src");
  const imgAlt = token.content;
  const imgTitle = token.attrGet("title") || "";
  // Llamamos a nuestra función
  return renderImageSync({ src: imgSrc, alt: imgAlt, title: imgTitle });
};

// 3.1. Personalizar párrafos con imágenes
markdown.renderer.rules.paragraph_open = function (tokens, idx, options, env, self) {
  const nextToken = tokens[idx + 1];
  if (nextToken && nextToken.type === "inline" && nextToken.children) {
    const hasImage = nextToken.children.some(child => child.type === "image");
    if (hasImage) {
      const imgToken = nextToken.children.find(child => child.type === "image");
      if (imgToken) {
        const imgAttrs = imgToken.attrs || [];
        const pToken = tokens[idx];
        // Mover clases e IDs al <p>
        imgAttrs.forEach(attr => {
          if (attr[0] === "class") {
            pToken.attrPush(["class", attr[1]]);
          }
          if (attr[0] === "id") {
            pToken.attrPush(["id", attr[1]]);
          }
        });
      }
    }
  }
  return self.renderToken(tokens, idx, options);
};

//
// 4. Exportamos la configuración principal Eleventy
//
module.exports = function (eleventyConfig) {

  // 4.1. Asignar la librería Markdown-it
  eleventyConfig.setLibrary("md", markdown);

  // 4.2. Filtro asíncrono para Nunjucks (usando la misma lógica sync)
  eleventyConfig.addNunjucksFilter("responsiveImage", (src, alt="", title="") => {
    return renderImageSync({ src, alt, title });
  });

  //
  // 4.3. Plugins, data, colecciones que ya tenías
  //
  eleventyConfig.addGlobalData("rootURL", "https://markerbranding.netlify.app");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "es",
  });

  // Example: colecciones
  eleventyConfig.addCollection("work_en", (collection) =>
    collection.getFilteredByGlob("./src/en/work/*.md")
  );
  eleventyConfig.addCollection("work_es", (collection) =>
    collection.getFilteredByGlob("./src/es/work/*.md")
  );
  eleventyConfig.addCollection("blog_en", function(collectionBlog) {
    return collectionBlog.getFilteredByGlob("./src/en/blog/*.md");
  });

  eleventyConfig.addCollection("blog_es", function(collectionBlog) {
    return collectionBlog.getFilteredByGlob("./src/es/blog/*.md");
  });

  eleventyConfig.addCollection("destacados", function (collectionApi) {
    return collectionApi.getFilteredByTags("destacado", "es");
  });

  eleventyConfig.addCollection("featured", function (collectionApi) {
    return collectionApi.getFilteredByTags("destacado", "en");
  });

  eleventyConfig.addCollection("branding_es", function (collectionBranding) {
    return collectionBranding.getFilteredByTags("work", "branding", "es");
  });

  eleventyConfig.addCollection("branding_en", function (collectionBranding) {
    return collectionBranding.getFilteredByTags("work", "branding", "en");
  });

  eleventyConfig.addCollection("web_es", function (collectionBranding) {
    return collectionBranding.getFilteredByTags("work", "web", "es");
  });

  eleventyConfig.addCollection("web_en", function (collectionBranding) {
    return collectionBranding.getFilteredByTags("work", "web", "en");
  });

  eleventyConfig.addCollection("marketing_es", function (collectionBranding) {
    return collectionBranding.getFilteredByTags("work", "marketing", "es");
  });

  eleventyConfig.addCollection("marketing_en", function (collectionBranding) {
    return collectionBranding.getFilteredByTags("work", "marketing", "en");
  });

  eleventyConfig.addCollection("team", function(collection) {
    return collection.getFilteredByGlob("./src/en/team/*.md");
  });

  eleventyConfig.addCollection("equipo", function(collection) {
    return collection.getFilteredByGlob("./src/es/team/*.md");
  });


  /*  FaQs  */

  eleventyConfig.addCollection("preguntas_web_es", function (collectionFaQ) {
    return collectionFaQ.getFilteredByTags("faq", "es", "web");
  });

  eleventyConfig.addCollection("faq_web_es", function (collectionFaQ) {
    return collectionFaQ.getFilteredByTags("faq", "marketing", "en");
  });

  

  /* Filter blogs */

  eleventyConfig.addCollection("blog_branding_es", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "branding", "es");
  });

  eleventyConfig.addCollection("blog_branding_en", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "branding", "en");
  });

  eleventyConfig.addCollection("blog_web_es", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "web", "es");
  });

  eleventyConfig.addCollection("blog_web_en", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "web", "en");
  });

  eleventyConfig.addCollection("blog_logo_es", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "logo", "es");
  });

  eleventyConfig.addCollection("blog_logo_en", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "logo", "en");
  });

  eleventyConfig.addCollection("blog_marketing_es", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "marketing", "es");
  });

  eleventyConfig.addCollection("blog_marketing_en", function (collectionBlogBranding) {
    return collectionBlogBranding.getFilteredByTags("blog", "marketing", "en");
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/netlify.toml");

  // Filtro para fechas
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // 4.4. Retorno de configuración
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};