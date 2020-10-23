  const arr = [
  [1, 2, 3, 4, 5],  
  [5, 6, 7, 8, 9],  
  [20, 21, 34, 56, 100]  
]
  alert(arr.map(v=>Math.min(...v)).reduce((a , b)=> a + b,0))   
 
