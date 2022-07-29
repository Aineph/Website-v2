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
        dangerouslySetInnerHTML={{
          __html:
            data.about.childStrapiAboutContentTextnode.childMarkdownRemark.html,
        }}
      />
    </PageLayout>
  )
}

AboutMePage.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.shape({
      childStrapiAboutContentTextnode: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string.isRequired,
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
