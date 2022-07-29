import * as React from "react"
import {
  header,
  headerLanguage,
  headerMenu,
  headerNavigationCollapse,
} from "./Header.module.scss"
import { useCallback, useState } from "react"
import useWindowScrollPosition from "../../../hooks/useWindowScrollPosition"
import { StaticImage } from "gatsby-plugin-image"
import {
  Link,
  Trans,
  useI18next,
  useTranslation,
} from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

const Header = () => {
  const { changeLanguage, language, languages } = useI18next()
  const [isHovered, setIsHovered] = useState(false)
  const { scrollTop } = useWindowScrollPosition()

  const onMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [setIsHovered])
  const onMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [setIsHovered])

  const { t } = useTranslation()

  const onLocaleChange = useCallback(
    async locale => {
      await changeLanguage(locale)
    },
    [changeLanguage]
  )

  const siteTitle = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Navbar
      className={header}
      expand={"lg"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        opacity: isHovered || scrollTop <= 0 ? 1 : 0,
      }}
    >
      <Navbar.Brand>
        <Link className={headerMenu} to="/">
          <StaticImage
            alt={siteTitle.site?.siteMetadata?.title || `Nicolas FEZ`}
            height={30}
            src={"../../../images/logo.svg"}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={"navigation"} />
      <Navbar.Collapse className={headerNavigationCollapse} id={"navigation"}>
        <Nav>
          <Nav.Link as={Link} className={headerMenu} to={"/about-me"}>
            <Trans>about me</Trans>
          </Nav.Link>
          <Nav.Link as={Link} className={headerMenu} to="/blog">
            <Trans>blog</Trans>
          </Nav.Link>
          <Nav.Link as={Link} className={headerMenu} to="/gears">
            <Trans>gears</Trans>
          </Nav.Link>
          <Nav.Link as={Link} className={headerMenu} to="/#contact">
            <Trans>contact</Trans>
          </Nav.Link>
          <NavDropdown className={headerLanguage} title={t(language)}>
            {languages.map(language => (
              <NavDropdown.Item
                className={headerMenu}
                key={language}
                onClick={() => onLocaleChange(language)}
              >
                <Trans>{language}</Trans>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default React.memo(Header)
