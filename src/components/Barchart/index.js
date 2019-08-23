import React from "react"

import Chart from "./components/Chart/index"

let chartData = {
  labels: ["Jan2", "Jan3", "Jan4", "Jan5", "Jan6", "Jan7", "Jan8", "Jan9"],
  datasets: [
    {
      fillColor: "#6265f1",
      data: [12, 10, 18, 8, 2, 16, 4, 12]
    },
    {
      fillColor: "#6265f1",
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
        }
      }
    ]
  },
  maintainAspectRatio: false,
  responsive: true
}

const Barchart = () => {
  return <Chart data={chartData} options={chartOptions} />
}

export default Barchart
