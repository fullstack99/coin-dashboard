import React from "react"
import styled from "@emotion/styled"
import Col from "react-bootstrap/Col"
import SocialData from "./components/Socialdata/index"
import CardHeader from "@components/CardHeader"

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
    <Card>
      <CardHeader text="Social" />
      <Col>
        <SocialData
          username={"@theRealMacafee"}
          descripation={"Posted on Twiter 10min ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          descripation={"Posted on FaceBook 32min ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          descripation={"Posted on Reddit 10min ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          descripation={"Stread live on YouTube 1hr ago.."}
        />
        <SocialData
          username={"@theRealMacafee"}
          descripation={"Published an article  on Meduim 10min ago.."}
        />
      </Col>
    </Card>
  )
}
export default SocialCard
