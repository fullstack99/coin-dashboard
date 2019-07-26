import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import cx from "classnames"

const ButtonsGroup = styled(({ className, ...rest }) => (
  <Row
    className={cx("justify-content-center", "flex-wrap", className)}
    {...rest}
  />
))`
  margin-bottom: 75px;

  & > div {
    margin: 0 15px 15px 0;

    &:last-child {
      margin-right: 0;
    }
  }
`

export default ButtonsGroup
