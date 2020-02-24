import React from 'react'
import useAxios from 'axios-hooks'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline, createMuiTheme } from '@material-ui/core'
import Chart from '../Chart'
import theme from '../../theme'

function Main() {
  const [{ data, loading, error }] = useAxios({
    url: 'https://domainservices.dhigroup.com/api/tokens',
    method: 'POST',
    data: {
      id: 'demo',
      password: 'demo',
    },
  })

  if (loading) return <p>Seaport asessment is Loading, please wait...</p>
  if (error) return <p>Error!</p>

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Chart token={data.accessToken.token} />
    </ThemeProvider>
  )
}

export default Main
