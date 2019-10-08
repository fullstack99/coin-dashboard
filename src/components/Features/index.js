import React from "react"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Features = ({
  data: { preHeading, heading, features_boxes },
  fluid,
  calender
}) => {
  return (
    <section className="signals mb-0">
      <Container>
        <Row>
          <Col
            xs={12}
            md={5}
            className="offset-md-1 order-md-2 mt-md-5 mb-5 mb-md-0"
          >
            <Img fluid={fluid} alt="marketingdata" className="w-100 float" />
          </Col>
          <Col xs={12} md={6} className="order-md-1">
            <div className="mb-5">
              <p className="u-color-primary u-weight-smb u-ls-lg">
                {preHeading}
              </p>
              <h2 className="mb-3 mt-2 u-color-white">{heading}</h2>
            </div>
            {features_boxes.map((item, index) => (
              <div className="features__item mb-5" key={index}>
                <div className="features__item-media features__item-media--primary">
                  <img
                    src={calender.src}
                    alt="calender"
                    className="features__item-icon mb-0"
                  />
                </div>
                <div className="features__item-copy">
                  <h3 className="mb-3">{item.feature_title}</h3>
                  <p className="u-color-gray-lgt">{item.feature_text}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features
