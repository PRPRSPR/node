function test(){
    console.log("테스트 함수");
}

// let func = test();
// = test(); 에서 함수가 실행
// 테스트 함수 출력
// console.log(func);
// 


let func = test;
console.log(func);

function sum(x,y){
    return x+y;
}
