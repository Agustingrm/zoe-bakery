module.exports = {
  siteMetadata: {
    title: `Zoe`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Find the best classic french patisserie in our stores",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-sanity",
    //   options: {
    //     projectId: "",
    //     dataset: "",
    //     watchMode: true,
    //   },
    // },
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
  ],
};
