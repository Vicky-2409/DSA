let vowels = ['a','e','i','o','u']

let str = 'abcndergu'
let count = 0
for(let ch of str){
    if(vowels.includes(ch)){
        count++
    }
}
console.log(count)