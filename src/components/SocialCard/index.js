import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"

import SocialData from "./components/SocialData"

const Card = styled.section`
  border-radius: 8px;
  border: solid 1px #313d4f;
  width: 100%;

  @media (max-width: 575px) {
    margin-bottom: 10%;
    margin-left: 0px;
    margin-top: 10%;
    width: 100% !important;
  }
`

const SocialCard = () => {
  return (
    <Card title="Social">
      <Col>
        <SocialData
          username={"@theRealMacafee"}
          description={"Posted on Twiter 10min ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          description={"Posted on FaceBook 32min ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          description={"Posted on Reddit 10min ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          description={"Stread live on YouTube 1hr ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          description={"Published an article  on Meduim 10min ago.."}
        />
      </Col>
    </Card>
  )
}
export default SocialCard
