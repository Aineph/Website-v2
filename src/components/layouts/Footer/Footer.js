import * as React from "react"
import {
  footer,
  footerItem,
  footerItemLogo,
  footerItemLogoImage,
  footerItemText,
  footerSection,
} from "./Footer.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const socialMedias = useStaticQuery(graphql`
    query FooterSocialMediaQuery {
      allStrapiSocialMedia {
        nodes {
          link
          logo {
            url
          }
          name
          username
        }
      }
    }
  `)

  return (
    <div className={footer}>
      <div className={footerSection}>
        <div>
          © {new Date().getFullYear()} NICOLAS FEZ, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </div>
      <div className={footerSection}>
        {socialMedias.allStrapiSocialMedia?.nodes?.map(socialMedia => (
          <a
            className={footerItem}
            key={socialMedia.name}
            href={socialMedia.link}
          >
            <div className={footerItemLogo}>
              <img
                alt={socialMedia.name}
                className={footerItemLogoImage}
                src={`${process.env.STRAPI_API_URL}${socialMedia.logo?.url}`}
              />
            </div>
            <div className={footerItemText}>@{socialMedia.username}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default React.memo(Footer)
