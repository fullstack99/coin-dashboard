import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

import Separator from "@components/Separator"

const Contact = styled(({ name, email, phone, className }) => (
  <div className={className}>
    <h2>{name}</h2>
    <p className="mb-3">{email}</p>
    {/* <p className="mb-3">{phone}</p> */}
    <Separator />
  </div>
))`
  margin-bottom: 36px;

  h2 {
    color: #fff;
    font-size: 24px;
    font-weight: normal !important;
    margin-bottom: 6px;
  }

  p {
    color: #5d6c76;
    font-size: 14px;
    margin-bottom: 6px;
  }
`

Contact.propTypes = {
  name: string,
  email: string,
  // phone: string
}

Contact.defaultProps = {
  name: null,
  email: null,
  // phone: null
}

export default Contact
