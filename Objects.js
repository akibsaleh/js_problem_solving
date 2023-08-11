/*
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.
*/

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.


function isEmpty(obj){
    for (const key in obj) {
        return false;
    }
    return true;
}

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

function sumOfSalaries(obj){
    let sum = 0;
    for (const prop in obj) {
        sum = sum + obj[prop];
    }
    return sum;
}

// console.log(sumOfSalaries(salaries));

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

  
function multiplyNumeric(obj) {
    for( let prop in obj){
        // if(!isNaN(obj[prop])){
        //     let temp = obj[prop] * 2;
        //     obj[prop] = temp;
        // }
        if(typeof obj[prop] === "number"){
            obj[prop] *= 2;
        }
    }
    return obj;
}

// console.log(Boolean(undefined));

/*
let username = prompt("Who is it?");

if(username === "Admin"){
    let pass = prompt("password??");
    if(pass === "TheMaster"){
        alert("Welcome");
    } else if( pass === "" || pass === null){
        alert("Cancelled");
    } else {
        alert("Wrong Password");
    }
} else if(username === "" || username === null){
    alert("cancelled");
} else {
    alert("I dont know you");
}

*/

let firstName = null;
let lastName = undefined;
let nickname = "Supercoder";

// console.log(firstName ?? lastName ?? nickname ?? "Anonymous");
