import React from "react"
import styled from "styled-components"
import cx from "classnames"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TABLE_HEADER_COLOR = "#525862"
const TABLE_ROW_BACKGROUND_COLOR = "#262d3f"
const TABLE_ROW_TEXT_COLOR_VARIANT = "#5d6c76"

const TH = styled(({ className, children }) => (
  <th className={cx("font-weight-normal", className)}>{children}</th>
))`
  color: ${TABLE_HEADER_COLOR};
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.5px;
`

const RecordSet = styled.tr`
  background-color: ${TABLE_ROW_BACKGROUND_COLOR};
  color: ${TABLE_ROW_TEXT_COLOR_VARIANT};
  font-size: 12px;
  letter-spacing: normal;
  line-height: 1.09;
`

const CoinsMarkets = () => {
  return (
    <Container fluid className="pt-5">
      <Row>
        <Col>
          <h1>Coins</h1>
          <table className="pt-1 mt-2">
            <thead>
              <tr>
                <TH>&nbsp;</TH>
                <TH>&nbsp;&nbsp;</TH>
                <TH>&nbsp;</TH>
                <TH>Title</TH>
                <TH>Price</TH>
                <TH>Market Cap</TH>
                <TH>Volume</TH>
                <TH>Coin Score</TH>
                <TH>&nbsp;</TH>
              </tr>
            </thead>
            <tbody>
              <RecordSet>
                <td>01</td>
                <td>- -</td>
                <td>OO</td>
                <td className="text-white">Bitcoin</td>
                <td>$313,131,313.31</td>
                <td>$313,131,313.31</td>
                <td>$313,131,313.31</td>
                <td>+7.2</td>
                <td>...</td>
              </RecordSet>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  )
}

export default CoinsMarkets
