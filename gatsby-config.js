module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    navigation: [
      {
        url: "/market",
        label: "Market",
      },
      {
        url: "/",
        label: "Index",
      },
      {
        url: "/sentiment",
        label: "Sentiment",
      },
      {
        url: "/news",
        label: "News",
      },
    ],
    socials: [
      {
        social: "Facebook",
        url: "https://www.facebook.com/gocodistry",
        icon: "facebook-f",
      },
      {
        social: "Twitter",
        url: "https://twitter.com/gocodistry",
        icon: "twitter",
      },
      {
        social: "Instagram",
        url: "https://www.instagram.com/gocodistry/",
        icon: "instagram",
      },
      {
        social: "Telegram",
        url: "https://t.me/codistry",
        icon: "telegram-plane",
      },
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/company/codistry/about/",
        icon: "linkedin-in",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/`,
        },
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
