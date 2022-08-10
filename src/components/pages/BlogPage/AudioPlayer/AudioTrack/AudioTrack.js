import * as React from "react"
import {
  audioTrack,
  audioTrackDetails,
  audioTrackDuration,
  audioTrackPerformer,
  audioTrackTitle,
  audioTrackTitleSelected,
} from "./AudioTrack.module.scss"
import PropTypes from "prop-types"
import { useCallback } from "react"
import { Card } from "react-bootstrap"

const AudioTrack = ({ item, itemPosition, onSelect, selected }) => {
  const onAudioTrackSelection = useCallback(
    () => onSelect(itemPosition),
    [itemPosition, onSelect]
  )

  return (
    <Card className={audioTrack} onClick={onAudioTrackSelection}>
      <div className={audioTrackDetails}>
        <span
          className={selected ? audioTrackTitleSelected : audioTrackTitle}
        >{`${itemPosition}. "${item.title}"`}</span>
        <span className={audioTrackPerformer}>{`— ${item.performer}`}</span>
      </div>
      <div className={audioTrackDuration}>
        <span>{item.duration}</span>
      </div>
    </Card>
  )
}

AudioTrack.propTypes = {
  item: PropTypes.shape({
    duration: PropTypes.string.isRequired,
    performer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  itemPosition: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

AudioTrack.defaultProps = {}

export default React.memo(AudioTrack)
