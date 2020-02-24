import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Typography, Box, Button } from '@material-ui/core'
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts'
import toChartData from './toChartData'

const LinearChart = ({ data, refetch }) => {
  const chartData = toChartData({ data })

  return (
    <Box m={1}>
      <Box m={1}>
        <Button variant="outlined" onClick={refetch}>
          Refetch Data
        </Button>
      </Box>
      <ResponsiveContainer width="95%" height={500}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            labelFormatter={value => {
              return <Typography color="secondary">Id: {value}</Typography>
            }}
            formatter={(value, name, props) => {
              switch (name) {
                case 'time':
                  return moment(value).format('DD/MM/YY HH:mm')
                default:
                  return value
              }
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="time" stroke="#8884d8" activeDot={{ r: 8 }} xAxisId="string" />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" yAxisId="number" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}

LinearChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  refetch: PropTypes.func.isRequired,
}

export default LinearChart
