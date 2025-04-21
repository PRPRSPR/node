function delay(time){
    return new Promise((resolve)=> {
        setTimeout(resolve, time)
    });
}

// await delay(1000);
// // await >> delay(1000)이 끝날때까지 다음줄로 넘어가지 않음
// console.log("A");
// await delay(1000);
// console.log("B");
// await delay(1000);
// console.log("C");
// await delay(1000);
// console.log("D");

// function run(){
//     await delay(1000);
//     console.log("A");
//     await delay(1000);
//     console.log("B");
//     await delay(1000);
//     console.log("C");
//     await delay(1000);
//     console.log("D");
// }

async function run(){
    await delay(1000);
    console.log("A");
    await delay(1000);
    console.log("B");
    await delay(1000);
    console.log("C");
    await delay(1000);
    console.log("D");
}
run();