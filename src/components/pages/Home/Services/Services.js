import * as React from "react"
import { services } from "./Services.module.scss"
import PropTypes from "prop-types"
import ServiceCard from "./ServiceCard"

const Services = ({ items }) => {
  return (
    <div className={services}>
      {items.map(item => (
        <ServiceCard key={item.name} item={item} />
      ))}
    </div>
  )
}

Services.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
}

Services.defaultProps = {}

export default React.memo(Services)
