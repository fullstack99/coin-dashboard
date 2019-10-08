import React from "react"
import { object } from "prop-types"
import styled from "@emotion/styled"

import BackgroundImage from "@components/BackgroundImage"
import NewsTitle from "@components/NewsTitle"
import Time from "@components/Time"

const NewsTertiary = styled(
  ({ data: { url, imgSrc, title, time }, className }) => (
    <a href={url} className={`d-flex ${className}`}>
      <BackgroundImage src={imgSrc} type="tertiary" className="mr-3" />
      <div>
        <NewsTitle className="mb-2">{title}</NewsTitle>
        <Time text={time} />
      </div>
    </a>
  )
)`
  &:hover {
    text-decoration: none;
  }
`

NewsTertiary.propTypes = {
  data: object
}

NewsTertiary.defaultProps = {
  data: {}
}

export default NewsTertiary
