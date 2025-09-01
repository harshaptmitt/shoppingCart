let cart = JSON.parse(localStorage.getItem("cart")) || []

let cartItemContainer = document.getElementById('cartItemContainer')

let totalPrice = document.getElementById('totalPrice')

function displayCart() {
    let total = 0;
    cartItemContainer.innerHTML = "";

    cart.forEach((item, index) => {
        console.log(item, index)

        let article = document.createElement('article')
        console.log(article)
        article.innerHTML = `
        <img src="${item.productImg}" alt="${item.productName}">
        <aside>
        <h3>${item.productName}</h3>
<p>${item.productPrice}</p>
<button onclick="removeItem(${index})">Remove Item</button>
</aside>
        `
        cartItemContainer.appendChild(article)
        let itemPrice = parseFloat(item.productPrice.replace("₹", ""))
        console.log(itemPrice)
        total = total + itemPrice
        console.log(total)
    })
    totalPrice.textContent = total;
}

displayCart()

let clearCart = document.getElementById("Clearcart")
console.log(clearCart)

clearCart.onclick = () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.href = "./cart.html"
}

let checkout = document.getElementById('Checkout')
console.log(checkout)

checkout.onclick = () => {
    alert(`Thank for shopping with us. Your bill is ${totalPrice.textContent}`)
    cart = []
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.href = "./Home.html"
}


function removeItem(index) {
    console.log(index, "index from remove cart")
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    displayCart()
}
