let arr = [7,54,23,98,12]
//bubble sort

function bubbleSort(arr){
    let swapped
    do {
        swapped = false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){

               [ arr[i],arr[i+1]] = [arr[i+1],arr[i]]

                swapped = true;
            }
        }
    } while (swapped);
    return arr
}

// console.log(bubbleSort(arr));


//insertion sort

function insertionSort(arr){

    for(let i=1; i<arr.length; i++){
        let valueToInsert = arr[i];
        let j = i -1;
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
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min!==i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}

// console.log(selectionSort(arr));


//quick sort

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let leftArr = [];
    let rightArr = [];
    for(let i = 0 ; i<arr.length-1; i++){
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
    let sortedArr = []
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


//stack

class Stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
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
        return this.items[this.getSize() - 1]
    }

    display(){
        console.log(this.items.toString());
    }
}

let stack = new Stack();

// console.log(stack.isEmpty());
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// console.log(stack.peek());
// console.log(stack.pop());
// stack.display()
// console.log(stack.getSize());


//Queue

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
        return this.items.shift()
    }

    peek(){
        return this.items[0]
    }

    display(){
        console.log(this.items.toString());
    }
}

const queue = new Queue()

// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// console.log(queue.peek());
// console.log(queue.dequeue());
// queue.display()
// console.log(queue.getSize());


//queueObj

class QueueObj{
    constructor(){
        this.items = {}
        this.front = 0;
        this.rear = 0;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    getSize(){
        return this.rear - this.front
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        let item = this.items[this.front];
        delete this.items[this.front]
        this.front++
        return item
    }

    peek(){
        return this.items[this.front]
    }

    display(){

            console.log(this.items);

    }

}

const queueObj = new QueueObj()

// console.log(queueObj.isEmpty());
queueObj.enqueue(10)
queueObj.enqueue(20)
queueObj.enqueue(30)
console.log(queueObj.display());
console.log(queueObj.dequeue());
console.log(queueObj.peek());
queueObj.display()
console.log(queueObj.isEmpty());

