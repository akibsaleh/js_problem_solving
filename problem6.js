// Create a function that takes an array of words and return the shortest word in the array.

let words = ["apple", "banana", "carrot", "date", "elderberry", "fig", "grapefruit"];

function shortestWord(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[0].length > array[i].length) {
            array[0] = array[i];
        }
    }
    return array[0];
}

console.log(shortestWord(words));