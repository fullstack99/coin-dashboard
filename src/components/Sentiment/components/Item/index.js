import React from "react"
import { string, object } from "prop-types"
import styled from "@emotion/styled"

import Data from "./components/Data"
import Bar from "./components/Bar"

const Item = styled(
  ({ socialMedia, pct, score, pct24HoursMoved, className }) => (
    <div className={className}>
      <Data
        socialMedia={socialMedia}
        pct={pct}
        score={score}
        pct24HoursMoved={pct24HoursMoved}
      />
      <Bar pct={pct} />
    </div>
  )
)`
  margin-bottom: 20px;
`

Item.propTypes = {
  socialMedia: string,
  pct: string,
  score: string,
  pct24HoursMoved: string,
  className: object
}

Item.defaultProps = {
  socialMedia: "#ad34fe",
  pct: null,
  score: null,
  pct24HoursMoved: null,
  className: {}
}

export default Item
