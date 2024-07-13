let arr = [11, 2, 42, 54, 65, 48, 6, 9, 7];

//Bubble Sort

function bubbleSort(arr){
    let swapped 
    do {
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped);

    return arr
}

// console.log(bubbleSort(arr));


//insertion Sort

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>numberToInsert){
                arr[j+1] = arr[j]
                j--
        }
        arr[j+1] = numberToInsert
    }
    return arr
}

//console.log(insertionSort(arr));



//selection sort

function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]<arr[j]){
                min = j
            }
        }
        if(min!==i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }

    return arr
}


// console.log(selectionSort(arr));


//quick sort

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


// console.log(quickSort(arr));


//merge sort

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let middle = Math.floor((arr.length)/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))

}

function merge(left,right){
    let sortedArr = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr,...left,...right]
}

// console.log(mergeSort(arr));
