import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Container from "react-bootstrap/Container"

import { HamburgerCollapse } from "react-animated-burgers"

// import Logo from "./logo"

import Logo from "./../images/logo.svg";

import NavigationDesktop from "./navigationDesktop"

import { useSiteMetadata } from "./../hooks/use-site-metadata"

const HeaderStyled = styled.header`
  background: #262d3f;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`

const TopNav = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 76px;
  transition: all 100ms linear;
`

const NavBrand = styled.div`
  display: flex;
  padding: 0;
  transition: all 100ms linear;
`

const IconLogo = css`
  margin-right: 1rem;
  opacity: 1;
  transition: all 100ms linear;
`

const Brand = css`
  font-family: 'Oswald', sans-serif;
  font-size: 32px;
  font-weight: 600;
  opacity: 1;
  position: relative;
  transition: all 100ms linear;
`

const Hamburger = css`
  bottom: -2.5px;
  padding: 0;
  position: relative;

  &:focus {
    outline: 0;
  }
`

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  const { navigation } = useSiteMetadata()

  return (
    <HeaderStyled>
      <Container fluid>
        <TopNav>
          <NavBrand>
            <Logo css={IconLogo} />
            <span css={Brand}>Coingenious</span>
          </NavBrand>
          <NavigationDesktop pagesList={navigation} />
          <HamburgerCollapse
            onClick={() => setMenuActive(!menuActive)}
            isActive={menuActive}
            barColor={menuActive ? "#fecd00" : "#fff"}
            css={Hamburger}
            className="d-block d-lg-none"
          />
        </TopNav>
      </Container>
    </HeaderStyled>
  )
}

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
}

Header.defaultProps = {
  navigation: {},
}

export default Header
