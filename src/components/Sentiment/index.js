import React from "react"
import styled from "@emotion/styled"

import SentimentItem from "./components/SentimentItem"

const Sentiment = styled(({ className }) => (
  <div className={className}>
    <SentimentItem
      socialMedia={"TWITTER"}
      pct="1.2"
      pct24HoursMoved="up"
      score="8.5"
    />
    <SentimentItem
      socialMedia={"REDDIT"}
      pct="3.5"
      pct24HoursMoved="down"
      score="7.2"
    />
    <SentimentItem
      socialMedia={"FORUMS"}
      pct="4.7"
      pct24HoursMoved="up"
      score="2.9"
    />
  </div>
))`
  position: relative;

  @media (min-width: 992px) {
    padding-top: 16%;
  }
`

export default Sentiment
