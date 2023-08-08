// Create a function that takes a string as argument and return true if it is a palindrome, false otherwise.

const x = "Madam, I'm Adam";

function palindromeChecker(str){
    let temp = str.toLowerCase().replace(/[^a*-z*0*-9*]+/g, "");
    let array1 = temp.split("");
    let array2 = [];
    
    for(let i = array1.length - 1 ; i >= 0; i--){
        array2.push(array1[i]);
    }

    let str2 = array2.join("");

    return temp;
}

console.log(palindromeChecker(x));