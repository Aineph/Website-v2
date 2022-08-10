import React, { useMemo } from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import "./BreadCrumb.module.scss"
import { useI18next } from "gatsby-plugin-react-i18next"

const BreadCrumb = ({ crumbLabel, crumbs }) => {
  const { languages, t } = useI18next()

  const intlCrumbs = useMemo(
    () =>
      crumbs.filter(
        crumb =>
          !languages.includes(crumb.crumbLabel) &&
          !languages.includes(crumb.pathname.slice(1))
      ),
    [crumbs, languages]
  ).map(crumb => ({
    ...crumb,
    crumbLabel: t(crumb.crumbLabel),
  }))

  return (
    <Breadcrumb
      crumbLabel={crumbLabel}
      crumbSeparator={" > "}
      crumbs={intlCrumbs}
    />
  )
}

export default React.memo(BreadCrumb)
