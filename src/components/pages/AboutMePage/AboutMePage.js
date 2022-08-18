import * as React from "react"
import PropTypes from "prop-types"
import PageLayout from "../../layouts/Layout/PageLayout"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AboutMePage = ({ data, pageContext }) => {
  const crumbs = pageContext?.breadcrumb?.crumbs

  const { t } = useTranslation()

  return (
    <PageLayout
      background={data.background?.about}
      crumbs={crumbs}
      title={t("about me")}
    >
      <div
        className={'ck-content'}
        dangerouslySetInnerHTML={{
          __html: data.content?.about?.data?.about,
        }}
      />
    </PageLayout>
  )
}

AboutMePage.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      about: PropTypes.shape({
        data: PropTypes.shape({
          about: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    background: PropTypes.shape({
      about: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

AboutMePage.defaultProps = {}

export default React.memo(AboutMePage)
