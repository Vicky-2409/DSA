/// linked list with tail

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        console.log(this.size)
        return this.size
    }

    prepend(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.size++
            return
        } else {
            newNode.next = this.head
            this.head = newNode
            this.size++
            return
        }
    }

    insert(position,value){
        let newNode = new Node(value)
        if(position<0 || position>this.getSize()){
            console.log("Its not possible")
            return
        }else if(position===0){
            return this.prepend(value)
        } else if(position === this.getSize()){
            return this.append(value)
        } else {
            let curr = this.head
            let i = 0
            while(i!==position-1){
                curr = curr.next
                i++
            }
            newNode.next = curr.next
            curr.next = newNode 
            this.size++
            return
        }
    }

    append(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
            this.size++
            return
        } else {
            this.tail.next = newNode
            this.tail = newNode
            this.size++
            return
        }
    }

    deleteAtFirst(){
        if(this.isEmpty()){
            console.log("There is nothing to delete here")
            return
        } else {
            this.head = this.head.next
            this.size--
            return
        }
    }

    deleteAtLast(){
        if(this.isEmpty()){
            console.log("There is nothing to delete here")
            return
        } else if(this.getSize() === 1){
            this.head = null;
            this.tail =null;
            this.size--
            return
        } else {
            let curr = this.head
            while(curr.next.next !== null){
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
            this.size--
            return
        }
    }

    delete(position){
        if(this.isEmpty() || position<0 || position>=this.getSize()){
            console.log("Nothing to delete here")
            return
        } else if(position === 0){
            return this.deleteAtFirst()
        } else if(position === this.getSize()-1){
            return this.deleteAtLast()
        } else {
            let curr = this.head
            let i = 0
            while(i!==position-1){
                curr = curr.next 
                i++
            }
            let deletedNode = curr.next
            curr.next = deletedNode.next
            this.size--
            return
        }
    }

    deleteByValue(value){
        if(this.isEmpty()){
            console.log("Nothing to delete here")
            return
        } else if(this.head.value === value){
            return this.deleteAtFirst()
        } else {
            let curr = this.head
            while(curr !== null && curr.next !== null){
                if(curr.next.value === value){
                    let deletedNode = curr.next
                    curr.next = deletedNode.next
                    this.size--
                    return
                } else {
                    curr = curr.next
                }
            }
        }
    }


    middle(){
        if(this.isEmpty()){
            console.log("The list is empty");
            return
        } else {
            let curr = this.head
            let position = Math.ceil((this.getSize()-1)/2)
            let i = 0
            while(i !== position){
                curr = curr.next
                i++
            }
            console.log(`The middle element of list is ${curr.value}`)
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("Nothing to print here")
            return
        } else {
            let curr = this.head
            let str = ''
            while(curr){
                str += `${curr.value} `
                curr = curr.next
            }
            console.log(str)
            return str
        }
    }

    reverse(){
        if(this.isEmpty()){
            console.log("Nothing to print here")
            return
        } else {
            let prev = null
            let curr = this.head
            this.tail = curr
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
            return this.print()
        }
    }

    convertArray(){
        let arr = []
        if(this.isEmpty()){
            console.log("Nothing to convert here");
            return
        } else {
            let curr = this.head
            while(curr){
                arr.push(curr.value)
                curr = curr.next
            }
            console.log(arr)
            return arr
        }
    }

    search(value){
        if(this.isEmpty()){
            console.log("Nothing to search here");
            return
        } else {
            let curr = this.head
            let i=0
            while(curr){
                if(curr.value === value){
                    console.log(`The given value is in this ${i} position`)
                    return i
                } else {
                    curr = curr.next
                    i++
                }
            }
            console.log("The given value is not matching")
            return
        }
    }

    exists(value){
        if(this.isEmpty()){
            console.log("It doesn't exist here")
            return
        } else {
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    console.log("The value exists")
                    return
                } else {
                    curr = curr.next
                }
            }
            console.log("It doesn't exist here")
            return
        }
    }


    isCircular(){
        if(this.isEmpty()){
            console.log("Its Empty");
            return
        } else {
            let slow = this.head 
            let fast = this.head
            while (fast && fast.next){
                    slow = slow.next;
                    fast = fast.next.next
                    if(slow === fast){
                        console.log('Its a circular linkedList')
                        return
                    } 
            }
            console.log("Its not a circular list")
            return
        }
    }


}


const list = new LinkedList();
list.append(3)
list.append(2)
list.append(1)
list.print()
list.getSize()
list.prepend(4)
list.prepend(5)
list.prepend(6)
list.print()
list.getSize()
list.insert(6,0)
list.print()
list.getSize()

list.print()
list.getSize()

list.print()
list.getSize()

list.print()
list.getSize()

list.print()
list.getSize()
list.convertArray()
list.search(5)
list.exists(4)
list.reverse()
list.middle()
list.isCircular()
