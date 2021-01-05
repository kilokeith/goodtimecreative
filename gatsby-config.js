module.exports = {
  siteMetadata: {
    title: `Good Time Creative`,
    description: `Good Time Creative is a design and trade show agency from CEO Marissa Hohner.`,
    keywords: ``,
    author: `@kilokeith`,
    social: {
      linkedIn: 'https://www.linkedin.com/company/goodtimecreative',
      twitter: 'https://twitter.com/goodtimecreative',
      angelList: 'https://angel.co/fgoodtimecreative',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
