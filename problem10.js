// Create a function that takes two strings as arguments and return true if they are anagrams, false otherwise.

let x = "Ronald Reagan";
let y = "A darn long era";

function anagrams(str1,str2) {
    let a = str1.toLowerCase().split(" ").join("").split("").sort().join("");
    let b = str2.toLowerCase().split(" ").join("").split("").sort().join("");

    if(a === b){
        console.log(true);;
    } else {
        console.log(false);
    }
}

anagrams(x,y);
