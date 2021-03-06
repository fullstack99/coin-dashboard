import React from "react"
import { string } from "prop-types"
import { css } from "@emotion/core"

import ArrowDown from "@components/ArrowDown"
import ArrowUp from "@components/ArrowUp"

const pctHelper = css`
  margin-bottom: 6px;

  .social-name {
    color: #626f86;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.4px;
  }

  .percentage {
    bottom: -4px;
    float: right;
    font-size: 14px;
    position: relative;
  }

  .caret {
    bottom: -2px;
    float: right;
    position: relative;
  }

  .arrow {
    font-size: 20px;
  }

  .score {
    color: white;
    float: right;
    font-size: 18px;
    margin-right: 5px;
  }
`

const Data = ({ socialMedia, pct, pct24HoursMoved, score }) => (
  <div css={pctHelper}>
    <span className="social-name">{socialMedia}</span>
    <span className="caret">
      {pct24HoursMoved === "up" ? <ArrowUp /> : <ArrowDown />}
    </span>
    <span
      className={`percentage ${
        pct24HoursMoved === "up" ? "text-royal-blue" : "text-electric-violet"
      }`}
    >
      {pct}%{" "}
    </span>
    <span className="score">{score}</span>
  </div>
)

Data.propTypes = {
  socialMedia: string,
  pct: string,
  score: string,
  pct24HoursMoved: string
}

Data.defaultProps = {
  socialMedia: "#ad34fe",
  pct: null,
  score: null,
  pct24HoursMoved: null
}

export default Data
