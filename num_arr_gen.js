// Array Methods

// Slice

function array_generators(rangeStart, rangeEnd, count){
    let arr = [];
    for (let i = 0; i < count; i++) {
        let x = Math.ceil(Math.random()*(rangeEnd -rangeStart));
        if (rangeStart < x < rangeEnd) {
            arr.push(x);
        }
    }
    return arr;
}

console.log(array_generators(0, 100, 7));