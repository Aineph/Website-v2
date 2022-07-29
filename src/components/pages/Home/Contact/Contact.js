import * as React from "react"
import {
  contactHoneypot,
  contactHoneypotForm,
  contactSubmission,
  contactSubmissionButton,
} from "./Contact.module.scss"
import { Button, Container, Form } from "react-bootstrap"
import { Trans } from "react-i18next"
import { useCallback, useMemo, useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    object: "",
    message: "",
    honeypot: "",
  })

  const honeypotAddition = useMemo(
    () => [
      Math.floor(Math.random() * 19) + 1,
      Math.floor(Math.random() * 19) + 1,
    ],
    []
  )

  const onEmailChange = useCallback(
    event => {
      setFormData({
        ...formData,
        email: event.target?.value,
      })
    },
    [formData, setFormData]
  )
  const onHoneypotChange = useCallback(
    event => {
      setFormData({
        ...formData,
        honeypot: event.target?.value,
      })
    },
    [formData, setFormData]
  )
  const onMessageChange = useCallback(
    event => {
      setFormData({
        ...formData,
        message: event.target?.value,
      })
    },
    [formData, setFormData]
  )
  const onNameChange = useCallback(
    event => {
      setFormData({
        ...formData,
        name: event.target?.value,
      })
    },
    [formData, setFormData]
  )
  const onObjectChange = useCallback(
    event => {
      setFormData({
        ...formData,
        object: event.target?.value,
      })
    },
    [formData, setFormData]
  )
  const onContactFormSubmit = useCallback(
    async event => {
      if (
        parseInt(formData.honeypot) ===
        honeypotAddition[0] + honeypotAddition[1]
      ) {
        fetch(`${process.env.STRAPI_API_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        setFormData({
          name: "",
          email: "",
          object: "",
          message: "",
          honeypot: "",
        })
      }
      event.preventDefault()
      event.stopPropagation()
    },
    [formData, honeypotAddition, setFormData]
  )

  return (
    <Container>
      <Form onSubmit={onContactFormSubmit}>
        <Form.Group>
          <i className="bi bi-person me-1" />
          <Form.Label>
            <Trans>name</Trans>
          </Form.Label>
          <Form.Control
            onChange={onNameChange}
            type={"text"}
            value={formData.name}
          />
        </Form.Group>
        <Form.Group>
          <i className="bi bi-at me-1" />
          <Form.Label>
            <Trans>email</Trans>
          </Form.Label>
          <Form.Control
            onChange={onEmailChange}
            type={"email"}
            value={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <i className="bi bi-envelope me-1" />
          <Form.Label>
            <Trans>object</Trans>
          </Form.Label>
          <Form.Control
            onChange={onObjectChange}
            type={"text"}
            value={formData.object}
          />
        </Form.Group>
        <Form.Group>
          <i className="bi bi-chat me-1" />
          <Form.Label>
            <Trans>message</Trans>
          </Form.Label>
          <Form.Control
            onChange={onMessageChange}
            as={"textarea"}
            rows={3}
            type={"text"}
            value={formData.message}
          />
        </Form.Group>
        <div className={contactSubmission}>
          <Button className={contactSubmissionButton} type={"submit"}>
            <i className="bi bi-send me-1" />
            <Trans>send</Trans>
          </Button>
          <Form.Group className={contactHoneypot}>
            <Form.Label
              className={"me-1"}
            >{`${honeypotAddition[0]} + ${honeypotAddition[1]} =`}</Form.Label>
            <Form.Control
              className={contactHoneypotForm}
              onChange={onHoneypotChange}
              type={"text"}
              value={formData.honeypot}
            />
          </Form.Group>
        </div>
      </Form>
    </Container>
  )
}

Contact.propTypes = {}

Contact.defaultProps = {}

export default React.memo(Contact)
