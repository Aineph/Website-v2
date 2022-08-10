import * as React from "react"
import {
  articlesList,
  articlesSearch,
  articlesSection,
} from "./ArticlesList.module.scss"
import PropTypes from "prop-types"
import Article from "./Article"
import { useTranslation } from "gatsby-plugin-react-i18next"
import ArticlesSearch from "./ArticlesSearch"
import { useMemo } from "react"

const ArticlesList = ({
  items,
  itemCategories,
  itemTags,
  itemUsers,
  selectedUser,
  selectedCategory,
  selectedTag,
}) => {
  const { t } = useTranslation()

  const processedCategories = useMemo(
    () => itemCategories.map(category => category.name),
    [itemCategories]
  )

  const processedTags = useMemo(
    () =>
      itemTags
        .reduce(
          (acc, item) => [...acc, ...JSON.parse(item.tags.internal.content)],
          []
        )
        .filter((value, index, self) => self.indexOf(value) === index),
    [itemTags]
  )

  const processedUsers = useMemo(
    () => itemUsers.map(user => user.firstname),
    [itemUsers]
  )

  return (
    <div className={articlesSection}>
      <div className={articlesList}>
        {items.map(item => (
          <Article item={item} key={item.title} />
        ))}
      </div>
      <div className={articlesSearch}>
        <ArticlesSearch
          label={t("author")}
          name={"author"}
          items={processedUsers}
          selection={selectedUser}
        />
        <ArticlesSearch
          label={t("categories")}
          name={"category"}
          items={processedCategories}
          selection={selectedCategory}
        />
        <ArticlesSearch
          label={t("tags")}
          name={"tag"}
          items={processedTags}
          selection={selectedTag}
        />
      </div>
    </div>
  )
}

ArticlesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  itemCategories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  itemTags: PropTypes.arrayOf(
    PropTypes.shape({
      tags: PropTypes.shape({
        internal: PropTypes.shape({
          content: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
  itemUsers: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedCategory: PropTypes.string,
}

ArticlesList.defaultProps = {
  selectedCategory: null,
}

export default React.memo(ArticlesList)
