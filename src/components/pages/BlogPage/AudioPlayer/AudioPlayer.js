import * as React from "react"
import {
  audioPlayer,
  audioPlayerMedia,
  audioPlayerTracks,
} from "./AudioPlayer.module.scss"
import MediaElement from "../../../MediaElement/MediaElement"
import PropTypes from "prop-types"
import AudioTrack from "./AudioTrack"
import { useCallback, useMemo, useRef, useState } from "react"

const AudioPlayer = ({ autoplay, items, startTrack }) => {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(startTrack)

  const playerRef = useRef(null)

  const onSelectedSongChange = useCallback(
    position => {
      setSelectedTrackIndex(position - 1)
      if (playerRef.current) {
        playerRef.current.setSrc(items[position - 1].audio?.localFile?.url)
        playerRef.current.play()
      }
    },
    [items, playerRef, setSelectedTrackIndex]
  )
  const onTrackChange = useCallback(
    trackIndex => {
      setSelectedTrackIndex(trackIndex)
    },
    [setSelectedTrackIndex]
  )

  const tracks = useMemo(
    () => items.map(item => item.audio?.localFile?.url),
    [items]
  )

  return (
    <div className={audioPlayer}>
      <div className={audioPlayerMedia}>
        <MediaElement
          autoplay={autoplay}
          onTrackChange={onTrackChange}
          playerRef={playerRef}
          startTrack={startTrack}
          tracks={tracks}
        />
      </div>
      <div className={audioPlayerTracks}>
        {items.map((track, trackPosition) => (
          <AudioTrack
            item={track}
            itemPosition={trackPosition + 1}
            key={track.title}
            onSelect={onSelectedSongChange}
            selected={selectedTrackIndex === trackPosition}
          />
        ))}
      </div>
    </div>
  )
}

AudioPlayer.propTypes = {
  autoplay: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      audio: PropTypes.shape({
        localFile: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }),
      title: PropTypes.string.isRequired,
    })
  ),
  startTrack: PropTypes.number,
}

AudioPlayer.defaultProps = {
  autoplay: false,
  startTrack: 0,
}

export default React.memo(AudioPlayer)
