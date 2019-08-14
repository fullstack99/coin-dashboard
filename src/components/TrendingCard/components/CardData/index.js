import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Trendingdata = styled.section`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  color: #748aa1;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
  }
`
const TrendingDescripation = styled.section`
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    color: #748aa1;
    @media (max-width: 768px){
        width:100%
        font-size: 12px;
        height: auto;
    }
`
const TrendingRating = styled.section`
  width: 34px;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: right;
  color: #475ff2;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`
const CardData = props => {
  return (
    <Row style={{ paddingBottom: "20px" }}>
      <Col md={8} lg={9} sm={8} xs={9}>
        <Trendingdata>{props.field}</Trendingdata>
        <hr style={{ marginTop: "0.5em", marginBottom: "1em", width: "50%" }} />
        <TrendingDescripation>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ….
        </TrendingDescripation>
      </Col>
      <Col md={4} lg={3} sm={4} xs={3}>
        <TrendingRating style={{ color: "#475ff2", height: "28px" }}>
          7.2
        </TrendingRating>
      </Col>
    </Row>
  )
}
export default CardData
