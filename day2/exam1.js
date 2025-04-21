let list = [1,5,4,8,6];

// 1. 리스트에서 5 이상의 숫자만 따로 떼서 newList변수에 저장하기
// 2. 리스트의 각 값들에 2를 곱해서 newList2 변수에 저장하기

// let newList = [];
// for(i=0; i<list.length; i++){
//     if(list[i] >= 5) {
//         newList.push(list[i]);
//     }
// }

// let newList = list.filter(function(x){return x>=5;});
let newList = list.filter(x => x >= 5);
// x >> 콜백함수 //  x>=5가 true일때 newList에 담김
console.log(newList);



// let newList2 = [];
// for(i=0; i<list.length; i++){
//     newList.push(list[i]*2);
// }

// let newList2 = list.map(function(x){return x*2});
let newList2 = list.map(x => x*2);
console.log(newList2);




function sum(x,y){
    return x+y;
}
sum(1,2);

function greeting(name){
    console.log(name+"님 환영합니다.")
}
greeting("홍길동");
greeting("김철수");


function test(x){
    console.log(x);
}
test("안녕");
// x => 문자열  >>> 안녕 출력됨
test(1);
// x => 숫자  >>> 1
test(1,2,3,4);
// x => 리스트  >>> [1,2,3,4]
test(function(){});
// x => 함수  >>> function()


let func = function(){
    console.log("변수에 넣은 함수!");
}
func();
