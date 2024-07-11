class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0 ;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    arrToList(arr){
        for(let i=0;i<arr.length;i++){
            this.append(arr[i])
        }
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromStart(){
        if(this.isEmpty()){
            return -1
        } else {
            let removed = this.head
            this.head = this.head.next
            this.size--
            return removed
        }
    }

    removeAtEnd(){
        if(this.isEmpty()){
            return null
        } else {
            let curr = this.head
            while(curr.next.next !== null){
                curr = curr.next
            }
            let removed = curr
            curr.next = null
            this.tail = curr
            this.size--
        }
    }

    printf(){
        let curr = this.head
        let str = ''
        while(curr) {
            str += `${curr.value}  `
            curr = curr.next
        }
        console.log(str)
        return str 
    }
}

const list = new LinkedList()

// list.append(3)
// list.append(4)
// list.prepend(2)
// list.prepend(1)

// console.log(list.getSize())
// list.printf()
// list.removeFromStart()
// list.printf()
// list.removeAtEnd()

let arr = [1,2,3,43]
list.arrToList(arr)
list.printf()