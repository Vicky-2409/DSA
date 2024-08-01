// Merge Sort
let arr = [3,5,3,33,1,455,7,0,19,23]
function mergeSort(arr){

    if(arr.length < 2 ){
        return arr;
    }

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

// console.log(mergeSort(arr));

//bubble sort


function bubbleSort(arr){
    let swapped;
    do {
        swapped = false
        for(let i=0; i<arr.length; i++){
            if(arr[i]<arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    } while (swapped);
    return arr
}

// console.log(bubbleSort(arr));


// class Stack{
//     constructor(){
//         this.items = [];
//     }

//     push(element){
//         this.items.push(element)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     display(){
//         console.log(this.items.toString());
//     }

//     dme(){
//         let mid = Math.floor(this.items.length/2)
//         let midelement = this.items[mid]
//         let arr = []
//         let removedele 
//         while(removedele !== midelement){
//             removedele = this.pop()
//             arr.push(removedele)
//         }
//         for(let i=arr.length -2; i>=0 ; i--){
//             this.push(arr[i])
//         }
//         return arr[arr.length-1]
//     }


// }

// const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)

// stack.display()
// console.log(stack.dme());
// stack.display()


//Quic sort

function quickSort(arr){

    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr =[];

    for(let i=0; i<arr.length - 1; i++){
        if(arr[i]>pivot){
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]


}


// console.log(quickSort(arr));


class Stack{
    constructor(){
        this.items =[]
    }

    push(element){
        this.items.push(element)
    }
    
    pop(){
        return this.items.pop()
    }

    reverseString(str){
        for(let i=0; i<str.length; i++){
            this.items.push(str[i])
        }
        let revstr =''
        let n = this.items.length
        for(let i=0; i<n ;i++){
            revstr += this.pop()
        }
        return revstr
    }
}

const stack = new Stack()


// console.log(stack.reverseString("Hello"));


class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.items =[];
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }



    push(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return null
        } else {
            let item = this.head.value
            this.head = this.head.next
            this.size--
            return item
        }
    }

    display(){
        if(this.isEmpty()){
            return ''
        } else {
            let curr = this.head
            let str = ''
            while(curr){
                str += curr.value + " "
                curr = curr.next
            }
            console.log(str);
        }
    }

    remove(value){
        let arr = [];
        let curr = this.head
        while(curr.value !== value){
            arr.push(this.pop())
            curr = curr.next
        }
        this.pop()
        for(let i=arr.length-1; i>=0; i--){
            this.push(arr[i])
        }
    }
}

const list = new LinkedList()
// list.push(10)
// list.push(20)
// list.push(30)
// list.push(40)
// list.push(50)
// list.display()
// list.remove(50)
// list.display()


class PriorityQueue{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length
    }

    enqueue(element){
        if(this.isEmpty()){
            this.items.push(element)
        } else {
            let inserted = false
            for(let i=0 ; i<this.items.length; i++){
                if(element[1]<this.items[i][1]){
                    this.items.splice(i,0,element)
                    inserted = true
                    break;
                }
            }
            if(!inserted){
                this.items.push(element)
            }
        }
    }

    dequeue(){
        let value = this.items.shift()
        return value[0]
    }

    display(){
        for(let i =0; i<this.items.length;i++){
            console.log(this.items[i]);
        }
        
    }

    peek(){
        return this.items[0]
    }
}

const priorityQ = new PriorityQueue()

priorityQ.enqueue(['abin',1])
priorityQ.enqueue(['harish',5])
priorityQ.enqueue(['logesh',3])
priorityQ.display()
priorityQ.enqueue(['loga',3])
priorityQ.display()