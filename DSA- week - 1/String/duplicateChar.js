let str = 'qqwsdfss'
let arr = []

for(let i=0;i<str.length;i++){
    if(!arr.includes(str[i])){
        arr.push(str[i])
    }
}

console.log(arr.join(''))