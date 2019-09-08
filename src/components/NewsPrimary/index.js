import React from "react"
import styled from "@emotion/styled"

import CoinIcon from "@components/CoinIcon"
import BackgroundImage from "@components/BackgroundImage"
import NewsTitle from "@components/NewsTitle"
import Time from "@components/Time"

const NewsPrimary = styled(
  ({ data: { imgSrc, iconSrc, iconAlt, title, time }, className }) => {
    return (
      <a href="#" className={`d-block ${className}`}>
        <CoinIcon src={iconSrc} alt={iconAlt} />
        <BackgroundImage src={imgSrc} type="primary" />
        <NewsTitle text={title} />
        <Time text={time} />
      </a>
    )
  }
)`
  &:hover {
    text-decoration: none;
  }
`

export default NewsPrimary
