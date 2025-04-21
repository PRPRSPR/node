function test_func(){
    console.log("Hello js")
}
// setTimeout(function(){}, 2000);
// setTimeout(test_func, 2000);

// console.log(test_func);


// let a = 10;
// a;
// let test_func2 = function(){
//     console.log("hello js2");
// }
// console.log(test_func2());

setTimeout(test_func,2000);
// test_func >> 함수 데려옴
setTimeout(test_func(),2000);
// >> 함수 실행
