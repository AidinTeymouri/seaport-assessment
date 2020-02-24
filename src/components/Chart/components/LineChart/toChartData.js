function toChartData({ data }) {
  debugger
  return data
    .filter(d => d[0] && d[1] >= 0)
    .map(d => {
      return {
        time: d[0],
        value: d[1],
      }
    })
}

export default toChartData
