import { useStaticQuery, graphql } from "gatsby"

// TODO: Remove "disabled" & "active" when all pages are completed
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            navigation {
              url
              label
              disabled
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
