import { graphql } from "gatsby"
import ArticlesPage from "../../components/pages/BlogPage/ArticlesPage"

export const query = graphql`
  query ($language: String!) {
    articles: allStrapiArticle(
      filter: { locale: { eq: $language } }
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
      articles {
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

export default ArticlesPage
