import React from "react"

import Chart from "./components/Chart"

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
    responsive: true
  }

  return <Chart data={doughnuData} options={options} width="500" height="250" />
}
export default DoughnutData
