let cartCount = 0;

function addToCart(productName, price) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`Se añadió "${productName}" al carrito por S/ ${price}.00`);
}

function toggleCart() {
  alert(`Tienes ${cartCount} productos en tu carrito.`);
}