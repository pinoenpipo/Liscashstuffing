let cart = [];
function addToCart(product, price) {
    cart.push({ product, price });
    document.getElementById('cart-count').textContent = cart.length;
    alert(product + " is toegevoegd aan je winkelwagen!");
}