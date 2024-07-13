let str1 = "silent"
let str2 = "listen"
let obj = []

if(str1.length != str2.length){
    console.log('Its not an anagram')
    return
} else {
    for(let i=0 ; i<str1.length; i++){
        obj[str1[i]] = (obj[str1[i]] || 0)+1
        obj[str2[i]] = (obj[str2[i]] || 0)-1
    }

    for(let key in obj){
        if(obj[key]!=0){
           console.log('Its not an anagram') 
           return
        } 
    } 
    console.log('Its an anagram')

}