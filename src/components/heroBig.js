import React from "react"
import PropTypes from "prop-types"
import Hero from "gatsby-background-image"
import styled from "styled-components"

import Mask from "./mask"

const HeroWrapper = styled.section`
  position: relative;
`

const BackgroundSection = ({ className, imageData }) => {
  return (
    <HeroWrapper>
      <Hero
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#f5c141`}
      >
        <h1>here</h1>
      </Hero>
      <Mask />
    </HeroWrapper>
  )
}

const StyledHeroBig = styled(BackgroundSection)`
  height: 340px;
  width: 100%;

  @media (min-width: 768px) {
    height: 690px;
  }

  @media (min-width: 992px) {
    height: 750px;
  }
`

StyledHeroBig.propTypes = {
  className: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
}

StyledHeroBig.defaultProps = {
  className: "",
  imageData: {},
}

export default StyledHeroBig
