import { graphql } from "gatsby"
import ArticleTemplate from "../components/templates/ArticleTemplate"

export const query = graphql`
  query (
    $language: String!
    $next: String!
    $previous: String!
    $slug: String!
  ) {
    article: strapiArticle(locale: { eq: $language }, slug: { eq: $slug }) {
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
      content {
        data {
          content
        }
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
    background: strapiBackground {
      articles {
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
    next: strapiArticle(locale: { eq: $language }, slug: { eq: $next }) {
      slug
      title
    }
    previous: strapiArticle(
      locale: { eq: $language }
      slug: { eq: $previous }
    ) {
      slug
      title
    }
  }
`

export default ArticleTemplate
