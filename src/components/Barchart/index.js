import React from "react"

import Chart from "./components/Chart/index"

const Barchart = ({coinData}) => {

  let chartData = {
    labels: coinData.labels || [],
    datasets: [
      {
        label: 'fear and greed index',
        backgroundColor: 'rgba(130, 77, 245, 0.4)',
        borderColor: 'rgba(130, 77, 245, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(130, 77, 245, 0.4)',
        hoverBorderColor: 'rgba(130, 77, 245, 1)',
        data: coinData.data || []
      }
    ]
  }

  let chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false
          }
        }
      ]
    },
    maintainAspectRatio: false,
    responsive: true
  }

  return <Chart data={chartData} options={chartOptions} height={500}/>
}

export default Barchart
