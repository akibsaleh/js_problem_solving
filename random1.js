let word = "samsung";

function reverse(array){
    let newWord = "";
    // let j = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        newWord += array[i];
        // j++;
    }
    return newWord;
}

console.log(reverse(word));