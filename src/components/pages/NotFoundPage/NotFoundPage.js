import * as React from "react"
import PropTypes from "prop-types"
import PageLayout from "../../layouts/Layout/PageLayout"

const NotFoundPage = ({ data }) => {
  return (
    <PageLayout background={data.background?.notfound} title={"404: Not Found"}>
      <div
        className={'ck-content'}
        dangerouslySetInnerHTML={{
          __html: data.content?.notfound?.data?.notfound,
        }}
      />
    </PageLayout>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    background: PropTypes.shape({
      notfound: PropTypes.object.isRequired,
    }).isRequired,
    content: PropTypes.shape({
      notfound: PropTypes.shape({
        data: PropTypes.shape({
          notfound: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

NotFoundPage.defaultProps = {}

export default React.memo(NotFoundPage)
