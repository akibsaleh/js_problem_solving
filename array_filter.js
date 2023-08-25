const players = [75, 65, 67, 72, 55, 59];

const filtered = players.filter((p) => p % 2 !== 0);

const friends = ['Omee', 'badon', 'shoyon', 'Anik', 'Zoom', 'Suma'];

const even_friends = friends.filter((f) => f.length % 2 === 0);

console.log(even_friends);
