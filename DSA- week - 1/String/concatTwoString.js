let str1 = 'asdfhbfbsfbgsf'
let str2 = 'gfdsaas'

let length = str1.length>=str2.length ? str1.length : str2.length
let result = ''


for(let i=0;i<length;i++){
    if(str1[i] && str2[i]){
        result += str1[i] + str2[i]
    } else if(str1[i]){
        result += str1[i]
    } else {
        result += str2[i]
    }
}

console.log(result);