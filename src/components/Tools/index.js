import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Tools = ({ data: { preHeading, heading, text, tools_boxes } }) => {
  return (
    <section className="features">
      <Container>
        <Row>
          <Col className="col-12">
            <div className="mb-5 pb-5 text-center">
              <p className="u-color-primary u-weight-smb u-ls-lg">
                {preHeading}
              </p>
              <h2 className="mb-3 mt-2 u-color-mirage">{heading}</h2>
              <p>{text}</p>
            </div>
          </Col>
        </Row>
        <Row>
          {tools_boxes.map((item, index) => (
            <Col xs={6} md={4} key={index}>
              <div className="features__box">
                <img
                  className="mb-0"
                  src="http://nickshanekearney.com/webPreview/images/icon-placeholder.png"
                  alt="Icon"
                />
                <h4 className="mt-4 mb-3 text-midnight-express">
                  {item.tool_title}
                </h4>
                <p className="p--md">{item.tool_text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Tools
