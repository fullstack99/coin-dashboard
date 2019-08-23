import React from "react"
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
      <SentimentBar pct={pct}/>
    </div>
  )
)`
  margin-bottom: 20px;
`

export default SentimentItem
