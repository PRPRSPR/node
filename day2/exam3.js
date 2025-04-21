function test(){
    console.log("테스트 함수");
    return function(){
        console.log("테스트 함수 22");
    }
}

setTimeout(test(), 2000);
// 출력 후 오류
// 


// function calculator(kind){
//     if(kind === "add"){
//         return function(x,y){
//             return x+y;
//         }
//     }else if(kind === "minus"){
//         return function(x,y){
//             return x-y;
//         }
//     }
// }
function calculator(kind){
    calc = {
        "add" : (x,y) => x+y,
        "minus" : (x,y) => x-y,
    }
    // map {}안에 key:value로 함수 관리 가능
    return calc[kind];
}
let addFunc = calculator("add");
// 숫자 2개 입력 받아 더해주는 함수 리턴
let minusFunc = calculator("minus");
// 숫자 2개 입력 받아 뺄셈하는 함수 리턴