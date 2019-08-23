import React from "react"
import styled from "@emotion/styled"

import CardHeader from "./components/CardHeader"
import CardBody from "./components/CardBody"

const Card = styled(({ title, children, className }) => (
  <div className={className}>
    <CardHeader title={title} />
    <CardBody>{children}</CardBody>
  </div>
))`
  border: solid 1px #313d4f;
  border-radius: 8px;
  height: 100%;
  width: 100%;
`
export default Card
