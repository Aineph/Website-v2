import * as React from "react"
import {
  heading,
  headingAction,
  headingActions,
  headingContent,
  headingDescription,
  headingDivider,
  headingGreetings,
} from "./Heading.module.scss"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"

const Heading = ({ actions, background, message, title }) => {
  return (
    <div
      className={heading}
      style={{
        backgroundImage: `url(${background.localFile?.url})`,
      }}
    >
      <div className={headingContent}>
        <h1 className={headingGreetings}>{title}</h1>
        <div className={headingDivider} />
        <h2 className={headingDescription}>{message}</h2>
        <div className={headingActions}>
          {actions.map(action => (
            <Button
              className={headingAction}
              key={action.name}
              href={action.link}
            >
              {action.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

Heading.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  background: PropTypes.shape({
    localFile: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Heading.defaultProps = {
  background: {
    localFile: {
      url: "",
    },
  },
}

export default React.memo(Heading)
