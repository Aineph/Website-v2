import { graphql } from "gatsby"
import BlogPage from "../components/pages/BlogPage"

export const query = graphql`
  query ($language: String!) {
    articles: allStrapiArticle(
      filter: { locale: { eq: $language } }
      limit: 5
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        author {
          firstname
        }
        background {
          localFile {
            url
          }
          name
        }
        categories {
          name
        }
        createdAt
        tags {
          internal {
            content
          }
        }
        title
        excerpt
        slug
      }
    }
    background: strapiBackground {
      blog {
        localFile {
          url
        }
      }
    }
    categories: allStrapiCategory(filter: { locale: { eq: $language } }) {
      nodes {
        name
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
    songs: allStrapiSong(limit: 5, sort: { fields: createdAt, order: DESC }) {
      nodes {
        audio {
          localFile {
            url
          }
        }
        duration
        performer
        title
      }
    }
    tags: allStrapiArticle(filter: { locale: { eq: $language } }) {
      nodes {
        tags {
          internal {
            content
          }
        }
      }
    }
    users: allStrapiUser {
      nodes {
        firstname
      }
    }
  }
`

export default BlogPage
