// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // Convert numbers to strings to facilitate digit counting
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    // If the lengths of the strings are different, return false
    if (strNum1.length !== strNum2.length) {
        return false;
    }

    // Create objects to store the frequency of digits for both numbers
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    // Count the frequency of digits in num1
    for (let digit of strNum1) {
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
    }

    // Count the frequency of digits in num2
    for (let digit of strNum2) {
        frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }

    // Compare the frequency of digits in both numbers
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    // If all frequencies match, return true
    return true;
}

// Test cases
console.log(sameFrequency(182, 281));        // Output: true
console.log(sameFrequency(34, 14));          // Output: false
console.log(sameFrequency(3589578, 5879385));// Output: true
console.log(sameFrequency(22, 222));         // Output: false
