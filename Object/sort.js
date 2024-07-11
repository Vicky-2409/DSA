let obj={"a":3,"b":9,"c":45,"d":0} 

let arr = Object.entries(obj)

arr.sort((a,b)=> a[1] - b[1])
obj = Object.fromEntries(arr)

console.log(obj);