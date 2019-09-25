import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const Label = styled(({ label, className }) => (
  <div className={className}>{label}</div>
))`
  color: #eff3f9;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

Label.propTypes = {
  label: string
}

Label.defaultProps = {
  label: null
}

export default Label
