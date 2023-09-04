const addProduct = () => {
  const productName = document.getElementById('product-name');
  const productQuantity = document.getElementById('product-quantity');
  const product = productName.value;
  const quantity = productQuantity.value;
  productName.value = '';
  productQuantity.value = '';
  console.log(product, quantity);
  showProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const showProduct = (product, quantity) => {
  const ul = document.getElementById('product-container');
  const li = document.createElement('li');
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  cartString = JSON.stringify(cart);
  console.log(cartString);
  localStorage.setItem('cart', cartString);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    showProduct(product, quantity);
  }
};

displayProductFromLocalStorage();
