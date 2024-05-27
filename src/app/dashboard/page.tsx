const BarChart = () => {
    return <h2>bart chart</h2>
}

import React from 'react'
import LineChart from './line-chart'

const Dashboard = () => {
  return (
    <div>
        <h2>dashboard</h2>
        <BarChart/>
        <LineChart/>
    </div>
  )
}

export default Dashboard