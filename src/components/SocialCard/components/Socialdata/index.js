import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Hr from "@components/Hr"
import SocialRating from "./components/SocialRating"
import SocialUsername from "./components/SocialUsername"
import SocialDescription from "./components/SocialDescription"

const CardData = ({ username, type, postedOn, postedAt }) => {
  return (
    <Row className="mb-3">
      <Col xs={9} sm={10} lg={9}>
        <SocialUsername>{username}</SocialUsername>
        <SocialDescription
          type={type}
          postedOn={postedOn}
          postedAt={postedAt}
        />
        <Hr />
      </Col>
      <Col xs={3} sm={2} lg={3}>
        <SocialRating>7.2</SocialRating>
      </Col>
    </Row>
  )
}

export default CardData
