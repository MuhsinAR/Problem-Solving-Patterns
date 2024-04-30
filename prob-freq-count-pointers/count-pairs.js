// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0; // Counter for pairs

    // Sort the array to use two-pointer approach
    arr.sort((a, b) => a - b);

    let left = 0; // Pointer for the beginning of the array
    let right = arr.length - 1; // Pointer for the end of the array

    // Loop until left pointer crosses the right pointer
    while (left < right) {
        const sum = arr[left] + arr[right];

        // If the sum is equal to the target, increment the count and move both pointers
        if (sum === target) {
            count++;
            left++;
            right--;
        } else if (sum < target) {
            // If the sum is less than the target, move the left pointer to the right
            left++;
        } else {
            // If the sum is greater than the target, move the right pointer to the left
            right--;
        }
    }

    return count;
}

// Test cases
console.log(countPairs([3, 1, 5, 4, 2], 6));         // Output: 2
console.log(countPairs([10, 4, 8, 2, 6, 0], 10));   // Output: 3
console.log(countPairs([4, 6, 2, 7], 10));          // Output: 1
console.log(countPairs([1, 2, 3, 4, 5], 10));       // Output: 0
console.log(countPairs([1, 2, 3, 4, 5], -3));       // Output: 0
console.log(countPairs([0, -4], -4));               // Output: 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0));   // Output: 2

