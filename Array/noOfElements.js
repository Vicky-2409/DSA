let arr = [1,1,2,3,3,4,5,4,5,6,7,7,8,9,0]
let obj = {}
for(let i of arr){
    if(obj[i]){
        obj[i]++
    } else {
        obj[i] = 1
    }
}


console.log(obj);
console.log(Object.values(obj));
console.log(Object.keys(obj));
