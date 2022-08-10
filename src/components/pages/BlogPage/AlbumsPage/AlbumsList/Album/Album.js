import * as React from "react"
import {
  album,
  albumContent,
  albumImage,
  albumTrack,
  albumTrackDetails,
  albumTrackDuration,
  albumTrackPerformer,
  albumTrackTitle,
  albumTracks,
  albumTitle,
} from "./Album.module.scss"
import PropTypes from "prop-types"
import { Link } from "gatsby-plugin-react-i18next"

const Album = ({ item }) => {
  return (
    <div className={album}>
      <Link className={albumTitle} to={`/blog/albums/${item.slug}`}>
        {item.name}
      </Link>
      <div className={albumContent}>
        <Link className={albumImage} to={`/blog/albums/${item.slug}`}>
          <img
            alt={item.cover?.localFile?.name}
            src={item.cover?.localFile?.url}
          />
        </Link>
        <div className={albumTracks}>
          {item.songs.map((song, songIndex) => (
            <Link
              className={albumTrack}
              key={song.title}
              state={{
                trackIndex: songIndex,
              }}
              to={`/blog/albums/${item.slug}`}
            >
              <div className={albumTrackDetails}>
                <span className={albumTrackTitle}>{`${songIndex + 1}. "${
                  song.title
                }"`}</span>
                <span
                  className={albumTrackPerformer}
                >{`— ${song.performer}`}</span>
              </div>
              <div className={albumTrackDuration}>
                <span>{song.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

Album.propTypes = {
  item: PropTypes.shape({
    cover: PropTypes.shape({
      localFile: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        duration: PropTypes.string.isRequired,
        performer: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  }),
}

Album.defaultProps = {}

export default Album
