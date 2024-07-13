let arr = [3,2,4,5,2,1]

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let midIndex = Math.floor(arr.length/2)
    let left = arr.slice(0,midIndex)
    let right = arr.slice(midIndex)
    return merge(mergeSort(left),mergeSort(right))

}


function merge(left,right){
    const sortedArr = []
    while(left.length && right.length){
        if(left[0]>=right[0]){
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...right,...left]
}

console.log(mergeSort(arr));