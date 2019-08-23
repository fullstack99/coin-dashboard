import React from "react"
import Col from "react-bootstrap/Col"
import CardData from "./components/CardData/index"
import Card from "@components/Card"

const TrendingCard = () => {
  return (
    <Card title="Trending">
      <Col style={{ marginTop: "25px" }}>
        <CardData field={"Coindesk"} />
        <CardData field={"Coin Telelgraph"} />
        <CardData field={"CNBC"} />
      </Col>
    </Card>
  )
}
export default TrendingCard
