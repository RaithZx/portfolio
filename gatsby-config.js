module.exports = {
  siteMetadata: {
    title: "Yuri's Portfolio",
    author: "Yuri Leandro",
    description: "Yuri's personal portfolio site",
    siteUrl: "https://www.yurileandro.dev",
    image: "/images/profile.jpeg",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/profile.jpeg",
      },
    },
    "gatsby-transformer-sharp", // Needed for dynamic images
    // "gatsby-plugin-anchor-links",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
        duration: 1000,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-197473707-1",
      },
    },
  ],
};
