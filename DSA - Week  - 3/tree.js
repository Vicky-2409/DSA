// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.children = []
//     }

//     preOrder(root){
//         if(!root) return null
//         console.log(root.value);
//         for(let child of root.children){
//             this.preOrder(child)
//         }
//     }

//     inOrder(root){
//         if(!root) return
//         let numeberOfChild = root.children.length
//         if(root.children[0]) this.inOrder(root.children[0])
//         console.log(root.value);
//         for(let i=1; i<numeberOfChild ; i++){
//         this.inOrder(root.children[i])
//         }
//     }

//     postOrder(root){
//         if(!root) return
//         for (const child of root.children) {
//             this.postOrder(child)
//         }
//         console.log(root.value);
//     }
// }

// const root = new TreeNode(1)
// let child1 = new TreeNode(2)
// let child2 = new TreeNode(3)
// root.children.push(child1,child2)
// root.inOrder(root)

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(!root){
            return null
        } else {
            let curr = root
            if(newNode.value < curr.value){
                if(curr.left === null){
                    curr.left = newNode
                } else {
                    this.insertNode(curr.left,newNode)
                }
            } else {
                if(curr.right === null){
                    curr.right = newNode
                } else {
                    this.insertNode(curr.right,newNode)
                }
            }
        }
    }

    preOrder(root){
        if(!root){
            return
        } else {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(!root){
            return
        } else {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(!root){
            return
        } else {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(root){
        if(!root){
            return
        } else {
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
    }

    search(node, value){
        if(node){
            if(node.value === value){
                return true
            } else if(node.value < value){
                return this.search(node.right,value)
            } else if(node.value > value) {
                return this.search(node.left,value)
            }
        }
        return false
    }

    min(root){
        if(!root){
            return null
        }
        if(root.left){
            this.min(root.left)
        } else {
            return root.value
        }
    }

    max(root){
        if(!root){
            return null
        } 
        if(root.right){
            this.max(root.right)
        } else {
            return root.value
        }
    }

    delete(value){
        this.root =  this.deleteNode(this.root,value)
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

    closestValue(root,target){
        if(!root){
            return
        }
        let closest = root.value
        if(target < root.value && root.left){
            return this.closestValue(root.left,target)
        }
        if(target > root.value && root.right){
            return this.closestValue(root.right,target)
        }
        return closest
    }


    validateBST(node,min =null,max =null){
        if(!node) return true
        if((min !== null && node.value <= min) || (max!== null && node.value >= max)){
            return false
        }
        return this.validateBST(node.left,min,node.value) && this.validateBST(node.right, node.value, max)
    }


}


const bst = new BinarySearchTree()

bst.insert(5)
bst.insert(3)
bst.insert(8)
bst.insert(1)
bst.insert(4)
bst.insert(7)
bst.insert(10)

// bst.levelOrder(bst.root)
// console.log(bst.search(bst.root,7));
// console.log(bst.root);

// bst.min(bst.root)
// bst.max(bst.root)
// bst.delete(10)
// bst.levelOrder(bst.root)
// console.log(bst.closestValue(bst.root,4));
// console.log(bst.closestValue(bst.root,6));
// console.log(bst.closestValue(bst.root,2));
// console.log(bst.closestValue(bst.root,9));
// console.log(bst.closestValue(bst.root,11));

console.log(bst.validateBST(bst.root));





