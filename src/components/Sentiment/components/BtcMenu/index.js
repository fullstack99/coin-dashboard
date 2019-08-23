import React from "react"
import styled from "@emotion/styled"
import BtcMenuStyle from "./components/SentimateStyle/index"
import BtcNav from "./components/SentimateNav/index"

const Btcmenu = styled(() => (
  <BtcMenuStyle>
    <BtcNav />
  </BtcMenuStyle>
))`
  background: #262d3f;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`

export default Btcmenu
