import styled from "@emotion/styled"
import { Doughnut } from "react-chartjs"

const Chart = styled(Doughnut)`
  display: flex;
  height: auto !important;
  overflow: hidden;
  position: absolute;
  width: 100% !important;
  top: 50%;
  transform: translateY(-50%);
`

export default Chart