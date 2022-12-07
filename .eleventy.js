const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  const md = markdownIt(markdownItOptions);
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("markdownify", (markdownString) =>
    md.render(markdownString)
  );
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
