import React from "react"
import styled from "@emotion/styled"

const Filled = styled.div`
  height: 24.8px;
  width: 72%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

const Bar = () => (
  <div className="d-flex w-100">
    <Filled className="bg-royal-blue"></Filled>
    <span
      className="bg-danube"
      style={{
        height: "24.8px",
        width: "28%",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px"
      }}
    ></span>
  </div>
)

export default Bar
