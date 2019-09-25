import React from "react"
import { string } from "prop-types"

const Description = ({ text }) => (
  <p>{text}</p>
)

Description.propTypes = {
  text: string
}

Description.defaultProps = {
  text: null
}

export default Description