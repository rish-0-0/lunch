import React, { useState } from "react"
import Button from "../Button"
import API from "../../config/axios";

export default function (props) {
  const [email, setEmail] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  return (
    <form className="contact-form">
      {/* <h2 className="form-heading">Contact Me</h2> */}
      <div className="form-group">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <Button
          onClick={e => {
            e.preventDefault()
            setIsLoading(true)
            API.post("/mail/send", { client_email: email }, {})
              .then(() => {
                setIsSuccess(true)
                setIsError(false)
                setIsLoading(false)
              })
              .catch(() => {
                setIsSuccess(false)
                setIsError(true)
                setIsLoading(false)
              })
          }}
        >
          Submit
        </Button>
        {isSuccess && <h6 className="contact-funny">Mail sent</h6>}
      </div>
    </form>
  )
}
