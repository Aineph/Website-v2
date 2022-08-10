import { graphql } from "gatsby"
import AlbumsPage from "../../components/pages/BlogPage/AlbumsPage"

export const query = graphql`
  query ($language: String!) {
    albums: allStrapiAlbum {
      nodes {
        cover {
          localFile {
            url
          }
          name
        }
        name
        slug
        songs {
          duration
          performer
          title
        }
      }
    }
    background: strapiBackground {
      albums {
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
  }
`

export default AlbumsPage
