import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { useSiteMetadata } from "@hooks/use-site-metadata"

const Nav = styled.div`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`

const Unsorted = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;

  @media (min-width: 992px) {
    flex-direction: row;
    float: right;
  }
`

const UnsortedItem = styled.li`
  margin: 20px 0;
  text-align: center;
  width: 100%;

  @media (min-width: 992px) {
    margin: 0;
    text-align: right;
    width: auto;
  }

  &:last-child {
    a {
      padding-right: 0;
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #9dafbd;
  line-height: 50px;
`

const FooterNav = () => {
  const { navigation } = useSiteMetadata()

  return (
    <Nav>
      <Unsorted>
        {navigation.map((item, index) => {
          return (
            <UnsortedItem key={index}>
              {item.disabled ? (
                <StyledLink className="navigation" to={item.url}>
                  {item.label}
                </StyledLink>
              ) : (
                <p className="navigation disabled">{item.label}</p>
              )}
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
