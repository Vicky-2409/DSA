let arr = [56,33,98,23,5,4,6,12]

//bubble sort

function bubbleSort(arr){
    let swapped 
    do {
        swapped = false;
        for(let i=0; i<arr.length; i++){
            if(arr[i+1]>arr[i]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    } while (swapped);
    return arr
}

// console.log(bubbleSort(arr));

//insertion sort

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
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


//selection sort

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!==i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}

// console.log(selectionSort(arr));


//Quick Sort

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length - 1];
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


//merge sort

function mergeSort(arr){
    if(arr.length < 2){
        return arr
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


class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length
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
        return this.items[this.getSize()-1]
    }
}

const stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// console.log(stack.peek());
// console.log(stack.pop());


// stack.display()
// console.log(stack.peek());


//Queue

class Queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length
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
}

const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)

// queue.display()
// console.log(queue.dequeue());
// queue.display()
// console.log(queue.peek());

//Queue Obj

class QueueObj{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    getSize(){
        return this.rear - this.front
    }

    enqueue(element){
        this.items[this.rear] = element;
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

    last(){
        return this.items[this.rear-1]
    }

}

const queueObj = new QueueObj()

// queueObj.enqueue(10)
// queueObj.enqueue(20)
// queueObj.enqueue(30)
// queueObj.display();

// console.log(queueObj.peek());
// console.log(queueObj.dequeue());
// queueObj.display()
// console.log(queueObj.last());

//circular Queue

class CircularQueue{
    constructor(size){
        this.items = new Array(size)
        this.capacity = size;
        this.size = 0;
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    isFull(){
        return this.size === this.capacity
    }

    getSize(){
        return this.rear - this.front
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.size++
            if(this.front === -1){
                this.front = this.rear
            }
        } 
        return null
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        } else {
            let item = this.items[this.front]
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity
            this.size--
            if(this.isEmpty()){
                this.front = -1;
                this.rear = -1;
            }
            return item
        }
    }

    peek(){
        return this.items[this.front]
    }

    display(){
        
        for(let i =0; i<this.items.length; i++){
            if(this.items[i]){
                console.log(i,this.items[i]);
            }
        }
    }

    last(){
        return this.items[this.rear]
    }
}


const circularqueue = new CircularQueue(4);

// circularqueue.enqueue(10)
// circularqueue.enqueue(20)
// circularqueue.enqueue(30)
// circularqueue.enqueue(40)
// console.log(circularqueue.enqueue(50));
// circularqueue.display()

// console.log(circularqueue.dequeue());
// circularqueue.display()
// circularqueue.enqueue(50)
// circularqueue.display()


class HashTable{
    constructor(size){
        this.items = new Array(size)
        this.capacity = size
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length
    }

    hash(key){
        let length =0;
        for(let i=0;i <key.length; i++){
            length+=key.charCodeAt(i)
        }

        return length % this.capacity
    }

    set(key,value){
        let index = this.hash(key);
        this.items[index] = value
    }

    get(key){
        let index = this.hash(key)
        return this.items[index]
    }

    remove(key){
        let index = this.hash(key)
        let item = this.items[index]
        this.items[index] = null
        return item
    }

    display(){
        for(let i=0; i<this.capacity; i++){
            if(this.items[i]){
                console.log(i,this.items[i]);
            }
        }
    }

}

const table = new HashTable(50)
// table.set('name','harish')
// table.set('age',24)
// table.display()

//Hash Table collision

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

    set(key,value){
        let index = this.hash(key);
        let bucket = this.items[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                sameKeyItem[1] = value
            } else {
                bucket.push([key,value])
            }
        } else {
            this.items[index] = [[key,value]]
        }
    }

    get(key){
        let index = this.hash(key)
        let bucket = this.items[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return null
    }

    remove(key){
        let index = this.hash(key)
        let bucket = this.items[index]
        if(bucket){
            let sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
            return sameKeyItem[1]
        }
        return null
    }

    display(){
        for(let i =0; i<this.capacity; i++){
            if(this.items[i] !== undefined){
                console.log(i, this.items[i]);
            }
        }
    }

}

const tableColl = new HashTableCollision(50)

tableColl.set('name','harish')
tableColl.set('age',23)
tableColl.set('mane','harish')
tableColl.display()
console.log(tableColl.get('mane'));
console.log(tableColl.remove('name'));
tableColl.display()
