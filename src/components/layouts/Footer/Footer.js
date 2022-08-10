import * as React from "react"
import {
  footer,
  footerBottom,
  footerItem,
  footerItemLogo,
  footerItemLogoImage,
  footerItemText,
  footerRedirection,
  footerRedirections,
  footerSection,
} from "./Footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import { Trans } from "react-i18next"
import { Link } from "gatsby-plugin-react-i18next"

const Footer = () => {
  const footerLinks = useStaticQuery(graphql`
    query FooterLinksQuery {
      allStrapiSocialMedia {
        nodes {
          link
          logo {
            localFile {
              url
            }
          }
          name
          username
        }
      }
      strapiContent {
        resume {
          localFile {
            url
          }
        }
      }
    }
  `)

  return (
    <div className={footer}>
      <div className={footerRedirections}>
        <Link className={footerRedirection} to={"/"}>
          <Trans>home</Trans>
        </Link>
        <Link className={footerRedirection} to={"/about-me"}>
          <Trans>about me</Trans>
        </Link>
        <Link className={footerRedirection} to={"/blog"}>
          <Trans>blog</Trans>
        </Link>
        <Link className={footerRedirection} to={"/gears"}>
          <Trans>gears</Trans>
        </Link>
        <a
          className={footerRedirection}
          href={footerLinks.strapiContent?.resume?.localFile?.url}
        >
          <Trans>resume</Trans>
        </a>
      </div>
      <div className={footerBottom}>
        <div className={footerSection}>
          <div>
            © {new Date().getFullYear()} NICOLAS FEZ, <Trans>built with</Trans>
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </div>
        </div>
        <div className={footerSection}>
          {footerLinks.allStrapiSocialMedia?.nodes?.map(socialMedia => (
            <a
              className={footerItem}
              key={socialMedia.name}
              href={socialMedia.link}
            >
              <div className={footerItemLogo}>
                <img
                  alt={socialMedia.name}
                  className={footerItemLogoImage}
                  src={socialMedia.logo?.localFile?.url}
                />
              </div>
              <div className={footerItemText}>@{socialMedia.username}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default React.memo(Footer)
