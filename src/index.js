import { renderCart } from "./js/Cart";
import { addListeners } from "./js/Submit";

const data = [
  {
    name: "Vintage Backbag",
    salePrice: 54.99,
    price: 94.99,
    onSale: true,
    image: "src/img/photo1.png",
    total: 1,
  },
  {
    name: "Levi Shoes",
    salePrice: 74.99,
    price: 124.99,
    onSale: true,
    image: "src/img/photo2.png",
    total: 1,
  },
];

window.onload = function () {
  const form = document.querySelector(".form");
  const cartContainer = form.querySelector(".cart");

  renderCart(cartContainer, data);

  addListeners();
};
