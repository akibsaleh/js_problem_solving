// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//   const dsc_days = Math.trunc(numDays / 22) * 22;
//   const dsc_rate = Math.ceil(dsc_days * 8 * ratePerHour * (1 - discount));

//   const reg_days = numDays - dsc_days;
//   const reg_rate = Math.ceil(reg_days * 8 * ratePerHour);

//   return Math.ceil(Math.trunc(numDays / 22) * 22 * 8 * ratePerHour * (1 - discount)) + Math.ceil((numDays - Math.trunc(numDays / 22) * 22) * 8 * ratePerHour);
// }

// // const list_items = document.getElementsByClassName('item');

// // for (const item of list_items) {
// //   item.addEventListener('click', (e) => {
// //     e.target.parentNode.removeChild(e.tar);
// //   });
// // }

// document.getElementById('list-container').addEventListener('click', (e) => {
//   e.target.parentNode.removeChild(e.target);
// });

// document.getElementById('add-item').addEventListener('click', (e) => {
//   let new_item = document.createElement('li');
//   new_item.innerText = 'Brand new Item';
//   document.getElementById('list-container').appendChild(new_item);
// });

const nums = [66, 4, 84, 42, 73, 73, 35];
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  history() {
    console.log(this.model + ' was invented in 1970');
  }
}

const myCar = new Car('Toyota', 'Axio');

const text =
  '{ "employees":[ ' + '{"firstName":"John", "lastName":"Doe"},' + '{"firstName":"Anna", "lastName":"Smith"},' + '{"firstName":"Peter", "lastName":"Jones"} ]}';

const obj = JSON.parse(text);

function frontDoorPassword(word) {
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase();
}

function backDoorResponse(line) {
  let temp = line.replace(/(?:\\t)|(?:\\n)|\s/g, '');
  return temp.substring(temp.length - 1, temp.length);
}

function backDoorPassword(word) {
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length) + ', please';
}

function getItem(cards, position) {
  if (position < cards.length) return cards[position];
}

function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

function insertItemAtTop(arr, newCard) {
  arr.push(newCard);
  return arr;
}

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  car: 'toyota premio',
  phone: 'iphone',
  clan: 'flying',
  set power(word) {
    this.clan = word;
  },
};

person.power = 'Invisible';

let txt = '';
for (const item in person) {
  txt += person[item] + ' ';
}

function Player(name, matches, run, trophy, country) {
  this.name = name;
  this.matches = matches;
  this.run = run;
  this.trophy = trophy;
  this.country = country;
  this.status = function () {
    return `${this.name} plays in ${this.country} team`;
  };
}

const sakib = new Player('Sakib', 202, 12456, 80, 'Bangladesh');

function needsLicense(kind) {
  return kind === 'car' || kind === 'truck' || false;
}

function chooseVehicle(option1, option2) {
  if (option1[0].toUpperCase() < option2[0].toUpperCase()) return `${option1} is clearly the better choice.`;
  else return `${option2} is clearly the better choice.`;
}

function calculateResellPrice(originalPrice, age) {
  if (age < 3) return originalPrice * 0.8;
  else if (age > 3 && age < 10) return originalPrice * 0.7;
  else return originalPrice * 0.5;
}

Player.prototype.profession = 'Crickerter';

const y = {};

y[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 2;
      if (n == 50) {
        done = true;
      }

      return {
        value: n,
        done: done,
      };
    },
  };
};

function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum = sum + birdsPerDay[i];
  }
  return sum;
}

function birdsInWeek(birdsPerDay, week) {
  let sum = 0;
  for (let i = (week - 1) * 7; i < week * 7; i++) {
    sum = sum + birdsPerDay[i];
  }
  return sum;
}

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) birdsPerDay[i] = birdsPerDay[i] + 1;
  }
  return birdsPerDay;
}

let birdsPerDay = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0];

// console.log(fixBirdCountLog(birdsPerDay));
