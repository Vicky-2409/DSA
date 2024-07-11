let arr = [1,2,3,4,5,6]


let target = 60;


// for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//         console.log(i)
//     }
// }


//binary search 

// let left = 0
// let right = arr.length-1

// while(left<=right){
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid] === target) {
//         console.log(mid);
//         return mid
//     }
//     else if(arr[mid]>target) {
//         right = mid-1
//     } else if(arr[mid]<target){
//         left = mid +1
//     }
// }


function binarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}


function search(arr,target,left,right){
    if(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === target) {
            console.log(mid);
            return mid
        }
        else if(arr[mid]>target) {
            right = mid-1
            return search(arr,target,left,right)
        } else if(arr[mid]<target){
            left = mid +1
            return search(arr,target,left,right)
        }
    } else {
        console.log(-1);
    }
}

binarySearch(arr,target)