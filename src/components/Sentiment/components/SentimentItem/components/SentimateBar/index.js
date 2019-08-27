import React from "react"
import styled from "@emotion/styled"

const Filled = styled.div`
  background-color: #475ff2;
  height: 24.8px;
  width: 72%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

const SentimentBar = () => (
  <div className="d-flex w-100">
    <Filled></Filled>
    <span
      style={{
        backgroundColor: "#75abd7",
        height: "24.8px",
        width: "28%",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px"
      }}
    ></span>
  </div>
)

export default SentimentBar
