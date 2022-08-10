import * as React from "react"
import PageLayout from "../../../layouts/Layout/PageLayout"
import PropTypes from "prop-types"
import { useTranslation } from "gatsby-plugin-react-i18next"
import AlbumsList from "./AlbumsList"

const AlbumsPage = ({ data, pageContext }) => {
  const crumbs = pageContext?.breadcrumb?.crumbs

  const { t } = useTranslation()

  return (
    <PageLayout
      background={data.background?.albums}
      crumbs={crumbs}
      title={t("albums")}
    >
      <section>
        <div className={"section__content"}>
          <AlbumsList items={data.albums?.nodes} />
        </div>
      </section>
    </PageLayout>
  )
}

AlbumsPage.propTypes = {
  data: PropTypes.shape({
    albums: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    background: PropTypes.shape({
      albums: PropTypes.object.isRequired,
    }).isRequired,
    categories: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
}

AlbumsPage.defaultProps = {}

export default React.memo(AlbumsPage)
