let arr = [11, 2, 42, 54, 65, 48, 6, 9, 7];

//Bubble Sort

// function bubbleSort(arr){
//     let swapped 
//     do {
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);

//     return arr
// }

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








// Bubble sort Big-O = O(n^2)

function bubbleSort(arr){
    let swapped
    do {
        swapped = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    } while (swapped);

    return arr
}

// console.log(bubbleSort(arr));



// insertion Sort Big-O = O(n^2)
function insertionSoort(arr){
    for(let i=1;i<arr.length;i++){
        let ValueToInsert = arr[i];
        let j = i-1
        while(j>=0 && arr[j]>ValueToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = ValueToInsert
    }
    return arr
}

// console.log(insertionSoort(arr));

//selection sort Big-O = O(n^2)
function selectionSoort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[min]){
                min = j
            }
        }
        if(min!==i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

// console.log(selectionSoort(arr));



//quick sort Big-O = O(n logn)

function quickSoort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left  = [];
    let right = [];
    for(let i=0;i<arr.length - 1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSoort(left),pivot,...quickSoort(right)]
}

// console.log(quickSoort(arr));


//merge sort Big-O = O(n logn)


function mergeSoort(arr){
    if(arr.length < 2){
        return arr
    }
    let mid = Math.floor( arr.length/2);
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return mergee(mergeSoort(left),mergeSoort(right))
}

function mergee(left,right){
    let sortedArray = []
    while(left.length && right.length){
        if(left[0]>right[0]){
            sortedArray.push(left.shift())
        } else {
            sortedArray.push(right.shift())
        }
    }

    return [...sortedArray,...left,...right]
}

console.log(mergeSoort(arr));