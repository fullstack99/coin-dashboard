import React from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Copyright from "./components/Copyright"
import LogoWrapper from "./components/LogoWrapper"
import FooterNav from "./components/FooterNav"

import Logo from "@images/logo-small.svg"

const StyledFooter = styled.section`
  background-color: #1d2845;
`

const Footer = () => (
  <StyledFooter>
    <Container fluid className="py-5">
      <Row className="justify-content-md-center align-items-center">
        <Col xs={12} lg={4}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Col>
        <Col xs={12} lg={8}>
          <FooterNav />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Copyright>© Copyright 2019 Coingenius.</Copyright>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
)

export default Footer
