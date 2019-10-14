module.exports = {
  siteMetadata: {
    siteUrl: `https://www.coingenius.ai/`,
    title: `Market and sentiment crypto trading analysis | Coingenius`,
    description: `CoinGenius is helping the world trade smarter by providing real time crypto trading market and sentiment analysis.`,
    author: `@CoinGenius`,
    navigation: [
      {
        url: "/market",
        label: "Market",
        disabled: true,
      },
      {
        url: "/",
        label: "Index",
      },
      {
        url: "/sentiment",
        label: "Sentiment",
        disabled: true
      },
      {
        url: "/news",
        label: "News",
      },
      {
        url: "/resources",
        label: "Resources",
        disabled: true
      },
      {
        url: "/community",
        label: "Community",
        disabled: true
      },
      {
        url: "/media",
        label: "Media",
        disabled: true
      },
      {
        url: "/about",
        label: "About us",
      },
      {
        url: "/contact",
        label: "Contact",
      }
    ],
    socials: [
      {
        social: "Facebook",
        url: "https://www.facebook.com/account",
        icon: "facebook-f"
      },
      {
        social: "Twitter",
        url: "https://twitter.com/account",
        icon: "twitter"
      },
      {
        social: "Instagram",
        url: "https://www.instagram.com/account/",
        icon: "instagram"
      },
      {
        social: "Telegram",
        url: "https://t.me/account",
        icon: "telegram-plane"
      },
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/company/codistry/about/",
        icon: "linkedin-in"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "coingenius-dashboard"
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/svg/`
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MX5QHGB",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/svg/logo.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
