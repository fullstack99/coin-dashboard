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

const NavigationDesktop = ({ pagesList }) => {
  return (
    <div className="d-none d-lg-block">
      <Nav>
        {pagesList.map((item, index) => {
          return (
            <NavItem key={index}>
              <Link className="navigation" to={item.url}>
                {item.label}
              </Link>
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
