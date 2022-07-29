import { graphql } from "gatsby"
import Blog from "../components/pages/Blog"

export const query = graphql`
  query ($language: String!) {
    background: strapiBackground {
      blog {
        url
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

export default Blog
