import React from "react"
import styled from "@emotion/styled"
import cx from "classnames"
import { array, string } from "prop-types"
import Container from "react-bootstrap/Container"

// components
import CoinIcon from "@components/CoinIcon"
import Title from "./components/Title"
import TabLink from "./components/TabLink"

const Wrapper = styled.div`
  background: #262d3f;
  padding-top: 60px;
`

const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.24px;
  line-height: 18px;
  padding-right: 2rem;

  @media (min-width: 992px) {
    width: 43%;
  }
`

const Overview = ({ sections, currentSection }) => (
  <Wrapper>
    <Container fluid className={cx("d-flex", "flex-column")}>
      <div className="d-flex">
        <CoinIcon
          position="relative"
          size={40}
          src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
          alt="BTC"
        />
        <Title className="ml-2 text-white">Bitcoin - BTC</Title>
      </div>
      <Paragraph className="pb-5 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Paragraph>
      <nav className="nav flex-column flex-sm-row">
        {sections.map((item, index) => (
          <TabLink
            isActive={item.url === `/news/${currentSection}`}
            key={index}
            to={item.url}
            text={item.text}
            title={`View ${item.text} data`}
          />
        ))}
      </nav>
    </Container>
  </Wrapper>
)

Overview.propTypes = {
  sections: array,
  currentSection: string
}
Overview.defaultProps = {
  sections: [],
  currentSection: null
}

export default Overview
