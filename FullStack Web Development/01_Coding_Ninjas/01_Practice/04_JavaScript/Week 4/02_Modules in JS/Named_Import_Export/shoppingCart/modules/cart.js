// variables and functions
var cart = [];

let total = 0;

function calculateTotal() {
  total = cart.reduce((acc, item) => acc + item.price, 0);
}

function addItem(item) {
  cart.push(item);
  calculateTotal();
}

function getTotal() {
  return total;
}
function getCartContents() {
  return cart;
}

export {addItem, getTotal,getCartContents};