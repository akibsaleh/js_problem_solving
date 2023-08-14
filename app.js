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
console.log(backDoorPassword('horse'));
