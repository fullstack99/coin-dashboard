import React from "react"
import { object } from "prop-types"
import styled from "@emotion/styled"

import CoinIcon from "@components/CoinIcon"
import BackgroundImage from "@components/BackgroundImage"
import NewsTitle from "@components/NewsTitle"
import Time from "@components/Time"

const NewsPrimary = styled(
  ({ data: { url, imgSrc, iconSrc, iconAlt, title, time }, className }) => {
    return (
      <a href={url} className={`d-block ${className}`}>
        <CoinIcon src={iconSrc} alt={iconAlt} />
        <BackgroundImage src={imgSrc} type="primary" />
        <NewsTitle>{title}</NewsTitle>
        <Time text={time} />
      </a>
    )
  }
)`
  &:hover {
    text-decoration: none;
  }
`

NewsPrimary.propTypes = {
  data: object
}

NewsPrimary.defaultProps = {
  data: {}
}

export default NewsPrimary
