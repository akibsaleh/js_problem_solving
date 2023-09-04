// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log('🚀 ~ file: math.js:4 ~ descriptor:', descriptor);

const tea = {
  name: 'Ginger Tea',
  price: 250,
  isAvailable: true,
};
// console.log('🚀 ~ file: math.js:9 ~ tea:', tea);

const descriptor = Object.getOwnPropertyDescriptor(tea, 'name');
console.log('🚀 ~ file: math.js:12 ~ descriptor:', descriptor);
