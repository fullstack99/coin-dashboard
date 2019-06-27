import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { useSiteMetadata } from "@hooks/use-site-metadata"
import SocialFooter from "../SocialFooter"

const StyledFooter = styled.div`
  background-color: #1d2845;
  padding: 60px 0;
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
  float: left;
  text-align: center;
  width: 50%;

  @media (min-width: 992px) {
    width: 25%;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: #f7f7f7;
  display: inline-block;
  padding: 1rem 0;
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
          <Col xs lg="8">
            <Nav>
              <Unsorted>
                {navigation.map((item, index) => {
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
      <SocialFooter />
      <Copyright>© Copyright 2019 Coingeniuos.</Copyright>
    </StyledFooter>
  )
}

Footer.propTypes = {
  navigation: PropTypes.array.isRequired,
}

Footer.defaultProps = {
  navigation: [],
}

export default Footer
