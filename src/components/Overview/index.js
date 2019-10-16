import React from "react"
import cx from "classnames"
import { array, string, node, any } from "prop-types"
import styled from "styled-components"
import Container from "react-bootstrap/Container"

// components
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import Paragraph from "./components/Paragraph"
import TabLink from "./components/TabLink"

const TabsContainer = styled.div``

const TabsNav = styled.nav`
  flex-wrap: nowrap;
  list-style: none;
  margin-bottom: 0;
  order: 2;
  overflow-x: scroll;
  padding-left: 0;
  position: relative;

  &:after {
    background-image: linear-gradient(90deg, transparent, #262d3e);
    content: " ";
    height: 40px;
    pointer-events: none;
    position: fixed;
    right: 0;
    width: 100px;
  }

  @media (min-width: 768px) {
    flex-wrap: inherit;
    order: 1;
    overflow-x: inherit;
    position: relative;

    &:after {
      content: none;
    }
  }
`
const CallToActionContainer = styled.div`
  order: 1;

  @media (min-width: 768px) {
    order: 2;
  }
`

const Overview = ({
  location,
  sections,
  icon,
  title,
  description,
  callToAction
}) => (
  <Wrapper>
    <Container fluid className={cx("d-flex", "flex-column")}>
      <div className="d-flex">
        {icon}
        <Title className={cx("text-white", { "ml-2": !!icon })}>{title}</Title>
      </div>
      <Paragraph className="pb-3 mb-3">{description}</Paragraph>
      <TabsContainer className="d-flex flex-column flex-md-row justify-content-between">
        <TabsNav className="d-flex flex-row">
          {sections.map((item, index) => (
            <TabLink
              isActive={item.url === location.pathname}
              key={index}
              to={item.url}
              text={item.text}
              title={`View ${item.text} data`}
            />
          ))}
        </TabsNav>
        {callToAction && (
          <CallToActionContainer className="position-relative">
            {callToAction}
          </CallToActionContainer>
        )}
      </TabsContainer>
    </Container>
  </Wrapper>
)

Overview.propTypes = {
  location: any.isRequired,
  sections: array,
  title: string,
  icon: node,
  description: string,
  callToAction: node
}
Overview.defaultProps = {
  sections: [],
  title: null,
  icon: null,
  description: null,
  callToAction: null
}

export default Overview
