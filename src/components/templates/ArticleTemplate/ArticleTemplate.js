import * as React from "react"
import {
  articleTemplateFooter,
  articleTemplateFooterLink,
  articleTemplateFooterNavigation,
  articleTemplateFooterSection,
} from "./ArticleTemplate.module.scss"
import PropTypes from "prop-types"
import PageLayout from "../../layouts/Layout/PageLayout"
import { useEffect, useMemo } from "react"
import hljs from "highlight.js"
import "highlight.js/styles/tokyo-night-dark.css"
import { Link, Trans } from "gatsby-plugin-react-i18next"

const ArticleTemplate = ({ data, pageContext }) => {
  const crumbs = pageContext.breadcrumb?.crumbs

  const tagsList = useMemo(
    () => JSON.parse(data.article?.tags?.internal?.content),
    [data.article]
  )

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <PageLayout
      author={data.article?.author?.firstname}
      background={data.article?.background || data.background?.articles}
      crumbs={crumbs}
      date={data.article?.createdAt}
      title={data.article?.title}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: data.article?.content?.data?.content,
        }}
      />
      <div className={articleTemplateFooter}>
        <div className={articleTemplateFooterSection}>
          <i className={"bi bi-folder me-1"} />
          {data.article?.categories.map(category => (
            <Link
              className={articleTemplateFooterLink}
              key={category.name}
              state={{ category: category.name }}
              to={`/blog/articles`}
            >
              {category.name}
            </Link>
          ))}
        </div>
        <div className={articleTemplateFooterSection}>
          <i className={"bi bi-tag me-1"} />
          {tagsList.map(tag => (
            <Link
              className={articleTemplateFooterLink}
              key={tag}
              state={{ tag: tag }}
              to={`/blog/articles`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className={articleTemplateFooterNavigation}>
          <Link
            className={articleTemplateFooterLink}
            to={`/blog/articles/${data.previous?.slug}`}
          >
            {data.previous ? (
              <>
                <i className={"bi bi-caret-left"} />
                <Trans>previous article</Trans>
              </>
            ) : null}
          </Link>
          <Link
            className={articleTemplateFooterLink}
            to={`/blog/articles/${data.next?.slug}`}
          >
            {data.next ? (
              <>
                <Trans>next article</Trans>
                <i className={"bi bi-caret-right"} />
              </>
            ) : null}
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.shape({
      author: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
      }).isRequired,
      background: PropTypes.object,
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      content: PropTypes.shape({
        data: PropTypes.shape({
          content: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      tags: PropTypes.shape({
        internal: PropTypes.shape({
          content: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
    background: PropTypes.shape({
      articles: PropTypes.object.isRequired,
    }).isRequired,
  }),
  pageContext: PropTypes.object.isRequired,
}

ArticleTemplate.defaultProps = {
  data: {
    background: {
      localFile: {
        url: "",
      },
    },
  },
}

export default React.memo(ArticleTemplate)
