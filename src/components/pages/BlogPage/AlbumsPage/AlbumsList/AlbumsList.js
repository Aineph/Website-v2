import * as React from "react"
import { albumsList } from "./AlbumsList.module.scss"
import PropTypes from "prop-types"
import Album from "./Album"

const AlbumsList = ({ items }) => {
  return (
    <div className={albumsList}>
      {items.map(item => (
        <Album item={item} key={item.name} />
      ))}
    </div>
  )
}

AlbumsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
}

AlbumsList.defaultProps = {}

export default AlbumsList
