// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0; // Pointer for positive numbers
    let right = arr.length - 1; // Pointer for negative numbers

    // Loop until left pointer crosses the right pointer
    while (left < right) {
        // If the element at the left pointer is negative and the element at the right pointer is positive,
        // swap them and move the pointers
        if (arr[left] < 0 && arr[right] > 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else {
            // If the element at the left pointer is positive, move the left pointer to the right
            if (arr[left] > 0) left++;
            // If the element at the right pointer is negative, move the right pointer to the left
            if (arr[right] < 0) right--;
        }
    }

    return arr;
}

// Test cases
console.log(separatePositive([2, -1, -3, 6, -8, 10])); // Output: [2, 10, 6, -3, -1, -8]
console.log(separatePositive([5, 10, -15, 20, 25]));   // Output: [5, 10, 25, 20, -15]
console.log(separatePositive([-5, 5]));               // Output: [5, -5]
console.log(separatePositive([1, 2, 3]));              // Output: [1, 2, 3]

