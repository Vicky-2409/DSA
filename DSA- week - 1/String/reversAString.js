let str = 'abcdefg'
let revstr = ''
for(let i=str.length-1;i>=0;i--){
    revstr += str[i]
}
console.log(revstr)