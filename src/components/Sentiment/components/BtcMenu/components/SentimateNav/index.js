import React from "react"
import styled from "@emotion/styled"
import SentimateData from "../SentimateData/index"

const ButtonWrapper = styled.button`
  width: 100%;
  -webkit-appearance: none;
  border: none;
  background-color: #1d1e2e;
  color: #8796b0;
  opacity: 0.4;
  font-size: 21px;
  line-height: 20px;
  min-width: 100px;
  margin-bottom: 10px;
  padding: 0.3125rem 1.25rem;
  padding-left: 0px;
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

const SentimateNav = () => {
  return (
    <ButtonsGroup>
      <ButtonWrapper
        style={{ opacity: "1", paddingLeft: "0px", padding: "0px" }}
      >
        <SentimateData
          socialmedia={"TWITTER"}
          description={"Posted on Twiter 10min ago.."}
        />
      </ButtonWrapper>
      <ButtonWrapper style={{ padding: "0px" }}>
        <SentimateData
          socialmedia={"REDDIT"}
          description={"Posted on FaceBook 32min ago.."}
        />
      </ButtonWrapper>
      <ButtonWrapper style={{ padding: "0px" }}>
        <SentimateData
          socialmedia={"FORUMS"}
          description={"Posted on Reddit 10min ago.."}
        />
      </ButtonWrapper>
    </ButtonsGroup>
  )
}

export default SentimateNav
