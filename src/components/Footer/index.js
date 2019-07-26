import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { useSiteMetadata } from "@hooks/use-site-metadata"

import Logo from "@images/logo.svg"

const StyledFooter = styled.div`
  background-color: #1d2845;
  padding: 2rem 0;
`

const Nav = styled.div`
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`

const Unsorted = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const UnsortedItem = styled.li`
  float: right;
  margin-bottom: 0;
  text-align: center;
  width: 50%;

  @media (min-width: 992px) {
    text-align: right;
    width: auto;
  }

  &:first-child {
    a {
      padding-right: 0;
    }
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #f7f7f7;
  display: inline-block;
  line-height: 50px;
  width: 100%;
`

const Copyright = styled.div`
  font-size: 11px;
  text-align: center;
  display: inline-block;
  width: 100%;
`

const Footer = () => {
  const { navigation } = useSiteMetadata()

  return (
    <StyledFooter>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg={4}>
            <Logo />
          </Col>
          <Col xs lg={8}>
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
          </Col>
        </Row>
      </Container>
      <Copyright>© Copyright 2019 Coingeniuos.</Copyright>
    </StyledFooter>
  )
}

Footer.propTypes = {
  navigation: PropTypes.array.isRequired
}

Footer.defaultProps = {
  navigation: []
}

export default Footer
