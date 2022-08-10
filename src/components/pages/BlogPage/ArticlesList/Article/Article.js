import * as React from "react"
import {
  article,
  articleAuthor,
  articleCategories,
  articleCategory,
  articleContent,
  articleCreation,
  articleDate,
  articleImage,
  articleText,
  articleTextAlt,
  articleTitle,
} from "./Article.module.scss"
import PropTypes from "prop-types"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { useMemo } from "react"

const Article = ({ item }) => {
  const { language } = useI18next()
  const formattedDate = useMemo(
    () => new Date(item.createdAt).toLocaleDateString(language),
    [item.createdAt, language]
  )

  return (
    <div className={article}>
      <Link className={articleTitle} to={`/blog/articles/${item.slug}`}>
        {item.title}
      </Link>
      <div className={articleCreation}>
        <Link
          className={articleAuthor}
          state={{
            author: item.author?.firstname,
          }}
          to={"/blog/articles"}
        >
          <i className={"bi bi-person me-1"} />
          {item.author?.firstname}
        </Link>
        <span className={articleDate}>
          <i className={"bi bi-calendar me-1"} />
          {formattedDate}
        </span>
      </div>
      <div className={articleCategories}>
        {item.categories
          .map(category => (
            <Link
              className={articleCategory}
              state={{
                category: category.name,
              }}
              to={"/blog/articles"}
            >
              {category.name}
            </Link>
          ))
          .reduce((acc, category) => [
            acc,
            <span className={articleTextAlt}>, </span>,
            category,
          ])}
      </div>
      <Link className={articleContent} to={`/blog/articles/${item.slug}`}>
        {item.background !== null && item.background !== undefined ? (
          <img
            alt={item.background?.name}
            className={articleImage}
            src={item.background?.localFile?.url}
          />
        ) : null}
        <p className={articleText}>{item.excerpt}</p>
      </Link>
    </div>
  )
}

Article.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
    }).isRequired,
    background: PropTypes.shape({
      localFile: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }),
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    createdAt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

Article.defaultProps = {}

export default React.memo(Article)
