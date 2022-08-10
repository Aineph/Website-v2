import * as React from "react"
import { articlesSearch } from "./ArticlesSearch.module.scss"
import PropTypes from "prop-types"
import ArticlesSearchItem from "./ArticlesSearchItem"

const ArticlesSearch = ({ label, name, items, selection }) => {
  return (
    <div className={articlesSearch}>
      <h2>{label}</h2>
      <div>
        {items.map(item => (
          <ArticlesSearchItem
            item={item}
            key={item}
            name={name}
            selected={selection === item}
          />
        ))}
      </div>
    </div>
  )
}

ArticlesSearch.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selection: PropTypes.string,
}

ArticlesSearch.defaultProps = {
  selection: null,
}

export default ArticlesSearch
