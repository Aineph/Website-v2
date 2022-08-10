import { graphql } from "gatsby"
import IndexPage from "../components/pages/IndexPage"

export const query = graphql`
  query ($language: String!) {
    actions: allStrapiAction(filter: { locale: { eq: $language } }) {
      nodes {
        link
        name
      }
    }
    background: strapiBackground {
      home {
        localFile {
          url
        }
      }
    }
    clients: allStrapiClient {
      nodes {
        image {
          localFile {
            url
          }
        }
        name
      }
    }
    greeting: strapiContent(locale: { eq: $language }) {
      greeting
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
    projects: allStrapiProject(filter: { locale: { eq: $language } }) {
      nodes {
        image {
          localFile {
            url
          }
        }
        description
        name
        link
        type
        year
      }
    }
    services: allStrapiService(filter: { locale: { eq: $language } }) {
      nodes {
        name
        description
        image {
          localFile {
            url
          }
        }
      }
    }
    skills: strapiSkill(locale: { eq: $language }) {
      tech {
        internal {
          content
        }
      }
      music {
        internal {
          content
        }
      }
    }
  }
`

export default IndexPage
