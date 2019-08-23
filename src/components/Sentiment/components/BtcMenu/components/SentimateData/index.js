import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { IoMdArrowDropup } from "react-icons/io"

const Socialmedia = styled.section`
  height: 13px;
  font-family: Interstate;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.4px;
  color: #626f86;
  margin-bottom: 10.3px;
  margin-top: 12%;
`

const SentimateData = props => {
  return (
    <Row>
      <Col md={12} lg={12} xs={12} sm={12}>
        <Socialmedia>
          <span style={{ float: "left" }}>{props.socialmedia} </span>
          <span style={{ float: "right", color: "#475ff2", fontSize: "14px" }}>
            7.2% <IoMdArrowDropup style={{ fontSize: "20px" }} />
          </span>
          <span
            style={{
              float: "right",
              marginRight: "5px",
              fontSize: "18px",
              color: "white"
            }}
          >
            7.2
          </span>
        </Socialmedia>
      </Col>
      <Col
        md={12}
        lg={12}
        xs={12}
        sm={12}
        style={{ display: "flex", paddingTop: "10px" }}
      >
        <span
          style={{
            backgroundColor: "#475ff2",
            height: "24.8px",
            width: "72%",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px"
          }}
        ></span>
        <span
          style={{
            backgroundColor: "#75abd7",
            height: "24.8px",
            width: "28%",
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px"
          }}
        ></span>
      </Col>
    </Row>
  )
}
export default SentimateData
