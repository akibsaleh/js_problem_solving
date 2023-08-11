// Create a function that takes a string as argument and return true if it is a palindrome, false otherwise.

function palindrome(str) {
    let str1 = str.toLowerCase();
    let result = str1.match(/\w/gi);
    let result_reverse = result.reverse();

    if (result === result_reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("Madam I'm Adam"));
