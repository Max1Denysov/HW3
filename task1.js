function task1(arr) {
  return arr.map(v => Math.min(...v)).reduce((a , b) => a + b , 0)
}

