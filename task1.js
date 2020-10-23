function task1(arr) {
  return arr.map(v => Math.min(...v)).reduce((a , b) => a + b , 0)
}

//----------------------------------------------------------------------
function task1(arr) {
 let res = arr.map(v => Math.min(...v)).reduce((a , b) => a + b , 0)
 document.write(res)
}
task1([[1,2,3,4,5],[5,6,7,8,9],[20,21,34,56,100]])
