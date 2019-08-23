import React from "./node_modules/react"
import Row from "./node_modules/react-bootstrap/Row"
import Col from "./node_modules/react-bootstrap/Col"

import SocialRating from "./components/SocialRating"
import SocialUsername from "./components/SocialUsername"
import SocialDescription from "./components/SocialDescription"

const CardData = props => {
  return (
    <Row style={{ marginTop: "25px", paddingBottom: "20px" }}>
      <Col xs={9} sm={8} md={8} lg={8}>
        <SocialUsername>{props.username}</SocialUsername>
        <SocialDescription>{props.descripation}</SocialDescription>
        <hr
          style={{ marginTop: "0.5em", marginBottom: "0.5em", width: "50%" }}
        />
      </Col>
      <Col xs={3} sm={4} md={4} lg={4}>
        <SocialRating>
          7.2
        </SocialRating>
      </Col>
    </Row>
  )
}

export default CardData
