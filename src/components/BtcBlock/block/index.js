import React from "react"
import styled from "@emotion/styled"
import { TiArrowUpThick } from "react-icons/ti"
const InsideBlock = styled.section`
  width:100%;
  padding-left:2%;
  padding-top:19px;
  border-radius: 8px;
  font-family: sans-serif;
  box-shadow: 0 0 20px 0 #171b3a;
  background-color: #202334;
  @media (max-width: 575px){
    margin: 7px auto;
    width:100%;
  }  
  
`
const Label = styled.h1`
  margin-bottom:6px;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 300;
  color: #eff3f9;
  @media (max-width:768px) {
    font-size: 15px;
  }
`
const CoinScore = styled.p`
  margin-bottom:13px;
  font-family: sans-serif;
  font-size: 12px;
  color: #54617a;
  @media (max-width:768px) {
    font-size:11px;
  }
`
const Span = styled.span`
  font-size: 24px;
  font-family: sans-serif;
  font-weight:bold;
  margin-right:5px;
  color: #eff3f9;
  @media (max-width:768px) {
    font-size: 12px !important;
  }
`

const Block = (props) => {
  return (
    <InsideBlock >
          <Label>{props.valueName}</Label>
          <CoinScore>CoinScore</CoinScore>
          <Span >{props.amount}</Span>
          <TiArrowUpThick style={{color:"#475ff2"}} />
          <Span style={{fontSize:"14px",color:"#475ff2"}}>{props.pct}</Span>
    </InsideBlock>
  )
}

export default Block
