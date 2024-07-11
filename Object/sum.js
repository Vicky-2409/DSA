let obj={"a":[1,2,3],"b":1,"c":5,"d":[10,20]} 

let arr = Object.values(obj).flat()

let sum = 0
for(let i of arr){
    sum += i
}


console.log(sum);