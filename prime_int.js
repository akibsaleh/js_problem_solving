let number = 10;

function prime_checker(int){

    for(let i = 2; i < int ; i++) if(int%i === 0) return `${int} is not a prime number`;

    return `${int} is a prime number`;
}

console.log(prime_checker(number));