// Create a function that takes an array of numbers and return only the odd numbers in the array.

const numbers = [42, 17, 93, 64, 28, 75, 54, 81, 6, 37];

function odds(array){
    let temp = [];
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            temp[j] = array[i];
            j++;
        }
    }

    array = temp;
    return temp;
}

console.log(odds(numbers));