let markdown = require("markdown-it")({
  html: true,
});

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addNunjucksShortcode(
    "markdown",
    (content) =>
      `<div class="formatAboutText">${markdown.render(content)}</div>`
  );

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
