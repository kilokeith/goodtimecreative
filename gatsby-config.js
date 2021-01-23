const env = process.env.NODE_ENV || 'development';
require('dotenv').config({
  path: `.env.${env}`,
});
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: `Good Time Creative`,
    description: `Good Time Creative is a design and trade show agency from CEO Marissa Hohner.`,
    keywords: ``,
    author: `@kilokeith`,
    siteUrl: process.env.SITE_URL,
    contactEmail: 'info@goodtimecreative.com',
    contactAddress: `67 E Madison St. STE 1603A 1041\n
      Chicago, IL 60603
    `,
    social: {
      instagram: 'https://www.instagram.com/goodtimecreativeco/',
      facebook: 'https://www.facebook.com/GoodTimeCreativeCo/',
      twitter: 'https://twitter.com/goodtmcreative',
      linkedIn: 'https://www.linkedin.com/company/good-time-creative',
      pinterest: 'https://www.pinterest.com/goodtimecreative_co/',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@images': 'src/images',
          '@pages': 'src/pages',
          '@hooks': 'src/hooks',
          '@styles': 'src/styles',
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: true }, { cleanupIDs: true }],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e7292a`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo-round-face-red.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
};
