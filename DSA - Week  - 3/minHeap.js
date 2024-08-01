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
        return 2 * i + 2;
    }

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]];
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1
        while(index > 0){
            let parentIndex = this.getParentIndex(index)
            if(this.heap[parentIndex] > this.heap[index]){
                this.swap(parentIndex,index)
                index = parentIndex
            } else {
                break;
            }
        }
    }

    remove(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();

        const removed = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return removed
    }

    heapifyDown(index){
        let smallest = index;
        let leftChild = this.getLeftChildIndex(index)
        let rightChild = this.getRightChildIndex(index)

        if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]){
            smallest = leftChild
        }

        if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]){
            smallest = rightChild
        }

        if(smallest !== index){
            this.swap(smallest,index)
            this.heapifyDown(smallest)
        }
    }
}

const minHeap = new MinHeap()
minHeap.insert(67)
minHeap.insert(55)
minHeap.insert(40)
minHeap.insert(54)
minHeap.insert(34)

console.log(minHeap.remove());