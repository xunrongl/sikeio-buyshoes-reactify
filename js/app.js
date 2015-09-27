function makeCartScrollNicely() {
  var cart = document.querySelector(".cart__content");
  Ps.initialize(cart);
}

window.onload = function() {
  makeCartScrollNicely();
  console.log("page loaded");
}