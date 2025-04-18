function test(){
    console.log("test");
}

setInterval(test, 1000);
// 시간마다 함수 실행

let i=0;
setInterval(function(){
    console.log(i++);
}, 1000);
// 

// setTimeout(function(){}, 2000);
setTimeout(()=>{
    console.log("test");
}, 2000);


let func1 = x => x;
let func2 = (x) => {
    return x;
}
let func3 = function(x) {
    return x;
}
function func4(x){
    return x;
}

console.log(func1("Hello"));
console.log(func2("Hello"));
console.log(func3("Hello"));
console.log(func4("Hello"));
// 넷 다 동일

