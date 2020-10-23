function task3(w){
    return Math.min(...w.split(" ").map (w => w.length));
}

//-------------------------------------------------------------
function task3(w) {
   let res1 = Math.min(...w.split(' ').map (w => w.length));
   alert(res1)  
}
task3('lets talk about javascript the best language')
