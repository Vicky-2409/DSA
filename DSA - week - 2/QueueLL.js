class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
        } else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        } else {
            let item = this.head.value
            this.head = this.head.next
            this.size--
            return item
        }
    }

    display(){
        let curr = this.head
        let str =''
        while(curr){
            str += curr.value + " "
            curr = curr.next
        }
        return str
    }

    peek(){
        if(this.isEmpty()){
            return null
        } else {
            return this.head.value
        }
    }
}

const list = new LinkedList()
list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
console.log(list.display());
console.log(list.peek());
console.log(list.dequeue());
console.log(list.display());