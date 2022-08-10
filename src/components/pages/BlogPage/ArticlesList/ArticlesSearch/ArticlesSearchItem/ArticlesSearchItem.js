import * as React from "react"
import {
  articlesSearchItem,
  articlesSearchItemSelected,
} from "./ArticlesSearchItem.module.scss"
import PropTypes from "prop-types"
import { Link } from "gatsby-plugin-react-i18next"

const ArticlesSearchItem = ({ name, item, selected }) => {
  return (
    <Link
      className={selected ? articlesSearchItemSelected : articlesSearchItem}
      state={{
        [name]: selected ? null : item,
      }}
      to={"/blog/articles"}
    >
      {item}
    </Link>
  )
}

ArticlesSearchItem.propTypes = {
  item: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

ArticlesSearchItem.defaultProps = {
  selected: false,
}

export default ArticlesSearchItem
