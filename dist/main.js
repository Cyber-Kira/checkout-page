(()=>{"use strict";let e={price:0,shippingPrice:19};const n=(n,t)=>{const a=(n=>{let t=0;for(const e of n)e.onSale||(t+=e.price*e.total),t+=e.salePrice*e.total;return t>0?t+e.shippingPrice:t})(t);var r;r=a,e={...e,price:r},n.querySelector(".total-total .total__price").textContent=`$${e.price.toFixed(2)}`},t=(e,t,a,r)=>{for(const n of r)n.name===e&&(n.total=+t);n(a,r)},a=[{name:"Vintage Backbag",salePrice:54.99,price:94.99,onSale:!0,image:"src/img/photo1.png",total:1},{name:"Levi Shoes",salePrice:74.99,price:124.99,onSale:!0,image:"src/img/photo2.png",total:1}];window.onload=function(){((e,a)=>{((e,n)=>{const t=e.querySelector(".cart__items");t.innerHTML="",n.forEach((e=>{t.innerHTML+=(e=>{const n=e.price,t=e.salePrice,a=e.name;return`\n  <div class="cart-item">\n    <div class="cart-item__image">\n      <img src=${e.image} alt=${a} />\n    </div>\n    <div class="cart-container">\n      <h2 class="cart-item__title">${a}</h2>\n      <div class="cart-item__price">\n        <span class="cart-item__price">$${t}</span>\n        <span class="cart-item__price_old">$${n}</span>\n      </div>\n      <div class="counter">\n        <div class="counter__button counter__button_increment">\n          <span class="material-icons-round"> remove </span>\n        </div>\n        <div class="counter__count">\n          <input\n            type="number"\n            name="${a}"\n            id="amountId"\n            min="1"\n            max="999"\n            value="1"\n          />\n        </div>\n        <div class="counter__button counter__button_decrement">\n          <span class="material-icons-round"> add </span>\n        </div>\n      </div>\n    </div>\n  </div>`})(e)}))})(e,a),n(e,a),((e,n)=>{const a=e.querySelectorAll("#amountId"),r=e.querySelectorAll(".counter");for(const a of r)a.addEventListener("click",(a=>{const r=a.currentTarget.querySelector("#amountId"),c=a.target.textContent.trim();"add"===c&&(r.value=+r.value+1,t(r.name,r.value,e,n)),"remove"!==c||r.value-1<0||(r.value=+r.value-1,t(r.name,r.value,e,n))}));for(const r of a)r.addEventListener("change",(a=>{const r=a.target.name,c=a.target.value;t(r,c,e,n)}))})(e,a)})(document.querySelector(".form").querySelector(".cart"),a)}})();