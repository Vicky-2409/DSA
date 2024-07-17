class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    size(){
        return this.currentLength
    }

    peak(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear  = (this.rear+1) % this.capacity
            this.items[this.rear] = element
            this.currentLength++
            if(this.front === -1){
                this.front = this.rear
            }
        } else {
            console.log("Queue is Full");
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('The queue is Empty');
        } else {
            let item = this.items[this.front]
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity
            this.currentLength--
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
            return item
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('The queue is Empty');
        } else {
            let i 
            let str = ''
            for(i = this.front ; i !== this.rear; i = (i+1)% this.capacity){
                str += this.items[i] + " "
            }
            str += this.items[i] + " "
            console.log(str);
        }
    }
}

let queue = new CircularQueue(5)

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue);
console.log(queue.size());
queue.print()
console.log(queue.peak());

console.log(queue.dequeue());
queue.print()
console.log(queue.peak());

