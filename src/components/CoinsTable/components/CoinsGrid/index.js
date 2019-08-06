import React from "react"
import styled from "@emotion/styled"
import Table from "react-bootstrap/Table"

const CoinsGrid = styled(props => <Table {...props} />)`
  margin: 0;

  thead tr th,
  tbody tr td {
    border-color: transparent;
    color: #afbdd1;
    font-weight: bold;
    font-size: 14px;
    padding: 0.5rem;

    &:first-of-type {
      padding-left: 1rem;
    }
  }

  tbody tr {
    &:hover {
      background-color: rgba(216, 216, 216, 0.1) !important;
    }
  }
`

export default CoinsGrid
