let a1 = [90, 19, 40, 27, 22, 17, 38];

// Create an array

let meals = ["breakfast", "lunch", "dinner"];

// Empty an array. Keeping references intact.

meals.splice(0, meals.length);

// or

meals.length = 0;

// Clone an array

let copy = meals.slice();

// Get last item

meals[meals.length - 1];

//or

meals.slice(-1)[0];

// Remove first item

meals.shift();

// Remove last item

meals.pop();

//Add new item(s) to beginning

meals.unshift("breakfast");

// Add new item(s) to end

meals.push("supper");

// Overwrite item at a specific index

meals[1] = "brunch";

// or

meals.splice(1, 1, "brunch");

// Add new item(s) at a specific index

meals.splice(1, 0, "brunch", "more brunch");

// Remove single item at a specific index

meals.splice(1, 1);

// Remove several items
