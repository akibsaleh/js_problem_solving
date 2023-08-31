const hex_range = '0123456789abcdef';
let ivRef;

function randomColor() {
  let color_code = '#';
  while (color_code.length < 7) {
    color_code += hex_range[Math.floor(Math.random() * 16)];
  }
  console.log(color_code);
  return color_code;
}

function startChanging() {
  function bgChanger() {
    document.querySelector('body').style.backgroundColor = randomColor();
  }
  if (!ivRef) {
    ivRef = setInterval(bgChanger, 2000);
  }
}

function stopChanging() {
  clearInterval(ivRef);
  ivRef = null;
}
document.getElementById('start').addEventListener('click', startChanging);

document.getElementById('stop').addEventListener('click', stopChanging);
