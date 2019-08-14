import React from "react"
import styled from "@emotion/styled"
import { Doughnut } from "react-chartjs"

const Chart = styled(Doughnut)`
  @media (max-width: 575px) {
    position: absolute;
    left: 14% !important;
    top: 10%;
    width: 600px !important;
    height: 200px !important;
  }
  @media (max-width: 1100px) {
    width: 300px !important ;
    position: absolute;
    left: 20%;
    top: 10%;
    height: 200px !important;
  }
  @media (max-width: 768px) {
    width: 100% !important ;
    // position: absolute;
    left: -36%;
    top: 10%;
    height: 200px !important;
  }
 
`
const DoughnutData = () => {
  const doughnuData = [
    {
      value: 300,
      color: "#a633f8",
      highlight: "#FF5A5E",
      label: "Red"
    },
    {
      value: 100,
      color: "#008eff",
      highlight: "#5AD3D1",
      label: "Green"
    },
    {
      value: 50,
      color: "#5f2dc6",
      highlight: "#FFC870",
      label: "Yellow"
    }
  ]
  const options = {
    responsive:false
  };

  return <Chart data={doughnuData} options={options} width="500" height="250"/>
}
export default DoughnutData
