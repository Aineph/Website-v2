import { graphql } from "gatsby"
import AlbumTemplate from "../components/templates/AlbumTemplate"

export const query = graphql`
  query ($language: String!, $slug: String!) {
    album: strapiAlbum(slug: { eq: $slug }) {
      cover {
        localFile {
          url
        }
        name
      }
      name
      slug
      songs {
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
    background: strapiBackground {
      albums {
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
  }
`

export default AlbumTemplate
