// Create a function that takes an array of numbers and return the largest number in the array.

const numbers = [74, 25 , 36 , 95 , 85 , 91 , 1 , 65];

function smallestNumber(array){
    
    // return array.sort((a,b) => a-b)[array.length-1];

    for (let i = 1; i < array.length; i++) {
        if (array[0] < array[i]) {
            array[0] = array[i];
        }
    }
    return array[0];
    
}

console.log(smallestNumber(numbers));