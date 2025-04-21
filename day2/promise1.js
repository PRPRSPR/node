let promiseEx1 = new Promise((resolve, reject)=>{
    if(true){ // 서버통신 성공 여부
        resolve("성공했을 때 실행");
    } else {
        reject("실패했을 때 실행");
        // 생략이 가능
    }
});
// console.log(promiseEx1);
//  >>> Promise { '성공했을 때 실행' }
promiseEx1
    .then(result => {
        console.log(result);
        //  >>> 성공했을 때 실행
    })
    .catch(error => {
        console.log(error);
        //  >>> 실패했을 때 실행
    })

