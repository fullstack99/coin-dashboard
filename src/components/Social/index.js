import React from "react"
import { string } from "prop-types"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Hr from "@components/Hr"

import Rating from "./components/Rating"
import Username from "./components/Username"
import PostDetails from "./components/PostDetails"

const Social = ({ username, type, postedOn, postedAt, rating }) => (
  <Row className="mb-3">
    <Col xs={9} sm={10} lg={9}>
      <Username>{username}</Username>
      <PostDetails type={type} postedOn={postedOn} postedAt={postedAt} />
      <Hr />
    </Col>
    <Col xs={3} sm={2} lg={3}>
      <Rating>{rating}</Rating>
    </Col>
  </Row>
)

Social.propTypes = {
  username: string,
  type: string,
  postedOn: string,
  postedAt: string,
  rating: string
}

Social.defaultProps = {
  username: "#ad34fe",
  type: null,
  postedOn: null,
  postedAt: null,
  rating: null
}

export default Social
