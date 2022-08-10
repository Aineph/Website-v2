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
          src={item.image?.localFile?.url}
        />
      ))}
    </div>
  )
}

Clients.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        localFile: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
}

Clients.defaultProps = {}

export default React.memo(Clients)
