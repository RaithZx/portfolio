module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    // "gatsby-plugin-anchor-links",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
        duration: 1000,
      },
    },
  ],
};
