import React from 'react'
import useAxios from 'axios-hooks'
import LineChart from './components/LineChart'

function Chart({ token }) {
  const [{ data, loading, error }, refetch] = useAxios({
    url:
      'https://domainservices.dhigroup.com/api/timeseries/mclite-timeseries/Telemetry%7CCatchment%20rainfall%7C6790_HUDINJA_SKOFJA_VAS_Rainfall.dfs0%20%5Bweighted%5D/values',
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return <LineChart data={data} refetch={refetch} />
}

export default Chart
