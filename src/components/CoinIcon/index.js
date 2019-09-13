import React from "react"
import { string, number } from "prop-types"
import styled from "@emotion/styled"

const CoinIcon = styled(({ src, alt, className }) => (
  <>{src ? <img src={src} alt={alt} className={className} /> : ""}</>
))`
  height: ${props => `${props.height || props.size}px`};
  left: 0;
  position: ${props => props.position};
  top: ${props => (props.position === "absolute" ? "-15px" : "0")};
  width: ${props => `${props.width || props.size}px`};
`

CoinIcon.propTypes = {
  alt: string,
  height: number,
  position: string,
  size: number,
  src: string,
  width: number
}

CoinIcon.defaultProps = {
  alt: null,
  height: null,
  position: "absolute",
  size: 30,
  src: null,
  width: null
}

export default CoinIcon
