import * as React from "react"
import { blogRedirection, blogSection } from "./Blog.module.scss"
import PageLayout from "../../layouts/Layout/PageLayout"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { Trans } from "react-i18next"
import PropTypes from "prop-types"
import ArticlesList from "./ArticlesList"
import AudioPlayer from "./AudioPlayer"

const BlogPage = ({ data, pageContext }) => {
  const crumbs = pageContext?.breadcrumb?.crumbs

  const { t } = useTranslation()

  return (
    <PageLayout
      background={data.background?.blog}
      crumbs={crumbs}
      title={t("blog")}
    >
      {/* New Releases */}
      <section className={blogSection}>
        <div className={"section__heading"}>
          <h2 className={"section__title"}>
            <Trans>new releases</Trans>
          </h2>
        </div>
        <div className={"section__content"}>
          <Link className={blogRedirection} to={"/blog/albums"}>
            <Trans>see more</Trans>
            <i className={"bi bi-box-arrow-up-right ms-1"} />
          </Link>
          <AudioPlayer items={data.songs?.nodes} />
        </div>
      </section>

      {/* News */}
      <section className={blogSection}>
        <div className={"section__heading"}>
          <h2 className={"section__title"}>
            <Trans>news</Trans>
          </h2>
        </div>
        <div className={"section__content"}>
          <Link className={blogRedirection} to={"/blog/articles"}>
            <Trans>see more</Trans>
            <i className={"bi bi-box-arrow-up-right ms-1"} />
          </Link>
          <ArticlesList
            items={data.articles?.nodes}
            itemCategories={data.categories?.nodes}
            itemTags={data.tags?.nodes}
            itemUsers={data.users?.nodes}
          />
        </div>
      </section>
    </PageLayout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    background: PropTypes.shape({
      blog: PropTypes.object.isRequired,
    }).isRequired,
    categories: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    songs: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    tags: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    users: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

BlogPage.defaultProps = {}

export default React.memo(BlogPage)
