//reversa a string

let str = "HelloHelloWorld"

let rev = ''

for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
}

console.log(rev)


//palindrome


let word = 'malayalam'

let rev1 = ''

for(let i=word.length-1;i>=0;i--){
    rev1 += word[i]
}

if(word === rev1){
    console.log("THe given string is palindrome")
} else {
    console.log("The given string is not an palindrome")
}



//remove duplicate from a string


let str1 = 'noforall'
// let arr = str1.split('')
let str2 = ''

for(let i=0; i<str1.length; i++){
    if(!str2.includes(str1[i])){
        str2 += str1[i]
    }
}

console.log(str2)


//anagram

let word1 = 'lisent'
let word2 = 'silent'
if(word1.length !== word2.length){
    console.log('Its not an anagram')
    return
}

for(let i=0; i<=word1.length-1;i++){
        if(!word2.includes(word1[i])){
            console.log('Its not an anagram')
            return
        }
    
}
console.log('Its an anagram')


//logest substring without repeating char

let str3 = 'paranormal'
let str4 = ''

let arr2 = []

for(let i=0;i<str3.length;i++){
    
    if(!str4.includes(str3[i])){
        str4 += str3[i]
    } else {
        arr2.push(str4)
        str4 = str3[i]
    }
}

if(str4){
    arr2.push(str4)
}


let max=0
let result
for(let i=0;i<arr2.length;i++){
    if(arr2[i].length> max){
        max = arr2[i].length
        result = arr2[i]
    }
}

console.log(result)


//Count Vowels and Consonants

let alphabet = 'abcasviwaviwufbqiou'
let vowels = ['a','e','i','o','u']
let vow  = 0
let conso =0
for(let i=0;i<alphabet.length;i++){
    if(vowels.includes(alphabet[i])){
        vow++
    } else {
        conso++
    }
}
console.log(`the vowels in the given string is ${vow}`)
console.log(`the consonants in the given string is ${conso}`)

//first non repeating character

let stri = 'ambulancem'
let arr = str.split('')


for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
        console.log(arr[i])
        return 
    } 
}
console.log('Null')


//Check if given strings are rotations of each other or not

let str = 'ABCD'
let str2 = 'CDBA'


console.log( (str2+str2).includes(str))




///prime number
n = 11111;

for(let i=2;i<Math.sqrt(n);i++){
    if(n%i===0){
        console.log("Its not a prime number");
        return false
    } 
}
console.log("Its a prime number");
return true



////power of two
n=128

while(n%2==0){
    n = n/2
}
if(n===1){
    console.log("Its a power of Two")
} else {
    console.log("Its not a power of two")
}


////power of two
n=128

if((n & n-1)===0){
    console.log("Its  a power of 2");
} else {
    console.log("Its not a power of 2");
}


let arr = []
let n = 2

function fib(n){
    let i=0
    while(i<=n){
        if(i==0){
            arr.push(0)
        } else if(i==1){
            arr.push(1)
        } else{

            arr[i]= arr[i-1]+arr[i-2]
        }
    }
    return arr[n]
}




console.log(fib(n))


//liner search

let arr = [1,2,3,4,5]
let t = 2


function findIndex(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t) {
            return i
        }
    }
    return -1
}

console.log(findIndex(arr,t));

//binary search 

let arr = [1,2,3,4,5,6]
let t = 6

function findIndexBin(arr,t){
    let left  = 0
    let right = arr.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === t ){
            return mid
        } else if(t<arr[mid]){
            right = mid-1
        } else if(t>arr[mid]){
            left = mid +1    
    }
}
return -1
}

console.log(findIndexBin(arr,t));


//binary search with recurssion
let arr = [11,34,56,78,90,100]
let t = 100

function binSearch(arr,t){
    let left = 0;
    let right = arr.length-1
    return searchh(arr,t,left,right)
}

function searchh(arr,t,left,right){
    if(left<=right){
        return -1
    }
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===t) return mid;
        else if(t<arr[mid]) {
            right = mid - 1
            return searchh(arr,t,left,right)
        } else if(t>arr[mid]){
            left = mid + 1
            return searchh(arr,t,left,right)
        }

   

}

console.log(binSearch(arr,t));



////create linked list with only head


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        console.log(this.size);
        return this.size
    }


    search(value){
        if(this.isEmpty()){
            console.log("Nothing to search here");
        } 
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value === value){
                console.log(i)
                return i
            }
            i++
            curr = curr.next
        }
        console.log("The element is not present here");
        return-1
    }

    addNodeatFirst(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            this.size++
            return
        } 
        let curr = this.head
        while(curr.next !== null){
            curr = curr.next
        }
        curr.next = newNode
        this.size++
        return

    }

    insert(index,value){
        if(index<0 || index>this.size){
            console.log("Its not possible here")
        } else if (index === 0){
            return this.addNodeatFirst(value)
        } else {
            let newNode = new Node(value)
            let curr = this.head
            let i = 0;
            while(i !== index-1){
                curr = curr.next
                i++
            }
            newNode.next=curr.next
            curr.next = newNode
            this.size++
        }
    }

    delete(value){
        if(this.isEmpty()){
            console.log("Nothing to delete here")
            return -1
        } else if (this.head.value === value){
            this.head = this.head.next
            this.size--
            return
        } else {        
            let curr = this.head
            while(curr.next   && curr.next.value !== value ){
                curr = curr.next
            }
            let deletedNode = curr.next
            curr.next = deletedNode.next
            this.size--
            return
        }
        


    }

    deletei(index){
        if(this.isEmpty()){
            console.log("Nothing to delete here")
        } else if(index === 0){
            this.head = this.head.next
            this.size--
            return
        } else {
            let curr = this.head
            let i = 0
            while(curr){
                if(i===index-1){
                    let deletedNode = curr.next
                    curr.next = deletedNode.next
                    console.log(deletedNode.value)
                    this.size--
                    return deletedNode.value
                }
                i++
                curr = curr.next

            }

        }
    }

    print(){
        if(this.isEmpty()){
            console.log("Nothing to print here")
            return -1
        }
        let curr = this.head
        let str = ''
        while(curr!== null){
            str = str + `${curr.value} `
            curr = curr.next
        }
        console.log(str);
        return str
    }

    reverse(){
        if(this.isEmpty()){
            console.log("Nothing to reverse here")
            return -1
        }
        let curr = this.head
        let prev = null;
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
        return this.print()
    }

    duplicates(){
        let curr = this.head
        while(curr.next != null){
            if(curr.value == curr.next.value){
                let next = curr.next.next;
                curr.next = next
                this.size--
            } else {
                curr = curr.next
            }
        }
    }
}


const LinkedListt = new LinkedList()
LinkedListt.getSize()
LinkedListt.addNodeatFirst(1)
LinkedListt.addNodeatFirst(1)
LinkedListt.addNodeatFirst(2)
LinkedListt.addNodeatFirst(2)
LinkedListt.addNodeatFirst(3)
LinkedListt.addNodeatFirst(3)
LinkedListt.addNodeatFirst(3)
LinkedListt.getSize()
LinkedListt.append(0)
LinkedListt.append(0)
LinkedListt.append(0)
LinkedListt.append(-1)
LinkedListt.append(-1)
LinkedListt.append(-1)
LinkedListt.append(-2)
LinkedListt.append(-2)
LinkedListt.append(-2)
LinkedListt.getSize()
LinkedListt.print()
LinkedListt.reverse()
LinkedListt.getSize()
LinkedListt.duplicates()
LinkedListt.print()
LinkedListt.getSize()


//// replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.
let str = 'Hello'
let arr = str.split("")
let n = 3

for(let i=0;i<arr.length;i++){
    arr[i] = arr[i].charCodeAt() + 3
    arr[i] = String.fromCharCode(arr[i])
}
str = arr.join("")
console.log(str)


//second largest in an array

let arr = [1,2,3,54,6,7,89,100]
let max1 = 0
let max2 = 0


for(let i=0;i<arr.length;i++){
    if(arr[i]>max1){
        max2 = max1
        max1 = arr[i]
    } 
}
console.log(max1)
console.log(max2)





let arr = [1,12,3,4,55,6]
let max1=0, max2=0, max3=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>max1){
        max3 = max2
        max2 = max1
        max1 = arr[i]
    } else if(arr[i]>max2){
        max3 = max2
        max2 = arr[i]
    } else if(arr[i]>max3){
        max3 = arr[i]
    }
}
console.log(max1);
console.log(max2);
console.log(max3);


















