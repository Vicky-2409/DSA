class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    isCircular() {
        if (this.isEmpty()) {
            console.log("It's Empty");
            return;
        } else {
            let slow = this.head;
            let fast = this.head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow === fast) {
                    console.log('It\'s a circular linked list');
                    return;
                }
            }
            console.log("It's not a circular list");
            return;
        }
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log(list.isEmpty()); // Output: false
list.isCircular(); // Output: It's a circular linked list
console.log(list);
