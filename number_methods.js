let a = Math.round(3.4); // This methods converts a decimal value to integer value. if value > 5 after period, this method rounds the value to next int value. if value < 5 rounds previous integer value.
let b = Math.ceil(3.4); // if the data has value after period, this method rounds the number data to the next integer value. e.g: 3.4 becomes 4
let c = Math.floor(3.4); // if the data has value after period, this method rounds the number data to the previous integer value. e.g: 3.4 becomes 3
let d = Math.trunc(3.4); // if the data has value after period, this method removes anything after the period. e.g: 3.4 becomes 3
let e = Math.abs(3.4); // if the data has value after period, this method removes anything after the period. e.g: 3.4 becomes 3
let f = Math.random(); // produces a random number between 0 to 1;
let g = Math.min(10, 5, 68); // Returns the smallest from the arbitrary number of arguments.
let h = Math.max(10, 5, 68); // Returns the greatest from the arbitrary number of arguments.
let i = Math.pow(5, 3); // Returns the value of a base raised to a power

isNaN(a); // Changes the value of other data types to Number. It returns false if number is passed as arguments. Returns true if NaN is passed.
isFinite(b); // returns true if the number is not Nan , undefined or any other data type . False if number is NaN, Undefined tor any other data type. Returns true if NaN is passed.
Number.isNaN, Number.isFinite, Number.isInteger; // More strict version of number checking for NaN, finite number or integer value.
Object.is(NaN, NaN); // When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is
parseInt("100px"); //Extracts the Integer value from a string. Eg: 100 . It receives a second argument (optional). Second argument specifies the base of the numeral system;
parseFloat("10.54 em"); //Extracts the floating point value from a string. Eg: 10.54
console.log(parseFloat("10.54 em"));
