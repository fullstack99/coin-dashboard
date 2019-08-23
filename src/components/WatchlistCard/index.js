import React from "react"
import Col from "react-bootstrap/Col"

import Card from "@components/Card"

import WatchlistData from "./components/WatchlistData"

const WatchlistCard = () => {
  return (
    <Card title="Watch List">
      <Col style={{ marginTop: "25px" }}>
        <WatchlistData currency={"Bitcoin"} price={"$10,317.41"} />
        <WatchlistData currency={"Etherem"} price={"$310.33"} />
        <WatchlistData currency={"XRP"} price={"$0.81"} />
        <WatchlistData currency={"Litecoin"} price={"$92.92"} />
        <WatchlistData currency={"Bitcoin cash"} price={"$313.42"} />
        <WatchlistData currency={"EOS"} price={"$4.32"} />
        <WatchlistData currency={"EOS"} price={"$4.32"} />
        <WatchlistData currency={"EOS"} price={"$4.32"} />
      </Col>
    </Card>
  )
}
export default WatchlistCard
