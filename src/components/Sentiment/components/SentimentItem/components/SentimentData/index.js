import React from "react"
import { css } from "@emotion/core"

import ArrowDown from "@components/ArrowDown"
import ArrowUp from "@components/ArrowUp"

const pctHelper = css`
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

  .down {
    color: #dc3545;
  }

  .up {
    color: #475ff2;
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

const SentimentData = ({ socialMedia, pct, pct24HoursMoved, score }) => (
  <div css={pctHelper}>
    <span className="social-name">{socialMedia}</span>
    <span className="caret">
      {pct24HoursMoved === "up" ? (
        <ArrowUp size="20" />
      ) : (
        <ArrowDown size="20" color="red" />
      )}
    </span>
    <span
      className={"percentage" + (pct24HoursMoved === "up" ? " up" : " down")}
    >
      {pct}%{" "}
    </span>
    <span className="score">{score}</span>
  </div>
)

export default SentimentData
