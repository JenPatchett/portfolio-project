// Restart server after adding changes to this file to take effect.

// Import Image plugin (after running npm install @11ty/eleventy-img) to optimise images:
const EleventyImage = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await EleventyImage(`./src${src}`, {
    widths: [300, 800, null],
    formats: ["avif", "jpeg", "jpg", "png"],
    urlPath: "/images/",
    outputDir: "./_site/images/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return EleventyImage.generateHTML(metadata, imageAttributes);
}


module.exports = function (eleventyConfig) {

  // Tells 11ty to pass css and images to final build:
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/images/");

  // Tells 11ty dev server to watch css dir & reload site if files change:
  eleventyConfig.addWatchTarget("./src/");

  // Add shortcode to get current year for footer:
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add shortcode for optimising images and page load time:
  eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};