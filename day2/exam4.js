// console.log("111");
// setTimeout(function(){
//     console.log("222");
// }, 1000);
// console.log("333");

// A라는 문자를 실행 후 1초 뒤에 출력
// A출력 후 1초 뒤에 B출력
// B출력 후 1초 뒤에 C출력
// C출력 후 3초 뒤에 D출력

setTimeout(()=>{
    console.log("A");
    setTimeout(()=>{
        console.log("B");
        setTimeout(()=>{
            console.log("C");
            setTimeout(()=>{
                console.log("D");
            }, 3000);
        }, 1000);
    }, 1000);
}, 1000);

// ==>> 콜백지옥

// let obj = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(obj);
// exam4.html에서 실행