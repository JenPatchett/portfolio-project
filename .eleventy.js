module.exports = function (eleventyConfig) {

  // Tells 11ty to pass css, favicons & images to final build:
  eleventyConfig.addPassthroughCopy("./src/styles.css");

  // Tells 11ty dev server to watch css dir & reload site if files change:
  eleventyConfig.addWatchTarget("./src/css/");

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