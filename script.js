let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    displayCart();
}

function displayCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.productName} - $${item.price}`;
        cartList.appendChild(li);
    });
}