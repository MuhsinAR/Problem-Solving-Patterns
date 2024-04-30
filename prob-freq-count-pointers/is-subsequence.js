// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2

    // Iterate through both strings
    while (j < str2.length) {
        // If characters match, move pointer for str1
        if (str1[i] === str2[j]) {
            i++;
        }
        // Move pointer for str2 regardless
        j++;
    }

    // If all characters in str1 are found in str2 in the same order, return true
    return i === str1.length;
}

// Test cases
console.log(isSubsequence('hello', 'hello world'));    // Output: true
console.log(isSubsequence('sing', 'sting'));           // Output: true
console.log(isSubsequence('abc', 'abracadabra'));     // Output: true
console.log(isSubsequence('abc', 'acb'));             // Output: false
