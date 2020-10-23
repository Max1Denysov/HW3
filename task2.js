//1-й вариант
const task2 = (ages) => ages.sort( (a , b) => a - b).slice(-2) 



// 2-й вариант
function task2(ages){
return ages.sort( (a , b) => a - b).slice(-2)
}
//
function task2(ages){
let res= ages.sort( (a , b) => a - b).slice(-2)
alert(res) 
}
task2([1,2,10,8]) 

