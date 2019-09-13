/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@images": path.resolve(__dirname, "./src/images"),
        "@svg": path.resolve(__dirname, "./src/svg"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@compositions": path.resolve(__dirname, "./src/compositions"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@utils": path.resolve(__dirname, "./src/utils")
      },
    },
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/news/)) {
    page.matchPath = '/news/*'

    // Update the page.
    createPage(page)
  }
}

