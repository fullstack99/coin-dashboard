import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"

const Search = styled(({ className }) => (
  <Form className={className}>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Search for coins, markets, etc..."
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  </Form>
))`
  margin-bottom: 0;

  .input-group-text {
    background: transparent;
    border-color: transparent;

    svg {
      path {
        fill: #7a8fa6;
      }
    }
  }

  input {
    background: transparent;
    border: 0;
    border-radius: 0;
    font-size: 14px;
    margin-left: 2px;
    margin-right: 2px;
    width: 230px !important;

    &:hover,
    &:visited {
      background: #26293f;
    }
  }
`

export default Search
