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

  eleventyConfig.addCollection("destacados", function (collectionApi) {
    return collectionApi.getFilteredByTags("work", "destacado", "es");
  });

  eleventyConfig.addCollection("featured", function (collectionApi) {
    return collectionApi.getFilteredByTags("work", "destacado", "en");
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

  eleventyConfig.addShortcode('previous', (collections, [tag], {inputPath}) => {
    // Assumes the first tag to be the filter for the post to be "paginated".
    const collec = collections[tag];
  
    for (let i = 0; i <= collec.length; i++) {
      if (collec[i+2] && collec[i+2].data.page.inputPath === inputPath) {
        return `<a href="${ collec[i].data.page.url }">Previous</a>`;
      }
    }
  });
  
  eleventyConfig.addShortcode('next', (collections, [tag], {inputPath}) => {
    // Assumes the first tag to be the filter for the post to be "paginated".
    const collec = collections[tag];
  
    for (let i = 1; i <= collec.length-1; i++) {
      if (collec[i-1] && collec[i-1].data.page.inputPath === inputPath) {
        return `<a href="${ collec[i].data.page.url }">Next</a>`;
      }
    }
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