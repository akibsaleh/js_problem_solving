// Create a function that takes an array of numbers and return the sum of all the numbers in the array.

const numbers = [5,6,12,8,99,65,14,35,74,26];

function sum(arr){
    let int = 0;
    // arr.forEach(element => {
    //     int = int + element;
    // });

    let total = 0;

    // for( let i = 0; i < arr.length; i++){
    //     total = total + arr[i];
    // }

    let i = 0;
    while(i < arr.length){
        total = total + arr[i];
        i++;
    }

    return total;
}

console.log(sum(numbers));