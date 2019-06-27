import React from 'react'
import styled from "@emotion/styled"
import Row from "react-bootstrap/Row"
import cx from "classnames"

const ButtonsGroup = styled(({ className, ...rest }) => (
  <Row className={cx('justify-content-center', 'flex-wrap', className)} {...rest} />
))`
  & > div {
    margin: 0 5px 20px;
  }
`

export default ButtonsGroup
