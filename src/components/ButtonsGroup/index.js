import React from "react"
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import cx from "classnames"

const ButtonsGroup = styled(({ className, ...rest }) => (
  <Row
    className={cx("justify-content-center", "flex-wrap", "mb-5", className)}
    {...rest}
  />
))`
  flex: 1;

  & > div {
    margin: 0 5px 15px;

    @media (min-width: 768px) {
      margin: 0 10px 15px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`

export default ButtonsGroup
