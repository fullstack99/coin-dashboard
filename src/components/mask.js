import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const MaskOverlay = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const Mask = ({ opacity }) => {
  return <MaskOverlay style={{ backgroundColor: opacity }} />
}

Mask.propTypes = {
  opacity: PropTypes.string,
}

Mask.defaultProps = {
  opacity: "rgba(0, 0, 0, .4)",
}

export default Mask
