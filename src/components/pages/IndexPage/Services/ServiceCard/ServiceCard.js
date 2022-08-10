import * as React from "react"
import { serviceCard, serviceCardContent } from "./ServiceCard.module.scss"
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
        <img alt={item.name} src={`${item.image?.localFile?.url}`} />
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
      localFile: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }),
}

ServiceCard.defaultProps = {}

export default React.memo(ServiceCard)
