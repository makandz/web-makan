const PostCSSPlugin = require('eleventy-plugin-postcss');
const directoryOutputPlugin = require('@11ty/eleventy-plugin-directory-output');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(PostCSSPlugin);
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(directoryOutputPlugin);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
