import React from "react"

import Card from "@components/Card"

import CardData from "./components/CardData/"

const TrendingCard = () => (
  <Card title="Trending">
    <CardData
      from="Coindesk"
      post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur adipiscing elit."
    />
    <CardData
      from="Coin Telelgraph"
      post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur adipiscing elit."
    />
    <CardData
      from="CNBC"
      post="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur adipiscing elit."
    />
  </Card>
)

export default TrendingCard
