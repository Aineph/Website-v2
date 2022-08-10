import React, { useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import "mediaelement"
import "./MediaElement.scss"

const MediaElement = ({
  autoplay,
  onTrackChange,
  playerRef,
  startTrack,
  tracks,
}) => {
  const onSuccess = useCallback(
    media => {
      media.src = tracks.at(startTrack)
      if (autoplay) {
        media.play()
      }
      media.addEventListener("ended", () => {
        const currentIndex = tracks.findIndex(track => track === media.src)
        const selectedTrack = (currentIndex + 1) % tracks.length

        onTrackChange(selectedTrack)
        media.src = tracks[selectedTrack]
        media.play()
      })
    },
    [autoplay, onTrackChange, startTrack, tracks]
  )
  const onError = useCallback(media => {}, [])

  useEffect(() => {
    const { MediaElementPlayer } = global

    if (!MediaElementPlayer) {
      return
    }
    playerRef.current = new MediaElementPlayer("mediaelement-player", {
      pluginPath: "/",
      success: onSuccess,
      error: onError,
    })

    return () => {
      if (playerRef.current) {
        playerRef.current.remove()
        playerRef.current = null
      }
    }
  }, [onError, onSuccess, playerRef])

  return <audio controls id={"mediaelement-player"} width={"100%"} />
}

MediaElement.propTypes = {
  autoplay: PropTypes.bool,
  onTrackChange: PropTypes.func.isRequired,
  playerRef: PropTypes.any.isRequired,
  startTrack: PropTypes.number,
  tracks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

MediaElement.defaultProps = {
  autoplay: false,
  startTrack: 0,
}

export default React.memo(MediaElement)
