const articleTemplate = require.resolve("./src/templates/article-template")
const albumTemplate = require.resolve("./src/templates/album-template")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const albumsQuery = await graphql(`
    query {
      allStrapiAlbum {
        nodes {
          slug
        }
      }
    }
  `)
  const articlesQuery = await graphql(`
    query {
      allStrapiArticle(filter: { locale: { eq: "en" } }) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  if (articlesQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading dynamic pages`,
      articlesQuery.errors
    )
    return
  }
  const albums = albumsQuery.data.allStrapiAlbum.nodes
  albums.forEach(album => {
    createPage({
      component: albumTemplate,
      context: {
        slug: album.slug,
      },
      defer: true,
      path: `/blog/albums/${album.slug}`,
    })
  })
  const articles = articlesQuery.data.allStrapiArticle.nodes
  articles.forEach((article, articleIndex) => {
    createPage({
      component: articleTemplate,
      context: {
        slug: article.slug,
        previous: articleIndex === 0 ? "" : articles[articleIndex - 1].slug,
        next:
          articleIndex === articles.length - 1
            ? ""
            : articles[articleIndex + 1].slug,
      },
      defer: true,
      path: `/blog/articles/${article.slug}`,
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mediaelement/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
