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
      singularName: "album",
    },
    {
      singularName: "article",
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
      singularName: "project",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
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
    {
      singularName: "song",
    },
  ],
  singleTypes: [
    {
      singularName: "background",
    },
    {
      singularName: "content",
      pluginOptions: {
        i18n: {
          locale: "all",
        },
      },
    },
    {
      singularName: "page",
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
    siteUrl: `https://www.nicolasfez.com`,
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          origin: "https://www.nicolasfez.com",
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        siteUrl: `https://www.nicolasfez.com`,
        i18nextOptions: {
          defaultNS: "translations",
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicolas FEZ`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/nf-icon-square.png`,
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
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
