import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Container from "react-bootstrap/Container"

import Logo from "@images/logo.svg";

import NavigationDesktop from "../NavigationDesktop"

import { useSiteMetadata } from "@hooks/use-site-metadata"

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

const iconLogo = css`
  font-family: HelveticaNeue;
  margin-right: 1rem;
  opacity: 1;
  transition: all 100ms linear;
`

const Brand = css`
  font-family: "Roboto, sans-serif" !important;
  font-size: 32px;
  opacity: 1;
  position: relative;
  transition: all 100ms linear;
`

const Header = () => {
  const { navigation } = useSiteMetadata()

  return (
    <HeaderStyled>
      <Container fluid>
        <TopNav>
          <NavBrand>
            <Logo css={iconLogo} />
            <span css={Brand}>CoinGenious</span>
          </NavBrand>
          <NavigationDesktop pagesList={navigation} />
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
