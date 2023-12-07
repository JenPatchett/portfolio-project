// Restart server after adding changes to this file to take effect.

module.exports = function (eleventyConfig) {

  // Tells 11ty to pass css and images to final build:
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/images/");

  // Tells 11ty dev server to watch css dir & reload site if files change:
  eleventyConfig.addWatchTarget("./src/css/");

  // Add shortcode to get current year for footer:
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

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