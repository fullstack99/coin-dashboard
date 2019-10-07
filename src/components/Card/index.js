import React from "react"
import { string, node, object } from "prop-types"
import styled from "@emotion/styled"

import Header from "./components/Header"
import Body from "./components/Body"

const Card = styled(({ title, children, className }) => (
  <div className={className}>
    <Header title={title} />
    <Body>{children}</Body>
  </div>
))`
  border: solid 1px #313d4f;
  border-radius: 8px;
  height: 100%;
  width: 100%;
`

Card.propTypes = {
  title: string,
  children: node,
  className: object
}

Card.defaultProps = {
  title: null,
  children: null,
  className: {}
}

export default Card
