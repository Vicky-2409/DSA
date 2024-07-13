let arr = [-6,4,2,-8,5]

function InsertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = numberToInsert
    }
}

InsertionSort(arr);
console.log(arr);