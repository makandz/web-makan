const PostCSSPlugin = require('eleventy-plugin-postcss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(PostCSSPlugin);
  eleventyConfig.addPassthroughCopy('src/assets/img');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
