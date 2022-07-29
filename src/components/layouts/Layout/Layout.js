/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "../../../styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Seo from "../../seo"
import Header from "../Header/Header"
import Footer from "../Footer"

const Layout = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

Layout.defaultProps = {
  children: null,
  title: "Nicolas Fez",
}

export default React.memo(Layout)
