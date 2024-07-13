class Node{
    constructor(value){
        this.value = value;
        this.prev = null
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        console.log(this.size)
        return this.size
    }

    prepend(value){
        let node = new Node(value)

        if(this.isEmpty()){
         this.head = node
         this.tail = node
        } else {
             this.head.prev = node
             node.next = this.head
             this.head = node
        }
        this.size++
    }

    append(value){
         let node = new Node(value)
          if(this.isEmpty()){
             this.head = node;
             this.tail = node;
          } else {
             this.tail.next = node 
             node.prev = this.tail
            this.tail = node
          }
          this.size++
    }

    removefromStart(){
         if(this.isEmpty()){
            console.log('Nothing to remove Here')
             return null
         } else if(this.getSize()===1){
            this.head = null;
            this.tail = null;
         } else {

             this.head = this.head.next
         }
         this.size--
    }


    removeatEnd(){
         if(this.isEmpty()){
            console.log('Nothing to remove Here')
            return null
         } else if(this.getSize()===1){
            this.head = null;
            this.tail = null;
         } else {
            this.tail= this.tail.prev
            this.tail.next = null
         }
         this.size--

    }

    print(){
         let curr = this.head
         let str = ''
         while(curr){
             str += `${curr.value} `
             curr = curr.next
         }
         console.log(str)
         return str
    }

    reversePrint(){
         let curr =this.tail
         let str = ''
          while(curr){
            str += `${curr.value} `
             curr = curr.prev
          }
          console.log(str)
    }
}


let dlist = new DoublyLinkedList()

dlist.append(2)
dlist.append(1)
dlist.prepend(3)
dlist.prepend(4)
dlist.print()

dlist.removeatEnd()
dlist.getSize()
dlist.print()
dlist.reversePrint()