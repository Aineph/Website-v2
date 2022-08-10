import { graphql } from "gatsby"
import AboutMePage from "../components/pages/AboutMePage"

export const query = graphql`
  query ($language: String!) {
    background: strapiBackground {
      about {
        localFile {
          url
        }
      }
    }
    content: strapiPage(locale: { eq: $language }) {
      about {
        data {
          about
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

export default AboutMePage
