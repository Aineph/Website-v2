import React from "react"
import Layout from "../Layout"
import PropTypes from "prop-types"
import {
  pageLayout,
  pageLayoutImage,
  pageLayoutTitle,
} from "./PageLayout.module.scss"
import BreadCrumb from "../../../BreadCrumb/BreadCrumb"

const PageLayout = ({ background, children, title, crumbs }) => {
  return (
    <div>
      <Layout title={title} crumbs={crumbs}>
        <div className={pageLayout}>
          <BreadCrumb crumbLabel={title} crumbs={crumbs} />
          <div
            className={pageLayoutImage}
            style={{
              backgroundImage: `url(${process.env.STRAPI_API_URL}${background.url})`,
            }}
          >
            <div className={pageLayoutTitle}>{title}</div>
          </div>
          {children}
        </div>
      </Layout>
    </div>
  )
}

PageLayout.propTypes = {
  background: PropTypes.shape({
    url: PropTypes.string,
  }),
  children: PropTypes.node,
  title: PropTypes.string,
  crumbs: PropTypes.array,
}

PageLayout.defaultProps = {
  background: {
    url: "",
  },
  children: null,
  title: "",
  crumbs: [],
}

export default PageLayout
