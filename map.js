const countries = new Map();

countries.set('BD', 'Bangladesh');
countries.set('IN', 'India');
countries.set('FR', 'France');

// for (const [iterator, value] of countries) {
//     console.log(`${iterator} -- ${value}`);
// }

const games = {
  sports: '8ball',
  puzzle: 'Flip Bird',
  arcade: 'Tamale Run',
};

// for (const { type, game_name } in games) {
//   console.log(`${games[type]} -- ${games[game_name]}`);
// }

const fruits = new Map([
  ['apples', 500],
  ['oranges', 1000],
  ['berries', 2000],
]);

const ukFruit = { source: 'Japan', flavor: 'sweet' };

fruits.set('melon', 3000);
fruits.set(ukFruit, 9000);

fruits.forEach((price, fruit) => {
  console.log(fruit, typeof fruit);
});

// const urlParams = new URLSearchParams(window.location.search);
// const keys = urlParams.keys();

// for (const key of keys) {
//   const value = urlParams.get(key); // Get the value associated with the key
//   console.log(value);

//   if (key === 'firstName') {
//     document.getElementById('query_value').innerHTML = value;
//   }
// }

const urlParams = new URLSearchParams(window.location.search);
const keys = urlParams.keys();

for (const key of keys) {
  const value = urlParams.get(key);
  console.log(key, value);

  if (key === 'firstName') {
    document.getElementById('query_value').innerHTML = `${value}, `;
  }
}
