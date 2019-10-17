import React from "react"

import Chart from "./components/Chart/index"

const Linechart = ({coinData}) => {
  let chartData = {
    labels: coinData.labels || [],
    datasets: [
      {
        label: 'fear and greed index',
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(130, 77, 245, 0.4)',
        borderColor: 'rgba(130, 77, 245, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(130, 77, 245, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: 'rgba(130, 77, 245, 1)',
        pointHoverBorderColor: 'rgba(130, 77, 245, 1)',
        pointHoverBorderWidth: 1,
        pointRadius: 2,
        pointHitRadius: 10,
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

export default Linechart
