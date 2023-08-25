// // create and array and double each element using array map

// const numss = [66, 4, 84, 42, 73, 73, 35];

// const multiplynums = numss.map((n) => n * 2);

// const friends = ['Omee', 'badhon', 'shoyon', 'Anik', 'Zoom', 'Suma'];

// const friendsObj = friends.map((elem) => {
//   return {
//     name: elem,
//     related: 'zihan',
//     location: 'Manikdi',
//     batch: 1992,
//     school: 'Shaheen',
//     length: elem.length,
//   };
// });

// const body = document.getElementsByTagName('body')[0];

// friendsObj.forEach((obj) => {
//   const ol = document.createElement('ol');
//   for (info in obj) {
//     let li = document.createElement('li');
//     li.innerText = `${info} : ${obj[info]}`;
//     ol.appendChild(li);
//   }
//   body.appendChild(ol);
// });

// console.log(body);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleEvens = numbers.map((n) => (n % 2 === 0 ? n * 2 : n));

// console.log(doubleEvens);

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 40 },
];

const people_name = people.map((person) => person.name);

const words = ['apple', 'banana', 'cherry', 'date'];

const words_obj = words.map((word) => {
  return {
    original: word,
    length: word.length,
  };
});

const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const sum_array = arrays.map((arr) => {
  let sum = 0;
  arr.forEach((ar) => {
    sum = sum + ar;
  });
  return sum;
});

const sum_arrays = arrays.map((arr) => arr.reduce((acc, val) => acc + val, 0));

console.log(sum_arrays);
