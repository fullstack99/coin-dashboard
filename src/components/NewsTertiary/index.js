import React from "react"
import styled from "@emotion/styled"

import BackgroundImage from "@components/BackgroundImage"
import NewsTitle from "@components/NewsTitle"
import Time from "@components/Time"

const NewsTertiary = styled(({ data: { imgSrc, title, time }, className }) => (
  <a href="#" className={`d-flex ${className}`}>
    <BackgroundImage src={imgSrc} type="tertiary" className="mr-3" />
    <div>
      <NewsTitle text={title} className="mb-2" />
      <Time text={time} />
    </div>
  </a>
))`
  &:hover {
    text-decoration: none;
  }
`

export default NewsTertiary
