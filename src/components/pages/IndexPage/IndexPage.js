import * as React from "react"
import { indexSection } from "./IndexPage.module.scss"
import PropTypes from "prop-types"
import HomeLayout from "../../layouts/Layout/HomeLayout"
import { Trans } from "react-i18next"
import Clients from "./Clients"
import Skills from "./Skills/Skills"
import Contact from "./Contact"
import Heading from "./Heading"
import Services from "./Services"
import Portfolio from "./Portfolio"

const IndexPage = ({ data }) => {
  return (
    <HomeLayout>
      {/* Heading */}
      <section>
        <div className={"section__content"}>
          <Heading
            actions={data.actions?.nodes}
            background={data.background?.home}
            message={data.greeting?.greeting}
            title={"Nicolas FEZ"}
          />
        </div>
      </section>

      {/* Services */}
      <section className={indexSection}>
        <div className={"section__heading"}>
          <h2 className={"section__title"}>
            <Trans>services</Trans>
          </h2>
        </div>
        <div className={"section__content"}>
          <Services items={data.services?.nodes} />
        </div>
      </section>

      {/* Portfolio */}
      <section className={indexSection}>
        <div className={"section__heading"}>
          <h2 className={"section__title"}>
            <Trans>portfolio</Trans>
          </h2>
        </div>
        <div className={"section__content"}>
          <Portfolio items={data.projects?.nodes} />
        </div>
      </section>

      {/* Skills */}
      <section className={indexSection}>
        <div className={"section__heading"}>
          <h2 className={"section__title"}>
            <Trans>skills</Trans>
          </h2>
        </div>
        <div className={"section__content"}>
          <Skills
            musicSkills={data.skills?.music?.internal?.content}
            techSkills={data.skills?.tech?.internal?.content}
          />
        </div>
      </section>

      {/* Clients */}
      <section className={indexSection}>
        <div className={"section__heading"}>
          <h2 className={"section__title"}>
            <Trans>clients</Trans>
          </h2>
        </div>
        <div className={"section__content"}>
          <Clients items={data?.clients?.nodes} />
        </div>
      </section>

      {/* Contact */}
      <section className={indexSection} id={"contact"}>
        <div className={"section__heading"}>
          <h2 className={"section__title"}>
            <Trans>contact</Trans>
          </h2>
        </div>
        <div className={"section__content"}>
          <Contact />
        </div>
      </section>
    </HomeLayout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    actions: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    background: PropTypes.shape({
      home: PropTypes.object.isRequired,
    }).isRequired,
    clients: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    greeting: PropTypes.shape({
      greeting: PropTypes.string.isRequired,
    }).isRequired,
    projects: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    services: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
    skills: PropTypes.shape({
      tech: PropTypes.shape({
        internal: PropTypes.shape({
          content: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      music: PropTypes.shape({
        internal: PropTypes.shape({
          content: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

IndexPage.defaultProps = {}

export default React.memo(IndexPage)
