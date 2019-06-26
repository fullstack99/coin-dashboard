import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import fontawesome from "@fortawesome/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { useSiteMetadata } from "./../hooks/use-site-metadata"

fontawesome.library.add(fab)

const Nav = styled.div`
  flex-wrap: wrap;
  list-style-type: none;
  list-style: none;
  margin-bottom: 0;
  marginp-top: 40px;
  padding-left: 0;
`

const Unsorted = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const UnsortedItem = styled.li`
  float: left;
  padding: 60px 0;
  width: 20%;
`
const SocialNetwork = styled.a`
  background-image: none;
  color: #00e5ff;
  display: inline-block;
  font-size: 32px;
  text-align: center;
  transition: all 250ms linear;
  width: 100%;

  &:hover {
    color: #fecd00;
    transform: scale(1.125);
  }
`

const Social = () => {
  const { socials } = useSiteMetadata()

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <Nav>
            <Unsorted>
              {socials.map((item, index) => {
                return (
                  <UnsortedItem key={index}>
                    <SocialNetwork
                      target="_blank"
                      href={item.url}
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon size="lg" icon={["fab", item.icon]} />
                    </SocialNetwork>
                  </UnsortedItem>
                )
              })}
            </Unsorted>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

Social.propTypes = {
  socials: PropTypes.object.isRequired,
}

Social.defaultProps = {
  socials: {},
}

export default Social
