import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CardHeader from "@components/CardHeader"
import CardHeading from "@components/CardHeading"

const Des = styled.section`
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.44;
  color: #748aa1;
  margin-top: 16px;
  margin-left: 15px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`
const Card = styled.section`
  width: 30%;
  margin-top: 3%;
  border-radius: 8px;
  border: solid 1px #313d4f;
  float: right;
  @media (max-width: 575px) {
    width: 100%;
    margin-top: 10%;
  }
`
const Descripation = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeading>Descripation</CardHeading>
      </CardHeader>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <Des>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
            purus non mauris lobortis suscipit. Fusce mauris massa, faucibus eu
            leo sed, condimentum accumsan ex.
          </Des>
        </Col>
        <Col md={12} lg={12} sm={12} style={{ marginTop: "14px" }}>
          <Des>Creator/Team</Des>
        </Col>
        <Col md={12} lg={12} sm={12}>
          <Des>www.bitcoin.com</Des>
        </Col>
      </Row>
    </Card>
  )
}
export default Descripation
