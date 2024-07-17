let arr = [4,5,2,8,3,1]

//bubble sort

function bubbleSort(arr){
    let swapped
    do {
        swapped = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
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
    for(let i=1;i<arr.length;i++){
        let ValueToInsert = arr[i]
        let j = i-1
        while (j>=0 && arr[j]>ValueToInsert) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = ValueToInsert;
    }
    return arr
}

// console.log(insertionSort(arr));


//selection Sort

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[min]){
                min = j
            }
        }
        if(min !== i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}

// console.log(selectionSort(arr));


//quick Sort

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


// console.log(quickSort(arr));


//merge sort

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    } 
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArr = []
    while (left.length && right.length) {
        if(left[0]>right[0]){
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr,...left,...right]
}

// console.log(mergeSort(arr));


class Stack{
    constructor(){
        this.items = []
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

    peek(){
        return this.items[this.getSize()-1]
    }

    print(){
        console.log(this.items.toString());
    
    }
}

// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.push(30)
// console.log(stack.peek());
// stack.print()
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.getSize());
// console.log();


class Queue{
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
        this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.items.shift()
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.items[0]
    }

    print(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        console.log(this.items.toString());
    }

}

// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.getSize());
// queue.print()
// console.log(queue.peek());
// console.log(queue.dequeue());
// queue.print()
// console.log(queue.peek());



class Queueobj{
    constructor(){
        this.items = {}
        this.front = 0;
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
        delete(this.items[this.front])
        this.front++
        return item
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.items[this.front]
    }

    print(){
        if (this.isEmpty()) {
            return "Queue is Empty"
        }
        console.log(this.items);
    }
}

const queueObj = new Queueobj()

// console.log(queueObj.isEmpty());
// queueObj.enqueue(10)
// queueObj.enqueue(20)
// queueObj.enqueue(30)
// queueObj.print()
// console.log(queueObj.getSize());
// console.log(queueObj.peek());
// console.log(queueObj.dequeue());
// queueObj.print()
// console.log(queueObj.getSize());
// console.log(queueObj.peek());


class CircularQueue{
    constructor(Capacity){
        this.items = new Array(Capacity)
        this.front = -1
        this.rear = -1
        this.capacity = Capacity
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size
    }

    isFull(){
        return this.size === this.capacity
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            if(this.front === -1){
                this.front = this.rear
            }
            this.size++
        } else return "Queue is Full"
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        let item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.size--
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.items[this.front]
    }

    last(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        return this.items[this.rear]
    }

    print(){
        if(this.isEmpty()){
            return "Queue is Empty"
        }
        let i 
        let str = ''
        for(i=this.front; i!==this.rear ; i = (i+1) % this.capacity){
            str += this.items[i] + " "
        }
        str += this.items[i] + " "
        console.log(str);
    }
}

const circularqueue = new CircularQueue(4)

console.log(circularqueue.isEmpty());
circularqueue.enqueue(10)
circularqueue.enqueue(20)
circularqueue.enqueue(30)
circularqueue.enqueue(40)
circularqueue.print()
console.log(circularqueue.getSize());
console.log(circularqueue.peek());
console.log(circularqueue.last());
console.log(circularqueue.dequeue());
circularqueue.enqueue(50)
circularqueue.print()
console.log(circularqueue.getSize());
console.log(circularqueue.peek());
console.log(circularqueue.last());
