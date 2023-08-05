// Create a function that takes two strings as arguments and return true if they are equal, false otherwise.

let x = "Nullam sed vulputate neque sed";
let y = "Aenean at tincidunt metus in";

function compareWords(a, b){
    if (a.length == b.length) {
        return true;
    } else {
        return false;
    }
}

console.log(compareWords(x,y));
