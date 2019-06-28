import React from "react"
import styled from "@emotion/styled"
import Table from "react-bootstrap/Table"

const CoinsGrid = styled(props => <Table {...props} />)`
  thead tr th,
  tbody tr td {
    border-color: transparent;
    color: white;
    font-weight: normal;
    font-size: 14px;
    padding: 0.5rem;
  }
`

export default CoinsGrid
