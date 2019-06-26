import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.ul`
  flex-wrap: wrap;
  list-style: none;
  list-style-type: none;
  margin-bottom: 0;
  padding-left: 0;
`

const NavItem = styled.li`
  float: left;
  margin: 0;
`

const StyledLink = styled(props => <Link {...props} />)`
  background-image: none;
  bottom: -2px;
  color: #fff;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.8;
  line-height: 1.4;
  padding: 0 0.9rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 100ms linear;

  &:hover {
    color: #ff3d5e;
    text-decoration: none;
  }
`

const NavigationDesktop = ({ pagesList }) => {
  return (
    <div className="d-none d-lg-block">
      <Nav>
        {pagesList.map((item, index) => {
          return (
            <NavItem key={index}>
              <StyledLink className="navigation" to={item.url}>
                {item.label}
              </StyledLink>
            </NavItem>
          )
        })}
      </Nav>
    </div>
  )
}

NavigationDesktop.propTypes = {
  pagesList: PropTypes.array.isRequired,
}

NavigationDesktop.defaultProps = {
  pagesList: [],
}

export default NavigationDesktop
