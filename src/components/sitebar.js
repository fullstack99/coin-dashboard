import React, { useState } from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { HamburgerCollapse } from "react-animated-burgers"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { useSiteMetadata } from "./../hooks/use-site-metadata"

const Hamburger = css`
  bottom: -2.5px;
  height: 24px;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 25px;
  width: 40px;
  z-index: 9999;
`

const StyledLink = styled(props => <Link {...props} />)`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  width: 100%;
`

var styles = {
  bmBurgerButton: {
    display: "none",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    display: "none",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
    textDecoration: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default props => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { navigation } = useSiteMetadata()

  const body = document.body.classList

  const bodyDisabler = menuOpen => {
    menuOpen === true
      ? body.add("scroll-disabler")
      : body.remove("scroll-disabler")
  }

  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
    bodyDisabler(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    bodyDisabler(false)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    bodyDisabler(!menuOpen)
  }

  return (
    <>
      <Menu
        styles={styles}
        {...props}
        isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}
      >
        {navigation.map((item, index) => {
          return (
            <StyledLink
              className="navigation"
              onClick={() => closeMenu()}
              to={item.url}
              key={index}
            >
              {item.label}
            </StyledLink>
          )
        })}
      </Menu>
      <HamburgerCollapse
        onClick={() => toggleMenu()}
        isActive={menuOpen}
        barColor={menuOpen ? "#fecd00" : "#fff"}
        css={Hamburger}
        className="d-block d-lg-none"
      />
    </>
  )
}
