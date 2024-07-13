let arr  = [1,2,3,4,5,4,3,21,6,6]


let set = new Set([...arr])
// for(let i of set){
//     console.log(i);
// }


let uniq = []
for(let i of arr){
    if(!uniq.includes(i)){
        uniq.push(i)
    }
}
console.log(set);
console.log(uniq);
