import React from "react"
import styled from "@emotion/styled"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRegSun } from "react-icons/fa"
const ButtonWrapper = styled.button`  
  width: 160px;
  text-align: left;
  -webkit-appearance: none;
  border: none;
  background-color: #1d1e2e;
  color: #8796b0;
  opacity: 0.4;
  font-size: 17px;
  line-height: 20px;
  min-width: 100px;
  margin-bottom: 10px;
  padding: 0.3125rem 2rem 0px 0;
  &:focus,
  &:visited,
  &:active {
    outline: none;
  }
  &:active {
    opacity: 0.8;
    transform: scale(0.95);
  }
  &:hover {
    background: #333d58;
  }
  @media (max-width: 575px){
    font-size: 17px;
    width: 140px!important;
    width: 136px;
    text-align: left;
    
  }
`

const ButtonsGroup = styled.section`
  flex: 1;
  & > div {
    margin: 0 5px 15px;
    @media (min-width: 768px) {
      margin: 0 10px 15px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const BtcNav = () => {
  return (
    <ButtonsGroup vertical>
      <ButtonWrapper style={{opacity:"1"}}>
        <FaRegSun style={{ marginRight: "5px" }} />
        Overview
      </ButtonWrapper>
      <ButtonWrapper>
        <FaRegSun style={{ marginRight: "5px" }} />
        CG Trends
      </ButtonWrapper>
      <ButtonWrapper>
        <FaRegSun style={{ marginRight: "5px" }} />
        Network
      </ButtonWrapper>
      <ButtonWrapper>
        <FaRegSun style={{ marginRight: "5px" }} />
        Markets
      </ButtonWrapper>
      <ButtonWrapper>
        <FaRegSun style={{ marginRight: "5px" }} />
        News
      </ButtonWrapper>
      <ButtonWrapper>
        <FaRegSun style={{ marginRight: "5px" }} />
        Social
      </ButtonWrapper>
    </ButtonsGroup>
  )
}

export default BtcNav
