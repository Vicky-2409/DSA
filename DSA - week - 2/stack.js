class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    push(element){
        this.items.push(element)
    }
    
    pop(){
        if(this.isEmpty()){
            return 'The stack is Empty'
        } else {
            return this.items.pop()
        }
    }

    peek(){
        return this.items[this.size()-1]
    }

    print(){
        console.log(this.items.toString()); 
    }
}


const stack = new Stack()
console.log(stack.isEmpty());
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.peek());
console.log(stack.size());
stack.print()
console.log(stack.pop());
stack.print()
console.log(stack.peek());