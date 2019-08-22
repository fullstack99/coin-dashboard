import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SocialRating = styled.section`
  height: auto;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: right;
  color: #475ff2;
  float:right;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
const SocialUsername = styled.section`
  height: auto;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: #748aa1;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const SocialDescripation = styled.section`
  height: auto;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.43;
  color: #748aa1;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const CardData = props => {
  return (
    <Row style={{ marginTop: "25px", paddingBottom: "20px" }}>
      <Col md={8} lg={8} sm={8} xs={9}>
        <SocialUsername>{props.username}</SocialUsername>
        <SocialDescripation>{props.descripation}</SocialDescripation>
        <hr
          style={{ marginTop: "0.5em", marginBottom: "0.5em", width: "50%" }}
        />
      </Col>
      <Col md={4} lg={4} sm={4} xs={3}>
        <SocialRating style={{ color: "#475ff2", height: "28px" }}>
          7.2
        </SocialRating>
      </Col>
    </Row>
  )
}
export default CardData
