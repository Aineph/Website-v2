require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "action",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "blog",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "client",
    },
    {
      singularName: "service",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "social-media",
    },
  ],
  singleTypes: [
    {
      singularName: "about",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "background",
    },
    {
      singularName: "gear",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "greeting",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "skill",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Nicolas FEZ`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@aineph`,
    siteUrl: `https://www.nicolasfez.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://localhost:8000/`,
        // you can pass any i18next options
        i18nextOptions: {
          defaultNS: "translations",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: "Home",
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
      },
    },
  ],
}
