class MaxHeap{
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
        while(index > 0){
            let parentIndex = this.getParentIndex(index)
            if(this.heap[parentIndex] < this.heap[index]){
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
        let removed = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return removed
    }

    heapifyDown(index){
        let largest  = index;
        let left = this.getLeftChildIndex(index)
        let right = this.getRightChildIndex(index)
        if(left < this.heap.length && this.heap[left] > this.heap[largest ]){
            largest  = left
        }
        if(right < this.heap.length && this.heap[right] > this.heap[largest ]){
            largest  = right
        }
        if(largest  !== index){
            this.swap(largest ,index)
            this.heapifyDown(largest)
        }
    }
}

const maxHeap = new MaxHeap()
maxHeap.insert(10)
maxHeap.insert(20)
maxHeap.insert(30)
maxHeap.insert(40)
maxHeap.insert(50)
maxHeap.insert(60)
maxHeap.insert(70)



console.log(maxHeap);