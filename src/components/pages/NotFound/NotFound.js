import * as React from "react"

import PageLayout from "../../layouts/Layout/PageLayout"

const NotFoundPage = () => (
  <PageLayout title={"404: Not found"}>
    <h1>Nothing Found</h1>
    <p>Oops ! That page could not be found</p>
  </PageLayout>
)

NotFoundPage.propTypes = {}

NotFoundPage.defaultProps = {}

export default React.memo(NotFoundPage)
