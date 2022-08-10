import * as React from "react"
import {
  contactHoneypot,
  contactSubmission,
  contactSubmissionButton,
} from "./Contact.module.scss"
import { Button, Container, Form, InputGroup } from "react-bootstrap"
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

  const isChecksumValid = useMemo(
    () =>
      parseInt(formData.honeypot) === honeypotAddition[0] + honeypotAddition[1],
    [formData.honeypot, honeypotAddition]
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
      event.preventDefault()
      event.stopPropagation()
      if (isChecksumValid) {
        const res = await fetch(`${process.env.STRAPI_API_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        if (!res.ok) {
          // TODO: Message to set.
          console.log("Something went wrong. This feature is being developed")
        } else {
          setFormData({
            name: "",
            email: "",
            object: "",
            message: "",
            honeypot: "",
          })
        }
      }
    },
    [formData, isChecksumValid, setFormData]
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
            required
            type={"text"}
            value={formData.name}
          />
          <Form.Control.Feedback type={"invalid"}>
            <Trans>name_mandatory</Trans>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <i className="bi bi-at me-1" />
          <Form.Label>
            <Trans>email</Trans>
          </Form.Label>
          <Form.Control
            onChange={onEmailChange}
            required
            type={"email"}
            value={formData.email}
          />
          <Form.Control.Feedback type={"invalid"}>
            <Trans>email_mandatory</Trans>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <i className="bi bi-envelope me-1" />
          <Form.Label>
            <Trans>object</Trans>
          </Form.Label>
          <Form.Control
            onChange={onObjectChange}
            required
            type={"text"}
            value={formData.object}
          />
          <Form.Control.Feedback type={"invalid"}>
            <Trans>object_mandatory</Trans>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <i className="bi bi-chat me-1" />
          <Form.Label>
            <Trans>message</Trans>
          </Form.Label>
          <Form.Control
            onChange={onMessageChange}
            as={"textarea"}
            required
            rows={3}
            type={"text"}
            value={formData.message}
          />
          <Form.Control.Feedback type={"invalid"}>
            <Trans>message_mandatory</Trans>
          </Form.Control.Feedback>
        </Form.Group>
        <div className={contactSubmission}>
          <InputGroup className={contactHoneypot} hasValidation>
            <InputGroup.Text
              className={"me-1"}
            >{`${honeypotAddition[0]} + ${honeypotAddition[1]} =`}</InputGroup.Text>
            <Form.Control
              isInvalid={!isChecksumValid}
              isValid={isChecksumValid}
              onChange={onHoneypotChange}
              required
              type={"text"}
              value={formData.honeypot}
            />
          </InputGroup>
          <Button className={contactSubmissionButton} type={"submit"}>
            <i className="bi bi-send me-1" />
            <Trans>send</Trans>
          </Button>
        </div>
      </Form>
    </Container>
  )
}

Contact.propTypes = {}

Contact.defaultProps = {}

export default React.memo(Contact)
