import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const ReadNow = styled(({ text, url, className }) => (
  <a className={className} href={url}>
    {text}
  </a>
))`
  border: solid 2px #3a405b;
  border-radius: 100px;
  color: #3a405b;
  font-size: 11px;
  letter-spacing: 1px;
  padding: 5px 10px;
  text-transform: uppercase;

  &:hover {
    border-color: #748aa1;
    color: #748aa1;
    text-decoration: none;
  }
`

ReadNow.propTypes = {
  text: string,
  url: string
}

ReadNow.defaultProps = {
  text: null,
  url: "#"
}

export default ReadNow
