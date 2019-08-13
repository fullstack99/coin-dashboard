import React from "react"
import styled from "@emotion/styled"
let BarChart = require("react-chartjs").Bar
let chartData = {
  labels: ["Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8", "Jan6"],
  datasets: [
    {
      fillColor: "#6265f1",
      // backgroundColor: "rgba(265,265,265,1)",
      // highlightFill: "rgba(265,265,265,1)",
      // highlightStroke: "rgba(265,265,265,1)",
      data: [12, 10, 18, 8, 2, 16, 4, 12]
    },
    {
      fillColor: "#6265f1",
      // backgroundColor: "rgba(265,265,265,1)",
      // highlightFill: "rgba(265,265,265,1)",
      // highlightStroke: "rgba(265,265,265,1)",
      data: [18, 20, 4, 18, 9, 13, 8, 2]
    }
  ]
}
let chartOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        },
      }
    ]
  }
}

const Chart = styled(BarChart)`
  position: absolute;
  bottom: 0;
`

class Barchart extends React.Component {
  render() {
    return (
      <Chart
        data={chartData}
        options={chartOptions}
        width={
          window.innerWidth > 575
            ? window.innerWidth / 2 + 20
            : window.innerWidth - 30
        }
        height={window.innerWidth > 575 && window.innerWidth / 4}
      />
    )
  }
}
export default Barchart
