//1-й вариант
const task2 = (ages) => ages.sort( (a , b) => a - b).slice(-2) 



// 2-й вариант
function twoOldestAges(ages){
return ages.sort( (a , b) => a - b).slice(-2)
}

