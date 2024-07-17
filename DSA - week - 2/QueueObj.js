class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    getSize(){
        return this.rear - this.front
    }

    isEmpty(){
        return this.front - this.rear === 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        let deletedItem = this.items[this.front]
        delete(this.items[this.front])
        this.front++
        return deletedItem
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        console.log(this.items)
    }
}


const queue = new Queue()

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.getSize());
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());
queue.print()
console.log(queue.getSize());
console.log(queue.isEmpty());