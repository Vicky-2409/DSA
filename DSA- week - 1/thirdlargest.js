let str = 'Hello'
let arr = str.split("")
let n = 3

for(let i=0;i<arr.length;i++){
    arr[i] = arr[i].charCodeAt() + 3
    arr[i] = String.fromCharCode(arr[i])
}
str = arr.join("")
console.log(str)