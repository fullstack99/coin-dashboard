import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

const Clock = styled(({ className }) => (
  <FontAwesomeIcon className={className} icon={faClock} />
))`
  font-size: 16px;
  margin-right: 10px;
`

export default Clock
