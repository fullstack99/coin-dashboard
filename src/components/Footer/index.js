import React from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Copyright from "@components/Footer/components/Copyright"
import Logo from "@components/Logo"
import LogoWrapper from "@components/Footer/components/LogoWrapper"
import FooterNav from "@components/Footer/components/FooterNav"

const StyledFooter = styled.section`
  background-color: #1d2845;
  padding: 2rem 0;
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg={4}>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Col>
          <Col xs lg={8}>
            <FooterNav />
          </Col>
        </Row>
      </Container>
      <Copyright>© Copyright 2019 Coingenius.</Copyright>
    </StyledFooter>
  )
}

export default Footer
