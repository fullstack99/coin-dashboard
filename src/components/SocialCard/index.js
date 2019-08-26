import React from "react"

import Card from "@components/Card"

import SocialData from "./components/SocialData"

const SocialCard = () => (
  <Card title="Social">
    <SocialData
      username="@theRealMacafee"
      type="post"
      postedOn="twitter"
      postedAt="10min ago.."
    />
    <SocialData
      username="@theRealMacafee"
      type="post"
      postedOn="facebook"
      postedAt="32min ago.."
    />
    <SocialData
      username="@theRealMacafee"
      type="post"
      postedOn="reddit"
      postedAt="10min ago.."
    />
    <SocialData
      username="@theRealMacafee"
      type="stream"
      postedOn="youtube "
      postedAt="1hr ago.."
    />
    <SocialData
      username="@theRealMacafee"
      type="article"
      postedOn="medium"
      postedAt="10min ago.."
    />
  </Card>
)

export default SocialCard
