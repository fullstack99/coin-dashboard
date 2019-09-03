module.exports = {
  siteMetadata: {
    title: `Market and sentiment crypto trading analysis | Coingenius`,
    description: `CoinGenius is helping the world trade smarter by providing real time crypto trading market and sentiment analysis.`,
    author: `@CoinGenius`,
    navigation: [
      {
        url: "#",
        label: "Market",
        disabled: true,
        active: true
      },
      {
        url: "/",
        label: "Index",
        disabled: true
      },
      {
        url: "#",
        label: "Sentiment",
        disabled: true
      },
      {
        url: "#",
        label: "News",
        disabled: true
      },
      {
        url: "/",
        label: "Resources",
        disabled: true
      },
      {
        url: "#",
        label: "Community",
        disabled: true
      },
      {
        url: "#",
        label: "Media",
        disabled: true
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
    `gatsby-plugin-react-helmet`,
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
          include: `${__dirname}/src/images/`
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
        icon: `src/images/logo.svg` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
