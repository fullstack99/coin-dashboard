import React from "react"
import { string, object } from "prop-types"
import styled from "@emotion/styled"

import SentimentData from "./components/SentimentData"
import SentimentBar from "./components/SentimateBar"

const SentimentItem = styled(
  ({ socialMedia, pct, score, pct24HoursMoved, className }) => (
    <div className={className}>
      <SentimentData
        socialMedia={socialMedia}
        pct={pct}
        score={score}
        pct24HoursMoved={pct24HoursMoved}
      />
      <SentimentBar pct={pct} />
    </div>
  )
)`
  margin-bottom: 20px;
`

SentimentItem.propTypes = {
  socialMedia: string,
  pct: string,
  score: string,
  pct24HoursMoved: string,
  className: object
}

SentimentItem.defaultProps = {
  socialMedia: "#ad34fe",
  pct: null,
  score: null,
  pct24HoursMoved: null,
  className: {}
}

export default SentimentItem
