import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

const CoinIcon = styled(({ src, alt, className }) => (
  <>{src ? <img src={src} alt={alt} className={className} /> : ""}</>
))`
  height: 30px;
  left: 0;
  position: absolute;
  top: -15px;
  width: 30px;
`

CoinIcon.propTypes = {
  src: string,
  alt: string
}

CoinIcon.defaultProps = {
  src: null,
  alt: null
}

export default CoinIcon
