class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root  = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        } else {
            return this.insertNode(this.root , newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            } else {
                return this.insertNode(root.left,newNode)
            }
        } else {
            if(root.right === null){
                root.right = newNode
            } else {
                return this.insertNode(root.right, newNode)
            }
        }
    }

    search(root,value){
        if(root){
            if(root.value === value){
                return true
            } else if(value < root.value){
                    return this.search(root.left, value)
                } else if(value > root.value) {
                    return this.search(root.right, value)
                }
        }
        return false
    }

    preOrder(root){
        console.log(root.value);
        if(root.left){
            this.preOrder(root.left)
        } 
        if(root.right){
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root.left){
            this.inOrder(root.left)
        } 
        console.log(root.value);
        if(root.right){
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root.left){
            this.postOrder(root.left)
        } 
        if(root.right){
            this.postOrder(root.right)
        }
        console.log(root.value);
    }

    levelOrder(root){
        let queue = []
        queue.push(root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        } else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        } else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }



}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(11)
bst.insert(18)

bst.levelOrder(bst.root)
bst.delete(7)
bst.levelOrder(bst.root)




