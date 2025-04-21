function delay(time){
    return new Promise((resolve)=> {
        // reject 생략
        setTimeout(function(){
            resolve(time);
        }, time)
    });
}

// delay(1000)
//     .then(()=>{
//         console.log("A");
//         return delay(1000);
//     })
//     .then(()=>{
//         console.log("B");
//         return delay(1000);
//     })
//     .then(()=>{
//         console.log("C");
//     });


delay(1000)
    .then(result=>{
        console.log("A : "+(result/1000)+"초 뒤 실행"); // A : 1초 뒤 실행
        return delay(3000);
    })
    .then(result=>{
        console.log("B : "+(result/1000)+"초 뒤 실행"); // B : 3초 뒤 실행
        return delay(5000);
    })
    .then(result=>{
        console.log("C : "+(result/1000)+"초 뒤 실행"); // C : 5초 뒤 실행
    });
    // 초 (1,3,5)는 동적으로 처리