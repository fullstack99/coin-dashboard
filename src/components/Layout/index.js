import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "../Header"
import Footer from "../Footer"
import SideBar from "../SideBar"

const AppWrapper = styled.div`
  position: relative;
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald:400,500,600&display=swap"
          rel="stylesheet"
        />
        >
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Helmet>
      <Global
        styles={css`
          .container-fluid {
            max-width: 1680px;

            @media (min-width: 992px) {
              margin: 0 auto;
              width: 94% !important;
            }

            @media (min-width: 1200px) {
              width: 90% !important;
            }
          }
        `}
      />
      <AppWrapper id="Layout">
        <Header />
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"Layout"} />
        <main id="page-wrap">{children}</main>
        <Footer />
      </AppWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
