import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CardHeader from "@components/CardHeader"

const Des = styled.section`
  color: #748aa1;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.44;
  margin-left: 15px;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Card = styled.section`
  border: solid 1px #313d4f;
  border-radius: 8px;
  float: right;
  margin-top: 3%;
  width: 30%;

  @media (max-width: 575px) {
    margin-top: 10%;
    width: 100%;
  }
`

const Description = () => {
  return (
    <Card>
      <CardHeader text="Description" />
      <Row>
        <Col sm={12}>
          <Des>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
            purus non mauris lobortis suscipit. Fusce mauris massa, faucibus eu
            leo sed, condimentum accumsan ex.
          </Des>
        </Col>
        <Col sm={12} style={{ marginTop: "14px" }}>
          <Des>Creator/Team</Des>
        </Col>
        <Col sm={12}>
          <Des>www.bitcoin.com</Des>
        </Col>
      </Row>
    </Card>
  )
}
export default Description
