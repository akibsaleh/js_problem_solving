// Create a function that takes an array of words and return the longest word in the array.
let words = ["The","police", "and","a","bottle","of","whiskey"];

function longestWord(array){
    // array.sort((a , b) => a.length - b.length);

    for (let i = 1; i < array.length; i++) {
        if(array[0].length < array[i].length) {
            array[0] = array[i];
        }
    }
    return array[0];
}


// let numbers = [125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55];

// function smallest(a){
    // a.sort((a,b) => a - b);

    // let complete = false;

    // while(!complete) {
    //     complete = true;
    //     for (let i = 1; i < a.length; i++) {
    //         if(a[i-1] > a[i]){
    //             complete = false;
    //             let temp = a[i-1];
    //             a[i-1] = a[i];
    //             a[i] = temp;
    //         }
            
    //     }
    // }

    // return a;
// }
console.log(longestWord(words));