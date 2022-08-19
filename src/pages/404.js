import { graphql } from "gatsby"
import NotFoundPage from "../components/pages/NotFoundPage"

export const query = graphql`
  query ($language: String!) {
    background: strapiBackground {
      notfound {
        localFile {
          url
        }
      }
    }
    content: strapiPage(locale: { eq: $language }) {
      notfound {
        data {
          notfound
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

export default NotFoundPage
