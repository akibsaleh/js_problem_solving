// // remove any duplicate value from an array

let str = ["Tanvir", "zihan", "Talukdar", "dipa", "zihan", "Talukdar", "Tanvir", "dipa"];

function duplicate_remover(array){
    let unq = [];
    for (let i = 0; i < array.length; i++) {
        if (!unq.includes(array[i])) {
            unq.push(array[i]);
        }
    }

    return unq;
}

console.log(duplicate_remover(str));
