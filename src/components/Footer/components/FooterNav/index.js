import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { useSiteMetadata } from "@hooks/use-site-metadata"

const Nav = styled.div`
  flex-wrap: wrap;
  height: 100%;
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`

const Unsorted = styled.ul`
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const UnsortedItem = styled.li`
  align-items: center;
  display: flex;
  float: right;
  height: 100%;
  margin-bottom: 0;
  text-align: center;
  width: 50%;

  @media (min-width: 992px) {
    text-align: right;
    width: auto;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #f7f7f7;
  display: inline-block;
  height: 100%;
  line-height: 50px;
  width: 100%;
`

const FooterNav = () => {
  const { navigation } = useSiteMetadata()

  return (
    <Nav>
      <Unsorted>
        {navigation.reverse().map((item, index) => {
          return (
            <UnsortedItem key={index}>
              <StyledLink className="navigation" to={item.url}>
                {item.label}
              </StyledLink>
            </UnsortedItem>
          )
        })}
      </Unsorted>
    </Nav>
  )
}

FooterNav.propTypes = {
  navigation: PropTypes.object.isRequired
}

FooterNav.defaultProps = {
  navigation: {}
}

export default FooterNav
