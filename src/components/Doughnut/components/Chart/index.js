import styled from "@emotion/styled"
import { Doughnut } from "react-chartjs"

const Chart = styled(Doughnut)`
  @media (max-width: 575px) {
    height: 200px !important;
    left: 14% !important;
    position: absolute;
    top: 10%;
    width: 600px !important;
  }

  @media (max-width: 1100px) {
    height: 200px !important;
    left: 20%;
    position: absolute;
    top: 10%;
    width: 300px !important ;
  }

  @media (max-width: 768px) {
    height: 200px !important;
    left: -36%;
    top: 10%;
    width: 100% !important ;
  }
`

export default Chart