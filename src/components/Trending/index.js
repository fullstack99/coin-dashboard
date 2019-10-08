import React from "react"
import { string } from "prop-types"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Hr from "@components/Hr"

import From from "./components/From"
import Post from "./components/Post"
import Rating from "./components/Rating"

const Trending = ({ from, post, rating }) => (
  <Row className="mb-xs-3 mb-md-5">
    <Col xs={9} sm={10} lg={9}>
      <From>{from}</From>
      <Hr />
      <Post>{post}</Post>
    </Col>
    <Col xs={3} sm={2} lg={3}>
      <Rating className="text-royal-blue">{rating}</Rating>
    </Col>
  </Row>
)

Trending.propTypes = {
  from: string,
  post: string,
  rating: string
}

Trending.defaultProps = {
  from: null,
  post: null,
  rating: null
}

export default Trending
