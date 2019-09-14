import React from "react"
import { Router, navigate } from "@reach/router"

import Markets from "@compositions/Markets"

const RedirectIndex = () => {
  navigate("/")
  return null
}
const MarketsPage = () => (
  <Router>
    <Markets path="/markets/:section" />
    <RedirectIndex path="/markets/" />
  </Router>
)

export default MarketsPage
