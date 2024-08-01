class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
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
            newNode.next = this.head
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
            return null
        } else {
            let str = ''
            let curr = this.head
            while(curr){
                str += curr.value + " "
                curr = curr.next
            }
            return str
        }
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
list.push(10)
list.push(20)
list.push(30)
console.log(list.display());

console.log(list.peek());
console.log(list.pop());

console.log(list.display());
