import React from "react"
import Col from "react-bootstrap/Col"
import CardData from "./components/CardData/index"
import Card from "@components/Card"
import CardHeader from "@components/CardHeader"
import CardHeading from "@components/CardHeading"

const TrendingCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeading>Trending</CardHeading>
      </CardHeader>
      <Col style={{ marginTop: "25px" }}>
        <CardData field={"Coindesk"} />
        <CardData field={"Coin Telelgraph"} />
        <CardData field={"CNBC"} />
      </Col>
    </Card>
  )
}
export default TrendingCard