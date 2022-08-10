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
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    notfound: strapiPage(locale: { eq: $language }) {
      notfound {
        data {
          notfound
        }
      }
    }
  }
`

export default NotFoundPage
