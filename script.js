let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = "Total: Rp " + total.toLocaleString();
}

function checkout() {
  if (cart.length === 0) {
    alert("Chart is empty!");
    return;
  }

  let message = "Halo, saya ingin membeli:\n";
  cart.forEach(item => {
    message += `- ${item.name} (Rp ${item.price.toLocaleString()})\n`;
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  message += `\nTotal: Rp ${total.toLocaleString()}`;

  const whatsappNumber = "6281234567890"; // ganti dengan nomor WA toko kamu
  const whatsappURL = `[wa.me](https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)})`;
  window.open(whatsappURL, "_blank");
}
