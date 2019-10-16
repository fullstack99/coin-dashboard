import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Signals = ({ data: { preHeading, heading, text, signals_boxes } }) => {
  return (
    <section className="signals">
      <Container>
        <Row>
          <Col className="col-12">
            <div className="mb-5 pb-5">
              <p className="u-color-primary u-weight-smb u-ls-lg">
                {preHeading}
              </p>
              <h2 className="mb-3 mt-2 u-color-white">{heading}</h2>
              {/* <p className="u-color-gray-lgt">{text}</p> */}
            </div>
          </Col>
        </Row>
        <Row>
          {signals_boxes.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <div className="features__item">
                <div className="features__item-media">
                  <i className={`${item.icon} text-midnight-express`} style={{fontSize: "1.9rem"}}></i>
                </div>
                <div className="features__item-copy">
                  <h3 className="mb-3">{item.signal_title}</h3>
                  <p className="u-color-gray-lgt">{item.signal_text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Signals
