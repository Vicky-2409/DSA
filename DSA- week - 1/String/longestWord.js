let str = "I am a happiest person in the world"
let arr = str.split(' ')
let long = 0
let word
for(let i=0;i<arr.length;i++){
    if(arr[i].length>long){
        long = arr[i].length
        word = arr[i]
    }
}
console.log(word)