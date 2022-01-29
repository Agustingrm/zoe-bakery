require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Zoe`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Find the best classic french patisserie in our stores",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vy23dntu",
        dataset: "production",
        // In production updates gatsby when changes are made to sanity
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Dongle\:300,400`, `PT Serif Caption\:400`],
        display: "swap",
      },
    },
  ],
};
