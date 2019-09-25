import React from "react"
import { object, array } from "prop-types"
import styled from "@emotion/styled"

import SentimentItem from "./components/SentimentItem"

const Sentiment = styled(({ data, className }) => (
  <div className={className}>
    {data.map((item, index) => (
      <SentimentItem
        key={`sentiment-${index}`}
        socialMedia={item.label}
        score={item.value}
        pct={item.pct}
        pct24HoursMoved={item.move}
      />
    ))}
  </div>
))`
  position: relative;

  @media (min-width: 992px) {
    padding-top: 14%;
  }
`

Sentiment.propTypes = {
  data: array,
  className: object
}

Sentiment.defaultProps = {
  data: [],
  className: {}
}

export default Sentiment
