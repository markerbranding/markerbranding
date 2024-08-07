const { DateTime } = require("luxon");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { EleventyI18nPlugin } = require("@11ty/eleventy");

const Image = require('@11ty/eleventy-img')
const markdown = require('markdown-it')()

markdown.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx]
  let imgSrc = token.attrGet('src')
  const imgAlt = token.content
  const imgTitle = token.attrGet('title')

  const htmlOpts = { alt: imgAlt, loading: 'lazy', decoding: 'async' }

  if (imgSrc.startsWith('/assets')) {
    imgSrc = 'src' + imgSrc
  }

  const parsed = (imgTitle || '').match(
    /^(?<skip>@skip(?:\[(?<width>\d+)x(?<height>\d+)\])? ?)?(?:\?\[(?<sizes>.*?)\] ?)?(?<caption>.*)/
  ).groups

  if (parsed.skip || imgSrc.startsWith('http')) {
    const options = { ...htmlOpts }
    if (parsed.sizes) {
      options.sizes = parsed.sizes
    }

    const metadata = { jpeg: [{ url: imgSrc }] }
    if (parsed.width && parsed.height) {
      metadata.jpeg[0].width = parsed.width
      metadata.jpeg[0].height = parsed.height
    }

    const generated = Image.generateHTML(metadata, options)

    if (parsed.caption) {
      return figure(generated, parsed.caption)
    }
    return generated
  }

  const widths = [450, 780, 962, 1400, 1920]
  const imgOpts = {
    widths: widths
    //.concat(widths.map((w) => w * 2)) // generate 2x sizes
    .filter((v, i, s) => s.indexOf(v) === i), // dedupe
    formats: ['webp', 'jpeg'], // TODO: add avif when support is good enough
    urlPath: '/assets/img/',
    outputDir: './public/assets/img/'
  }

  Image(imgSrc, imgOpts)

  const metadata = Image.statsSync(imgSrc, imgOpts)

  const generated = Image.generateHTML(metadata, {
    sizes: parsed.sizes || '(max-width: 1920px) 100vw, 1920px',
    ...htmlOpts
  })

  if (parsed.caption) {
    return figure(generated, parsed.caption)
  }
  return generated
}

module.exports = function (eleventyConfig) {

  /*  Global URLs social */
  eleventyConfig.addGlobalData("rootURL", "https://markerbranding.netlify.app");


  /*  Language  */
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "es", // Required, this site uses "en"
	});

  /*  eleventy html */
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  /*  eleventy image */
  eleventyConfig.setLibrary('md', markdown)

  
  /*  collection.locale */
  eleventyConfig.addCollection("work_en", function(collection) {
    return collection.getFilteredByGlob("./src/en/work/*.md");
  });

  eleventyConfig.addCollection("work_es", function(collection) {
    return collection.getFilteredByGlob("./src/es/work/*.md");
  });

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
    return collectionBranding.getFilteredByTags("branding", "es");
  });

  eleventyConfig.addCollection("branding_en", function (collectionBranding) {
    return collectionBranding.getFilteredByTags("branding", "en");
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

  /*  Cierre eleventy image */
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/netlify.toml');
  
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };

};