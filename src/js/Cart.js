let state = {
  price: 0,
  shippingPrice: 19,
};

// Cart Items
const createCartItem = (data) => {
  const price = data.price;
  const salePrice = data.salePrice;
  const name = data.name;
  const image = data.image;

  const cartItem = `
  <div class="cart-item">
    <div class="cart-item__image">
      <img src=${image} alt=${name} />
    </div>
    <div class="cart-container">
      <h2 class="cart-item__title">${name}</h2>
      <div class="cart-item__price">
        <span class="cart-item__price">$${salePrice}</span>
        <span class="cart-item__price_old">$${price}</span>
      </div>
      <div class="counter">
        <div class="counter__button counter__button_increment">
          <span class="material-icons-round"> remove </span>
        </div>
        <div class="counter__count">
          <input
            type="number"
            name="${name}"
            id="amountId"
            min="1"
            max="999"
            value="1"
          />
        </div>
        <div class="counter__button counter__button_decrement">
          <span class="material-icons-round"> add </span>
        </div>
      </div>
    </div>
  </div>`;

  return cartItem;
};

const renderCartItems = (cartContainer, data) => {
  const cartItems = cartContainer.querySelector(".cart__items");
  cartItems.innerHTML = "";
  data.forEach((item) => {
    cartItems.innerHTML += createCartItem(item);
  });
};

// Cart Prices

const calculatePrice = (data) => {
  let price = 0;
  for (const item of data) {
    if (!item.onSale) {
      price += item.price * item.total;
    }
    price += item.salePrice * item.total;
  }

  return price;
};

const updatePriceState = (value) => {
  state = {
    ...state,
    price: value,
  };
};

const renderPrice = (cartContainer, data) => {
  const currentPrice = calculatePrice(data);
  updatePriceState(currentPrice);
  const totalPriceElement = cartContainer.querySelector(
    ".total-total .total__price"
  );
  totalPriceElement.textContent = `$${state.price.toFixed(2)}`;
};

// Input listeners

const inputPriceUpdate = (targetName, targetValue, cartContainer, data) => {
  for (const item of data) {
    if (item.name === targetName) {
      item.total = +targetValue;
    }
  }
  renderPrice(cartContainer, data);
};

const addListeners = (cartContainer, data) => {
  const cartInputs = cartContainer.querySelectorAll("#amountId");
  const counters = cartContainer.querySelectorAll(".counter");

  for (const counter of counters) {
    counter.addEventListener("click", (e) => {
      const input = e.currentTarget.querySelector("#amountId");
      const buttonValue = e.target.textContent.trim();
      if (buttonValue === "add") {
        input.value = +input.value + 1;
        inputPriceUpdate(input.name, input.value, cartContainer, data);
      }
      if (buttonValue === "remove" && !isNegative(input.value - 1)) {
        input.value = +input.value - 1;
        inputPriceUpdate(input.name, input.value, cartContainer, data);
      }
    });
  }

  for (const input of cartInputs) {
    input.addEventListener("change", (e) => {
      const targetName = e.target.name;
      const targetValue = e.target.value;
      inputPriceUpdate(targetName, targetValue, cartContainer, data);
    });
  }
};

const isNegative = (target) => target < 0;

export const renderCart = (cartContainer, data) => {
  renderCartItems(cartContainer, data);
  renderPrice(cartContainer, data);
  addListeners(cartContainer, data);
};
