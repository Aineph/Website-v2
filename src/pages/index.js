import { graphql } from "gatsby"
import Home from "../components/pages/Home"

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
        url
      }
    }
    clients: allStrapiClient {
      nodes {
        image {
          url
        }
        name
      }
    }
    greeting: strapiGreeting(locale: { eq: $language }) {
      content
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
    services: allStrapiService(filter: { locale: { eq: $language } }) {
      nodes {
        name
        description
        image {
          url
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

export default Home
