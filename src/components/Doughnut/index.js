import React from "react"
import styled from "@emotion/styled"
import { Doughnut } from "react-chartjs"

const Chart = styled(Doughnut)`
  @media (max-width: 575px) {
    position: absolute;
    left: -10%;
    top: 10%;
    width: 600px !important;
    height: 200px !important;;
  } 
  @media (max-width: 1100px) {
    width: 100% !important;    
    position: absolute;
    left: -10%;
    top: 10%;  
  }   
`
class DoughnutData extends React.Component {
  render() {
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
        color: " #5f2dc6",
        highlight: "#FFC870",
        label: "Yellow"
      }
    ]

    return <Chart data={doughnuData} width="525"/>
  }
}
export default DoughnutData
