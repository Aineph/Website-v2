import * as React from "react"
import { portfolio } from "./Portfolio.module.scss"
import PropTypes from "prop-types"
import Project from "./PortfolioItem"
import { useMemo } from "react"

const Portfolio = ({ items }) => {
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.year - b.year),
    [items]
  )
  return (
    <div className={portfolio}>
      {sortedItems.map(item => (
        <Project item={item} key={item.name} />
      ))}
    </div>
  )
}

Portfolio.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

Portfolio.defaultProps = {}

export default React.memo(Portfolio)
