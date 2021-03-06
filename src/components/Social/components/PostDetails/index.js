import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

import PostedOn from "./components/PostedOn"

const PostDetails = styled(({ type, postedOn, postedAt }) => (
  <PostedOn type={type} postedOn={postedOn} postedAt={postedAt} />
))`
  color: #748aa1;
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 300;
  height: auto;
  line-height: 1.43;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

PostDetails.propTypes = {
  type: string,
  postedOn: string,
  postedAt: string
}

PostDetails.defaultProps = {
  type: null,
  postedOn: null,
  postedAt: null
}

export default PostDetails
