import * as React from "react"
import PageLayout from "../../layouts/Layout/PageLayout"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Trans } from "react-i18next"
import PropTypes from "prop-types"

const BlogPage = ({ data, pageContext }) => {
  const crumbs = pageContext?.breadcrumb?.crumbs

  const { t } = useTranslation()

  return (
    <PageLayout
      background={data.background?.blog}
      crumbs={crumbs}
      title={t("blog")}
    >
      {/* News */}
      <div className={"section__heading"}>
        <h2 className={"section__title"}>
          <Trans>news</Trans>
        </h2>
      </div>
    </PageLayout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    background: PropTypes.shape({
      blog: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

BlogPage.defaultProps = {}

export default React.memo(BlogPage)
