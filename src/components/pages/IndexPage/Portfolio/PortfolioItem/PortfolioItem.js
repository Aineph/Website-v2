import * as React from "react"
import {
  portfolioItem,
  portfolioItemDivider,
  portfolioItemText,
  portfolioItemTitle,
  portfolioItemType,
} from "./PortfolioItem.module.scss"
import PropTypes from "prop-types"
import { Trans } from "react-i18next"
import { useCallback, useState } from "react"
import { Collapse } from "react-bootstrap"

const PortfolioItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onProjectEnter = useCallback(() => setIsOpen(true), [setIsOpen])
  const onProjectLeave = useCallback(() => setIsOpen(false), [setIsOpen])

  return (
    <a
      className={portfolioItem}
      href={item.link}
      onMouseEnter={onProjectEnter}
      onMouseLeave={onProjectLeave}
      style={{
        backgroundImage: `url(${item.image?.localFile?.url})`,
      }}
    >
      <h3 className={portfolioItemTitle}>{item.name}</h3>
      <h4 className={portfolioItemType}>
        <Trans>{item.type}</Trans>
      </h4>
      <hr className={portfolioItemDivider} />
      <h5 className={portfolioItemText}>{item.year}</h5>
      <Collapse in={isOpen}>
        <p className={portfolioItemText}>{item.description}</p>
      </Collapse>
    </a>
  )
}

PortfolioItem.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
      localFile: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
}

PortfolioItem.defaultProps = {}

export default React.memo(PortfolioItem)
