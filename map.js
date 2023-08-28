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

for (const { type, game_name } in games) {
  console.log(`${games[type]} -- ${games[game_name]}`);
}
