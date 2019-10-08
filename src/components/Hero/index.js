import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const Hero = ({ data: { preHeading, heading, text, cta }, fluid }) => {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col className="col-12 col-md-6 order-md-2 col-lg-5 offset-lg-2 mb-5 mb-md-0">
            {console.log(fluid)}
            <Img
              fluid={fluid}
              alt="Illustration"
              className="w-100 px-5 px-md-0"
            />
            {/* <img
              src="images/illustration.png"
              alt="Illustration"
              className="w-100 px-5 px-md-0"
            /> */}
          </Col>
          <Col className="col-12 col-md-6 order-md-1 col-lg-5">
            <p className="u-color-primary u-weight-smb u-ls-lg">{preHeading}</p>
            <h1 className="my-4">{heading}</h1>
            <p className="p--md u-color-gray">{text}</p>
            <Link to="/contact" className="btn mt-5">
              {cta}
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
