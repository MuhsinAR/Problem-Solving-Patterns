// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const obj = {};

    // Iterate through the keys array
    for (let i = 0; i < keys.length; i++) {
        // If there are corresponding values, assign them to the keys
        // Otherwise, assign null
        obj[keys[i]] = i < values.length ? values[i] : null;
    }

    return obj;
}

// Test cases
console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])); // Output: {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // Output: {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // Output: {'x': 1, 'y': 2, 'z': null}

