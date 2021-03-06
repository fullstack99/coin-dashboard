import React from "react"
import { object } from "prop-types"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import CoinIcon from "@components/CoinIcon"
import BackgroundImage from "@components/BackgroundImage"
import Clock from "@components/Clock"
import Time from "@components/Time"

import Heading from "./components/Heading"
import ReadNow from "./components/ReadNow"

const NewsSecondary = styled(
  ({
    data: { url, title, imgSrc, iconSrc, iconAlt, tags, description, time },
    className
  }) => {
    return (
      <Row className={className}>
        <Col md={4} lg={3}>
          <a href={url}>
            <CoinIcon src={iconSrc} alt={iconAlt} />
            <BackgroundImage src={imgSrc} type="secondary" />
          </a>
        </Col>
        <Col md={8} lg={9}>
          <Heading title={title} tags={tags} />
          <p>{description}</p>
          <div className="d-flex align-items-center">
            <Clock />
            <Time text={time} />
            <ReadNow>Read now</ReadNow>
          </div>
        </Col>
      </Row>
    )
  }
)`
  &:hover {
    text-decoration: none;
  }
`

NewsSecondary.propTypes = {
  data: object
}

NewsSecondary.defaultProps = {
  data: {}
}

export default NewsSecondary
