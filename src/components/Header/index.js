import React from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"

import Notifier from "@components/Notifier"

import LogoWrapper from "./components/LogoWrapper"
import Search from "./components/Search"
import NavigationDesktop from "./components/NavigationDesktop"
import TopNav from "./components/TopNav"

import Logo from "@svg/logo-small.svg"

const Header = styled(() => (
  <Container fluid>
    <TopNav>
      <div className="d-flex">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Search />
      </div>
      <div className="d-flex">
        <Notifier />
        <NavigationDesktop />
      </div>
    </TopNav>
  </Container>
))`
  background: #262d3f;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`

export default Header
