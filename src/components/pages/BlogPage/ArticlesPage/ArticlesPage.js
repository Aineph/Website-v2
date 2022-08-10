import * as React from "react"
import PageLayout from "../../../layouts/Layout/PageLayout"
import PropTypes from "prop-types"
import ArticlesList from "../ArticlesList/ArticlesList"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { useMemo } from "react"

const ArticlesPage = ({ data, location, pageContext }) => {
  const crumbs = pageContext?.breadcrumb?.crumbs

  const { t } = useTranslation()

  const filteredArticles = useMemo(
    () =>
      data.articles?.nodes?.filter(
        article =>
          article.categories?.some(
            category =>
              location.state?.category === null ||
              location.state?.category === undefined ||
              location.state?.category === category.name
          ) &&
          (location.state?.author === null ||
            location.state?.author === undefined ||
            location.state?.author === article.author?.firstname) &&
          (location.state?.tag === null ||
            location.state?.tag === undefined ||
            JSON.parse(article.tags?.internal?.content).includes(
              location.state?.tag
            ))
      ),
    [data.articles, location.state]
  )

  return (
    <PageLayout
      background={data.background?.articles}
      crumbs={crumbs}
      title={t("articles")}
    >
      <section>
        <div className={"section__content"}>
          <ArticlesList
            items={filteredArticles}
            itemCategories={data.categories?.nodes}
            itemTags={data.tags?.nodes}
            itemUsers={data.users?.nodes}
            selectedCategory={location.state?.category}
            selectedTag={location.state?.tag}
            selectedUser={location.state?.author}
          />
        </div>
      </section>
    </PageLayout>
  )
}

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          categories: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
            }).isRequired
          ).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    background: PropTypes.shape({
      articles: PropTypes.object.isRequired,
    }).isRequired,
    categories: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    users: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

ArticlesPage.defaultProps = {}

export default React.memo(ArticlesPage)
