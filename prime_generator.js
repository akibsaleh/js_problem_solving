let range_min = 10;
let range_max = 50;


function prime_generator(min,max){
    let temp = [];
    let x = 0;

    nextPrime:
    for (let i = min; i <= max; i++) {
        for (let j = 2; j < i; j++) {
            if(i%j === 0){
                continue nextPrime;
            }
        }
        temp.push(i);
    }
    return temp;
}

console.log(prime_generator(range_min, range_max));