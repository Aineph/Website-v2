import * as React from "react"
import { client, clients } from "./Clients.module.scss"
import PropTypes from "prop-types"

const Clients = ({ items }) => {
  return (
    <div className={clients}>
      {items.map(item => (
        <img
          alt={item.name}
          className={client}
          key={item.name}
          src={`${process.env.STRAPI_API_URL}${item.image.url}`}
        />
      ))}
    </div>
  )
}

Clients.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
      name: PropTypes.string,
    })
  ),
}

Clients.defaultProps = {}

export default React.memo(Clients)
