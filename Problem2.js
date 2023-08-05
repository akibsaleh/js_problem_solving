// Create a function that takes an array of numbers and return the smallest number in the array.

const numbers = [26,6,12,8,99,65,14,35,74,5];

// function smallestNumber(array){
//     // return array.sort((a,b) => a-b)[0];

//     let complete = false;

//     while(!complete){
//         complete = true;
//         for(let i = 1; i < array.length; i++) {
//             if(array[i-1] > array[i]) {
//                 let temp = array[i-1];
//                 array[i-1] = array[i];
//                 array[i] = temp;
//             }
//         }
//     }

//     return array[0];
    
// }

function smallest(array) {

    for (let i = 1; i < array.length; i++) {
        if(array[i] < array[0]){
            array[0] = array[i];
        } 
    }
    return array[0];
}

console.log(smallest(numbers));