import * as React from "react"
import PageLayout from "../../layouts/Layout/PageLayout"
import { useTranslation } from "gatsby-plugin-react-i18next"
import PropTypes from "prop-types"

const GearsPage = ({ data, pageContext }) => {
  const crumbs = pageContext?.breadcrumb?.crumbs

  const { t } = useTranslation()

  return (
    <PageLayout
      background={data.background?.gears}
      crumbs={crumbs}
      title={t("gears")}
    >
      <div
        dangerouslySetInnerHTML={{
          __html:
            data.gears.childStrapiGearContentTextnode.childMarkdownRemark.html,
        }}
      />
    </PageLayout>
  )
}

GearsPage.propTypes = {
  data: PropTypes.shape({
    background: PropTypes.shape({
      gears: PropTypes.object.isRequired,
    }).isRequired,
    gears: PropTypes.shape({
      childStrapiGearContentTextnode: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

GearsPage.defaultProps = {}

export default React.memo(GearsPage)
