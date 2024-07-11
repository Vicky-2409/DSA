function sumArray(arr, n) {
    // Base case
    if (n <= 0) {
        return 0;
    }
    // Recursive case
    return arr[n - 1] + sumArray(arr, n - 1);
}

// Example usage
let arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr, arr.length)); // Output: 15
