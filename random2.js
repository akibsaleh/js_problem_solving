let sentence = "Tanvir the express developer";

let arr = [];
let x = "";
let j = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
        x += sentence[i];
    } else {
        arr[j] = x;
        x = "";
        j++;
    }
}

arr[j] = x;

console.log(arr);