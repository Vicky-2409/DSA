//bubblesort

let arr = [8,34,121,1,234,46,68,23,3,67,12]

function bubbleSort(arr){
    let swapped
    do {
        swapped = false;
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr
}

// console.log(bubbleSort(arr));

//insertion sort

function insertionSort(arr){
    
    for(let i=1;i<arr.length;i++){
        let valueToInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>valueToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = valueToInsert
    }

    return arr
}

// console.log(insertionSort(arr));

function selectionSort(arr){

    for(let i=0; i<arr.length ; i++){
        let min = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min!==i){
            [arr[min],arr[i]] = [arr[i],arr[min]]
        }
    }

    return arr
}

// console.log(selectionSort(arr));

//Quick Sort

function quickSort(arr){

    if(arr.length <2){
        return arr
    }

    let pivot = arr[arr.length - 1]
    let leftArr = [];
    let rightArr = [];

    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

// console.log(quickSort(arr));


//Merge Sort

function mergeSort(arr){

    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))

}

function merge(leftArr,rightArr){

    let sortedArr = [];

    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr,...leftArr,...rightArr]
}

// console.log(mergeSort(arr));



//stack

class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    display(){
        console.log(this.items.toString());
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length
    }
}

const stack = new Stack()

// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// console.log(stack.peek());
// console.log(stack.pop());
// stack.display()


//Queue

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    display(){
        console.log(this.items.toString());
    }

    peek(){
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length
    }
}

const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// console.log(queue.peek());
// console.log(queue.dequeue());
// queue.display()

//QueueObj

class QueueObj{

    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        let item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    display(){
        console.log(this.items);
    }

    peek(){
        return this.items[this.front]
    }




}

const queueObj = new QueueObj();

// queueObj.enqueue(10)
// queueObj.enqueue(20)
// queueObj.enqueue(30)
// queueObj.display()
// console.log(queueObj.peek());
// console.log(queueObj.dequeue());
// queueObj.display()

//Circular Queue

class CircularQueue{
    constructor(size){
        this.items = new Array(size);
        this.capacity = size;
        this.front = -1
        this.rear = -1
        this.size = 0
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    isFull(){
        return this.capacity === this.size
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element;
            this.size++
            if(this.front === -1){
                this.front = this.rear
            }
        } else{
            return "Queue is Full"
        }
    }

    dequeue(){
        let item = this.items[this.front]
        this.items[this.front] = undefined
        this.front = (this.front + 1) % this.capacity
        this.size--
        if(this.isEmpty()){
            this.front =-1
            this.rear = -1
        }
        return item
    }

    display(){
        let i
        for(i=this.front ; i !== this.rear ; i = (i+1) % this.capacity){
            if(this.items[i] !== undefined){
                console.log(i,this.items[i]);
            }
        }
        console.log(i,this.items[i]);
    }
}

const circularqueue = new CircularQueue(3)

// circularqueue.enqueue(10)
// circularqueue.enqueue(20)
// circularqueue.enqueue(30)
// circularqueue.display()

// console.log(circularqueue.dequeue());
// circularqueue.display()
// circularqueue.enqueue(40)
// circularqueue.display()

//Hash Table

class HashTable{

    constructor(size){
        this.items = new Array(size)
        this.capacity = size
    }

    hash(key){
        let length = 0
        for(let i=0; i<key.length; i++){
            length += key.charCodeAt(i)
        }

        return length % this.capacity
    }

    set(key,value){

        let index = this.hash(key)
        this.items[index] = value;
    }

    get(key){
        let index = this.hash(key)
        return this.items[index]
    }

    remove(key){
        let index = this.hash(key)
        let item = this.items[index]
        this.items[index] = undefined
        return item
    }

    display(){
        for(let i=0; i<this.items.length; i++){
            if(this.items[i] !== undefined){
                console.log(i, this.items[i]);
            }
        }
    }
}

const table = new HashTable(50);
// table.set('name', 'abin')
// table.set('age', 22)
// table.display()

// console.log(table.get('mane'));
// table.remove('age')
// table.display()


//HashTable Collision

class HashTableCollision{
    constructor(size){
        this.items = new Array(size)
        this.capacity = size
    }

    hash(key){
        let length = 0;
        for(let i=0; i<key.length; i++){
            length += key.charCodeAt(i)
        }

        return length % this.capacity
    }

    set(key , value){
        let index = this.hash(key);
        let bucket = this.items[index]
        if(!bucket){
            this.items[index] = [[key,value]]
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            } else {
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.items[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            } else {
                return null
            }
        } else {
            return null
        }
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.items[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            } else {
                return null
            }
        } else {
            return null
        }
    }

    display(){
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i]){
                console.log(i,this.items[i]);
            }
        }
    }


}

const tableColl = new HashTableCollision(50);
tableColl.set('name','abin')
tableColl.set('age',21)
tableColl.display()
tableColl.set('mane','harish')
tableColl.display()
tableColl.set('name','logesh')
tableColl.display()
tableColl.get('age')
console.log(tableColl.get('age'));
tableColl.remove('mane')
tableColl.display()


