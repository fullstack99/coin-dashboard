import React from "react"
import Block from './block/index'
import styled from "@emotion/styled"

const BlockWapper = styled.section`
  margin-top:34px;
  margin-right:21px!important;
  text-align:left;
  display:flex;
  @media (max-width: 575px) {
    display: block !important;
    text-align: center;
    margin: 7px auto;
  }
`
const Btc = () => {
  return (
    <BlockWapper  >
      <img src="https://images.markets.businessinsider.com/image/5accb38c146e7130008b4595-981/screen-shot-2018-04-10-at-85200-am.png" alt="BTCimage" width="183px" height="100px"/>
      <Block valueName={"Tru value"} amount={"$ 10,313"} pct={"5.25%"}/>
      <Block valueName={"Sentimate"} amount={"+7.2"} pct={"5.25%"}/>
      <Block valueName={"Stability"} amount={"+7.2"} pct={"5.25%"}/>
      <Block valueName={"Longevity"} amount={"+7.2"} pct={"5.25%"}/>
      <Block valueName={"Community"} amount={"+7.2"} pct={"5.25%"}/>
    </BlockWapper>
  )
}

export default Btc  
