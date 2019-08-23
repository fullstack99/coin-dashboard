import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import CurrencyName from "./components/CurrencyName"
import Price from "./components/Price"

const WatchlistData = props => {
  const { currency, price } = props
  return (
    <Row>
      <Col>
        <CurrencyName>{currency}</CurrencyName>
      </Col>
      <Col>
        <Price price={price} />
      </Col>
    </Row>
  )
}

export default WatchlistData
