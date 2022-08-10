import * as React from "react"
import {
  albumTemplateContent,
  albumTemplateImage,
} from "./AlbumTemplate.module.scss"
import PageLayout from "../../layouts/Layout/PageLayout"
import AudioPlayer from "../../pages/BlogPage/AudioPlayer"

const AlbumTemplate = ({ data, location, pageContext }) => {
  const crumbs = pageContext.breadcrumb?.crumbs

  return (
    <PageLayout
      background={data.background?.albums}
      crumbs={crumbs}
      title={data.album?.name}
    >
      <div className={albumTemplateContent}>
        <img
          alt={data.album?.cover?.name}
          className={albumTemplateImage}
          src={data.album?.cover?.localFile?.url}
        />
        <AudioPlayer
          autoplay={
            location.state?.trackIndex !== null &&
            location.state?.trackIndex !== undefined
          }
          items={data.album?.songs}
          startTrack={location.state?.trackIndex}
        />
      </div>
    </PageLayout>
  )
}

AlbumTemplate.propTypes = {}

AlbumTemplate.defaultProps = {}

export default AlbumTemplate
