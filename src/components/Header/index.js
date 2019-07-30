import React from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"

import Logo from "@components/Logo"

import LogoWrapper from "./components/LogoWrapper"
import TopNav from "./components/TopNav"
import NavigationDesktop from "./components/NavigationDesktop"

const HeaderStyled = styled.header`
  background: #262d3f;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`

const Header = () => {
  return (
    <HeaderStyled>
      <Container fluid>
        <TopNav>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <NavigationDesktop />
        </TopNav>
      </Container>
    </HeaderStyled>
  )
}

export default Header
