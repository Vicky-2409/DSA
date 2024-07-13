let arr = [11,2,42,54,65,48,6,9,7]

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min !== i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}
console.log(selectionSort(arr));