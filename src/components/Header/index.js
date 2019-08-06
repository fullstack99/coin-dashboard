import React from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"

import LogoWrapper from "./components/LogoWrapper"
import NavigationDesktop from "./components/NavigationDesktop"
import TopNav from "./components/TopNav"

import Logo from "@images/logo-small.svg";

const Header = styled(() => (
  <Container fluid>
    <TopNav>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavigationDesktop />
    </TopNav>
  </Container>
))`
  background: #262d3f;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`

export default Header
