class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size === 0 
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.head=node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        } else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
            node.next = null
        }
        this.size++
    }

    removeAtFirst(){
        if(this.isEmpty()){
            console.log('Nothing to remove Here')
        } else {
            this.head = this.head.next
        }
        this.size--
    }

    removeAtLast(){
        if(this.isEmpty()){
            console.log('Nothing to remove Here')
        } else {
            let curr = this.head
            while(curr.next.next){
                curr = curr.next
            }
            curr.next = null
        }
        this.size--
    }


    removeAt(index){
        if(this.isEmpty()){
            console.log('Nothing to remove Here')
        } else {
            let curr = this.head
            let i=0
            while(i!==index-1){
                curr = curr.next
                i++
            }
            let removed = curr.next
            curr.next = removed.next
            return removed
        }
        this.size--
    }

    removeBy(value){
        if(this.isEmpty()){
            console.log('Nothing to remove Here')
        } else if(this.head.value === value){
            this.head = this.head.next
        } else {
            let curr = this.head
            while(curr.value!==value && curr.next.value!==value){
                curr = curr.next
            }
            let removed = curr.next
            curr.next = removed.next
        }
        this.size--
    }

    addAtStart(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.size++
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    addAtLast(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }

    addAt(value,newValue){
        let node = new Node(newValue)
        if(this.isEmpty()){
            console.log("Its not possible")
            return -1
        } else {
            let curr = this.head
            while(curr.value!==value){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
        }
        this.size++
    }

    addThisAt(value,index){
        
        if(index<0 || index>this.size){
            return -1
        } else if(index === 0){
            this.append(value)
        } else {
            let node = new Node(value)
            let curr = this.head
            let i=0;
            for(let i=0;i<index;i++){
                curr = curr.next
                i++
            }
            node.next = curr.next
            curr.next = node

        }
    }


    searchBy(value){
        if(this.isEmpty()){
            console.log("Nothing to search here")
        } else {
            let curr = this.head
            let i = 0
            while(curr){
                if(curr.value === value){
                    return i
                }
                curr = curr.next
                i++
            }
            return null
        }
    }




    print(){
        let curr = this.head
        let str = ''
        while(curr){
            str += `${curr.value} `
            curr = curr.next
        }
        console.log(str)
    }

    reverse(){
        let prev = null
        let curr = this.head
        let next
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next 
        }
        this.head = prev
    }
}

const list = new LinkedList()


console.log(list.isEmpty());
console.log(list.getSize());
list.prepend(2)
list.prepend(1)
list.append(3)
list.append(4)
list.print()
list.removeBy(4)
list.print()
list.addAtStart(0)
list.print()
list.addAtLast(4)
list.print()
list.addAt(3,3.5)
list.print()
list.reverse()
list.print()
list.addThisAt(2.5,3)
list.print()
console.log(list.searchBy(20));
console.log(list.getSize())


