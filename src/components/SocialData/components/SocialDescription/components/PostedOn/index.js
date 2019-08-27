import React from "react"
import { string } from "prop-types"
import { css } from "@emotion/core"

const postDetails = css`
  font-family: Roboto;
  font-size: 14px;

  span {
    font-family: Roboto;
    font-size: 14px;
  }

  .posted {
    color: #fff;
  }

  .stread {
    color: #f5a623;
  }

  .published {
    color: #bd10e0;
  }

  .twitter,
  .facebook,
  .medium {
    color: #4a90e2;
    text-transform: capitalize;
  }

  .reddit,
  .youtube {
    color: #d4243b;
    text-transform: capitalize;
  }
`

const PostedOn = ({ type, postedOn, postedAt }) => (
  <div css={postDetails}>
    <span
      className={
        type === "post"
          ? "posted"
          : type === "stream"
          ? "stread"
          : type === "article"
          ? "published"
          : ""
      }
    >
      {type === "post"
        ? "Posted "
        : type === "stream"
        ? "Stread "
        : type === "article"
        ? "Published "
        : ""}
    </span>
    <span>
      {type === "post"
        ? "on "
        : type === "stream"
        ? "lived on "
        : type === "article"
        ? "an article on "
        : ""}
    </span>
    <span
      className={
        postedOn === "facebook"
          ? "facebook"
          : postedOn === "twitter"
          ? "twitter"
          : postedOn === "youtube"
          ? "youtube"
          : postedOn === "reddit"
          ? "reddit"
          : postedOn === "medium"
          ? "medium"
          : ""
      }
    >
      {postedOn}{" "}
    </span>
    <span>{postedAt}</span>
  </div>
)

PostedOn.propTypes = {
  type: string,
  postedOn: string,
  postedAt: string
}

PostedOn.defaultProps = {
  type: null,
  postedOn: null,
  postedAt: null
}

export default PostedOn
