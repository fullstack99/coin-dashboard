import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { useSiteMetadata } from "@hooks/use-site-metadata"

const Nav = styled.div`
  padding-left: 0;
  margin-bottom: 0;
  width: 100%;
`

const Unsorted = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
  }

  @media (min-width: 992px) {
    float: right;
  }
`

const UnsortedItem = styled.li`
  margin-bottom: 10px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    flex: 1;
    width: auto;
  }

  @media (min-width: 992px) {
    flex: none;
    margin: 0;
    text-align: right;
  }

  &:last-child {
    a,
    p {
      @media (min-width: 992px) {
        padding-right: 0;
      }
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #9dafbd;
  line-height: 50px;
`

const DisabledLink = styled.p`
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
                <DisabledLink className="navigation disabled">
                  {item.label}
                </DisabledLink>
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
