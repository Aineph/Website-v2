import React from "react"
import Layout from "../Layout"
import PropTypes from "prop-types"

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Layout title={"Home"} crumbs={[]}>
        {children}
      </Layout>
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node,
}

HomeLayout.defaultProps = {
  children: null,
}

export default HomeLayout
