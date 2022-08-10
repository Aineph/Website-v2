import { graphql } from "gatsby"
import GearsPage from "../components/pages/GearsPage"

export const query = graphql`
  query ($language: String!) {
    background: strapiBackground {
      gears {
        localFile {
          url
        }
      }
    }
    content: strapiPage(locale: { eq: $language }) {
      gears {
        data {
          gears
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default GearsPage
