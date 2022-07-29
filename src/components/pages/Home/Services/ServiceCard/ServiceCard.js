import * as React from "react"
import {
  serviceCard,
  serviceCardContent,
  serviceCardImage,
} from "./ServiceCard.module.scss"
import { Card, Collapse } from "react-bootstrap"
import PropTypes from "prop-types"
import { useCallback, useState } from "react"

const ServiceCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onCardClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  return (
    <Card className={serviceCard} key={item.name} onClick={onCardClick}>
      <Card.Body className={serviceCardContent}>
        <img
          alt={item.name}
          className={serviceCardImage}
          src={`${process.env.STRAPI_API_URL}${item.image.url}`}
        />
        <Card.Title>{item.name}</Card.Title>
        {isOpen ? (
          <i className="bi bi-arrow-up" />
        ) : (
          <i className="bi bi-arrow-down" />
        )}
      </Card.Body>
      <Collapse in={isOpen}>
        <Card.Footer>
          <Card.Text>{item.description}</Card.Text>
        </Card.Footer>
      </Collapse>
    </Card>
  )
}

ServiceCard.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }),
}

ServiceCard.defaultProps = {}

export default React.memo(ServiceCard)
