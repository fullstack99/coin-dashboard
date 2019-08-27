import React from "react"
import { string } from "prop-types"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Hr from "@components/Hr"

import SocialRating from "./components/SocialRating"
import SocialUsername from "./components/SocialUsername"
import SocialDescription from "./components/SocialDescription"

const CardData = ({ username, type, postedOn, postedAt, rating }) => (
  <Row className="mb-3">
    <Col xs={9} sm={10} lg={9}>
      <SocialUsername>{username}</SocialUsername>
      <SocialDescription type={type} postedOn={postedOn} postedAt={postedAt} />
      <Hr />
    </Col>
    <Col xs={3} sm={2} lg={3}>
      <SocialRating>{rating}</SocialRating>
    </Col>
  </Row>
)

CardData.propTypes = {
  username: string,
  type: string,
  postedOn: string,
  postedAt: string,
  rating: string
}

CardData.defaultProps = {
  username: "#ad34fe",
  type: null,
  postedOn: null,
  postedAt: null,
  rating: null
}

export default CardData
