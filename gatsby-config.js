/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Quiz Baianês`,
    siteUrl: `https://quizbaianes.com.br`,
    description: `Descubra o quanto de baianes você consegue falar com o nosso quiz`,
    author: `héber leonard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#3abbc4`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-160703828-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Quiz Baianes`,
        short_name: `Quiz Baianes`,
        start_url: `/`,
        background_color: `#3abbc4`,
        theme_color: `#3abbc4`,
        display: `standalone`,
        icon: `src/images/icon.png`, //512x512
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://quizbaianes.com.br`,
      },
    },

    `gatsby-plugin-offline`,
  ],
}
