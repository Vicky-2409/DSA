let str = 'ddssrftyyuiuu'
let unch = ''

for(let ch of str){
    if(str.indexOf(ch) === str.lastIndexOf(ch)){
        unch += ch
    }
}

console.log(unch)