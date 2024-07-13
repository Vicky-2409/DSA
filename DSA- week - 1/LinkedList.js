class Node{
    constructor(value){
        this.value = value;
        this.next=null;
    }
}

class LinkedList{
     constructor(value){
        this.head = null;
        this.size = 0
     }

     isEmpty(){
        return this.size === 0 ;

     }

     getSize(){
        return this.size;
     }

     prepend(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
        }else{
            newNode.next = this.head
            this.head = newNode;
        }
        this.size++;
     }

     append(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        } else {
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
     }

     insert(value,index){
        if(index<0 || index>this.size){
            return
        } else if (index === 0){
            this.prepend(value)
        } else {
            let node = new Node(value)
            let prev = this.head

            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
     }

     removeFrom(index){
        let removed 
        if(index<0 || index>this.size){
            return null
        } else if (index ===0 ){
            removed = this.head
            this.head = removed.next
        } else {
            let curr = this.head
            for(let i=0;i<index-1;i++){
             curr = curr.next
            }
            removed = curr.next
            curr.next = removed.next
        }
        this.size--
     }

     removeValue(value){
        if(this.isEmpty()){
            return null
        } else if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value!==value){
                prev= prev.next
            }
            if(prev.next){
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
     }

     search(value){
        if(this.isEmpty()){
            return -1
        } else {
            let i =0
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    console.log(i)
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }
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

     print(){
        let curr  = this.head
        if(this.isEmpty()){
            console.log("Linked List is Empty")
        } else{
            let listValues = '' 
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
     }
}

const list = new LinkedList()

console.log(list.getSize())
console.log(list.isEmpty())
list.append(10)
list.append(20)
list.append(30)
list.print()
console.log(list.getSize())




// list.append(30)
// list.prepend(-10)
// list.prepend(-20)
// list.prepend(-30)

// list.print()

// list.removeValue(30)
console.log(list.getSize())
list.print()
list.reverse()
list.print()
