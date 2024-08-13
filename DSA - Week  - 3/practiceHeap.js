class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return 2 * i + 1
    }

    getRightChildIndex(i){
        return 2 * i + 2
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1
        let parentIndex = this.getParentIndex(index)
        while(index >=0 && this.heap[parentIndex] > this.heap[index]){
            
            this.swap(index,parentIndex)
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    remove(){
        if(this.heap.length === 0){
            return null
        }
        let removed = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return removed
    }

    heapifyDown(index){
        let smallest = index;
        let left = this.getLeftChildIndex(index)
        let right = this.getRightChildIndex(index)
        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left;
        }
        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right
        }
        if(smallest !== index){
            this.swap(smallest,index)
            this.heapifyDown(smallest)
        }
    }


    peek(){
        if(this.heap.length === 0){
            return null
        }
        return this.heap[0]
    }

    heapify(arr){
        this.heap = arr
        for(let i=Math.floor(this.heap.length-1/2); i>=0; i--){
            this.heapifyDown(i)
        }
    }
}

let arr = [3, 9, 2, 1, 4, 5];
const minHeap = new MinHeap()
// minHeap.insert(3)
// minHeap.insert(9)
// minHeap.insert(2)
// minHeap.insert(1)
// minHeap.insert(4)
minHeap.heapify(arr)
console.log(minHeap);

console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());
console.log(minHeap.remove());


