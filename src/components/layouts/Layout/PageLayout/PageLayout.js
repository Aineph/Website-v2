import React, { useMemo } from "react"
import Layout from "../Layout"
import PropTypes from "prop-types"
import {
  pageLayout,
  pageLayoutContent,
  pageLayoutDivider,
  pageLayoutImage,
  pageLayoutSubElement,
  pageLayoutSubElements,
  pageLayoutSubTitle,
  pageLayoutTitle,
} from "./PageLayout.module.scss"
import BreadCrumb from "../../../BreadCrumb/BreadCrumb"
import { useI18next } from "gatsby-plugin-react-i18next"

const PageLayout = ({
  author,
  background,
  children,
  crumbs,
  date,
  subtitle,
  title,
}) => {
  const { language } = useI18next()
  const formattedDate = useMemo(
    () => new Date(date).toLocaleDateString(language),
    [date, language]
  )

  return (
    <div>
      <Layout title={title} crumbs={crumbs}>
        <div className={pageLayout}>
          <BreadCrumb crumbLabel={title} crumbs={crumbs} />
          <div
            className={pageLayoutImage}
            style={{
              backgroundImage: `url(${background.localFile?.url})`,
            }}
          >
            <div className={pageLayoutTitle}>{title}</div>
            <div className={pageLayoutDivider} />
            {[author, date].some(
              subElement => subElement !== null && subElement !== undefined
            ) ? (
              <div className={pageLayoutSubElements}>
                {date !== null && date !== undefined ? (
                  <div className={pageLayoutSubElement}>
                    <i className={"bi bi-calendar me-1"} />
                    <span>{formattedDate}</span>
                  </div>
                ) : null}
                {author !== null && author !== undefined ? (
                  <div className={pageLayoutSubElement}>
                    <i className={"bi bi-person me-1"} />
                    <span>{author}</span>
                  </div>
                ) : null}
              </div>
            ) : null}
            {subtitle !== null && subtitle !== undefined ? (
              <div className={pageLayoutSubTitle}>
                <span>{subtitle}</span>
              </div>
            ) : null}
          </div>
          <div className={pageLayoutContent}>{children}</div>
        </div>
      </Layout>
    </div>
  )
}

PageLayout.propTypes = {
  author: PropTypes.string,
  background: PropTypes.shape({
    localFile: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  children: PropTypes.node,
  crumbs: PropTypes.array,
  date: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}

PageLayout.defaultProps = {
  author: null,
  background: {
    localFile: {
      url: "",
    },
  },
  children: null,
  crumbs: [],
  date: null,
  subtitle: null,
  title: "",
}

export default React.memo(PageLayout)
