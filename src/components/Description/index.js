import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Card from "@components/Card"

const Des = styled.section`
  color: #748aa1;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.44;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Description = () => {
  return (
    <Card title="Description">
      <Row>
        <Col sm={12}>
          <Des>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
            purus non mauris lobortis suscipit. Fusce mauris massa, faucibus eu
            leo sed, condimentum accumsan ex.
          </Des>
        </Col>
        <Col sm={12}>
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
