// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((a, c) => a + c, 0);
// console.log(result);

const products = [
  { name: 'Apple', category: 'Fruit', price: 1 },
  { name: 'Carrot', category: 'Vegetable', price: 0.5 },
  { name: 'Orange', category: 'Fruit', price: 0.8 },
  { name: 'Broccoli', category: 'Vegetable', price: 0.7 },
];

const cats = products.reduce((acc, product) => {
  if (!acc[product.category]) acc[product.category] = [];
  acc[product.category].push(product);
  return acc;
}, {});

const movies = [
  { name: 'Dil Se', genre: 'Action', release: 1996 },
  { name: 'Dimag Se', genre: 'Romantic', release: 1997 },
  { name: 'Tan Se', genre: 'Action', release: 1998 },
  { name: 'Man Se', genre: 'Romantic', release: 1999 },
  { name: 'Hatho Se', genre: 'Action', release: 2000 },
];

// const cat_db = movies.reduce((acc, movie) => {
//   if (!acc[movie.genre]) {
//     acc[movie.genre] = [];
//   }
//   acc[movie.genre].push(movie);
//   return acc;
// }, {});

// console.log(cat_db);

const mov_db = movies.reduce((acc, mov) => {
  if (!acc[mov.genre]) {
    acc[mov.genre] = [];
  }
  acc[mov.genre].push(mov);
  return acc;
}, {});

// console.log(mov_db);

const scores = [85, 92, 78, 95, 88];

const avg = scores.reduce((acc, score, index, array) => {
  // return acc + val / scores.length;
  acc += score;
  if (index == array.length - 1) {
    return acc / array.length;
  } else {
    return acc;
  }
}, 0);

const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const large = words.reduce((acc, val) => {
  if (acc.length < val.length) acc = val;
  return acc;
}, '');

function fullName() {
  const surName = 'Talukder';

  function firstName() {
    console.log('Tanvir ' + surName);
  }

  return firstName();
}
