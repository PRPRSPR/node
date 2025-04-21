// callback 함수
function hello(name){
    console.log(name+"님 안녕하세요!");
}

// function imgLoad(){
//     setTimeout(()=>{
//         console.log("끝");
//     }, 3000)
//     console.log("끝2");
// }
imgLoad();
hello("홍길동")
// 끝2 > 홍길동님 안녕하세요! > 끝


function imgLoad(callback, name){
    console.log("3초 프로세스 실행 끝 ~~ "); // 동기식
    callback(name);
}
imgLoad(hello, "홍길동")
// 3초 프로세스 실행 끝 ~~  > 홍길동님 안녕하세요!