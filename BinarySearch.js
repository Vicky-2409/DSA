let arr = [1,2,3,4,5]


let target = 5;

let left = 0;
let right = arr.length - 1;

while(left <= right){
    let mid = Math.floor((left + right) / 2);
if(arr[mid] === target){
console.log(mid)
return
} else if(target < arr[mid]){
   right = mid -1;
} else if(target>arr[mid]){
    left  = mid + 1;
}

}




























