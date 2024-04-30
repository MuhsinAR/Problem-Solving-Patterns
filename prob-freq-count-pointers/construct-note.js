// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterCount = {}; // Object to store the count of each letter

    // Count the occurrences of each letter in letters
    for (const letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Check if the message can be constructed
    for (const char of message) {
        // If the letter is not in letters or its count is zero, return false
        if (!letterCount[char] || letterCount[char] === 0) {
            return false;
        }
        // Decrement the count of the letter
        letterCount[char]--;
    }

    // If we reach here, all letters in the message have been accounted for
    return true;
}

// Test cases
console.log(constructNote('aa', 'abc'));        // Output: false
console.log(constructNote('abc', 'dcba'));      // Output: true
console.log(constructNote('aabbcc', 'bcabcaddff')); // Output: true

