import { graphql } from "gatsby"
import Gears from "../components/pages/Gears"

export const query = graphql`
  query ($language: String!) {
    background: strapiBackground {
      gears {
        url
      }
    }
    gears: strapiGear(locale: { eq: $language }) {
      childStrapiGearContentTextnode {
        childMarkdownRemark {
          html
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

export default Gears
