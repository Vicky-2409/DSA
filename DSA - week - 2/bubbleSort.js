let arr = [3,245,435,-343,-98-32,45,6,78,3]

function bubbleSort(arr){
    let swapped
    do {
        swapped = false
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i]>arr[i+1]){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped); 
}

console.log(arr);
bubbleSort(arr)
console.log(arr);