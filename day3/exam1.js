function getFruit(list){
    let fruitList = [];
    for(let i=0; i<list.length; i++){
        if(list[i].length >= 5){
            fruitList.push(list[i]);
        }
    }
    return fruitList;
}
function test(list, callback){
    return callback(list);
}

let list = ["apple", "banana", "kiwi", "orange", "blueberry", "pear"];
let newList = test(list, getFruit);