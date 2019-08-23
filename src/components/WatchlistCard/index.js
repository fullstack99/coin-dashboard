import React from "react"
import Col from "react-bootstrap/Col"
import WatchlistData from "./components/WatchlistData/index"
import Card from "@components/Card"
import CardHeader from "@components/CardHeader"

const WatchlistCard = () => {
  return (
    <Card>
      <CardHeader text="Watch List" />
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
