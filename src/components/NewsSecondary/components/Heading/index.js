import React from "react"
import { string } from "prop-types"
import styled from "@emotion/styled"

import Tag from "@components/Tag"

import Title from "./components/Title"

const Heading = styled(({ title, tags, className }) => (
  <div className={`d-lg-flex align-items-center ${className}`}>
    <Title text={title} className="mt-1 mb-3 my-lg-0" />
    {tags.map((tag, index) => (
      <Tag key={index} text={tag.tag} />
    ))}
  </div>
))`
  margin-bottom: 12px;
`

Heading.propTypes = {
  title: string
}

Heading.defaultProps = {
  title: null
}

export default Heading
