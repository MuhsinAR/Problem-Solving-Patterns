// add whatever parameters you deem necessary
function averagePair(arr, target) {
    // Edge case: if the array is empty, return false
    if (arr.length === 0) return false;

    // Use two pointers approach to find pairs
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const avg = (arr[left] + arr[right]) / 2;

        // If the average is equal to the target, return true
        if (avg === target) {
            return true;
        } else if (avg < target) {
            // If the average is less than the target, move the left pointer to the right
            left++;
        } else {
            // If the average is greater than the target, move the right pointer to the left
            right--;
        }
    }

    // If no pair found, return false
    return false;
}

// Test cases
console.log(averagePair([1, 2, 3], 2.5)); // Output: true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // Output: true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // Output: false
console.log(averagePair([], 4)); // Output: false

