function HeapSort(arr){
    let n = arr.length

    for(let i=Math.floor((n-1)/2); i>=0; i--){
        heapifyDown(arr,n,i)
    }

    for(let i= arr.length -1 ; i>=0 ; i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapifyDown(arr,i,0)
    }

    function heapifyDown(arr,n,i){
        let smallest = i
        let left = 2 * i + 1
        let right = 2 * i + 2
        if(left < n && arr[left] > arr[smallest]){
            smallest = left
        }
        if(right < n && arr[right] > arr[smallest]){
            smallest = right
        }
        if(smallest !== i){
            [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
            heapifyDown(arr,n,smallest)
        }
    }

    return arr
}

let arr = [3, 9, 2, 1, 4, 5];

console.log(HeapSort(arr));

