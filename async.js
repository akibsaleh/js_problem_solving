// const sayName = function () {
//   console.log('Zihan');
// };

// const randNum = function () {
//   console.log(Math.random() * 100);
// };

// const changeName = function () {
//   document.querySelector('h1').innerHTML = 'Saleh';
// };

// const changeMe = setTimeout(changeName, 2000);

// document.querySelector('#stop').addEventListener('click', function () {
//   clearTimeout(changeMe);
//   console.log('stopped');
// });

const bgChange = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

let intervalFunc;

const startPrint = document.querySelector('#start').addEventListener('click', function () {
  const colors = ['red', 'orange', 'purple', 'blue'];
  intervalFunc = setInterval( ()=>{
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    bgChange(randomColor);
  }, 2000);
});

document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(intervalFunc);
    console.log('stopped');
});