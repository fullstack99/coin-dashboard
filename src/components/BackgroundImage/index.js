import React from "react"
import { string } from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import logo from "@images/logo-big.png"

const BackgroundImage = styled(({ src, className }) => (
  <div
    className={`${className} bg-ebony-clay`}
    css={
      src
        ? css`
            background: url(${src});
            background-size: cover;
          `
        : css`
            background: url(${logo});
            background-size: contain;
          `
    }
  />
))`
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-bottom: 12px;
  width: 100%;

  ${({ type }) =>
    type === "primary" &&
    `
    height: 300px;

    @media (min-width: 768px) {
      height: 200px;
    }

    @media (min-width: 992px) {
      height: 200px;
    }

    @media (min-width: 1200px) {
      height: 250px;
    }
  `}

  ${({ type }) =>
    type === "secondary" &&
    `
    height: 300px;

    @media (min-width: 768px) {
      height: 150px;
    }

    @media (min-width: 992px) {
      height: 150px;
    }
  `}

  ${({ type }) =>
    type === "tertiary" &&
    `
    display: inline-block;
    height: 100px;
    width: 100px;

    p {
      display: inline-block;
    }

    @media (min-width: 992px) {
      height: 50px;
      width: 50px;
    }
  `}
`

BackgroundImage.propTypes = {
  src: string,
  type: string
}

BackgroundImage.defaultProps = {
  src: null,
  type: "primary"
}

export default BackgroundImage
