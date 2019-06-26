import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            navigation {
              url
              label
            }
            socials {
              social
              url
              icon
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}
