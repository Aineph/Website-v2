import { graphql } from "gatsby"
import AboutMe from "../components/pages/AboutMe"

export const query = graphql`
  query ($language: String!) {
    about: strapiAbout(locale: { eq: $language }) {
      childStrapiAboutContentTextnode {
        childMarkdownRemark {
          html
        }
      }
    }
    background: strapiBackground {
      about {
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

export default AboutMe
