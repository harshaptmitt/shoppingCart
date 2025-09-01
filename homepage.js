let cart =JSON.parse(localStorage.getItem("cart")) || []

let cartCount=document.getElementById('cartCount')
console.log(cartCount)

function updateCartCount(){
    cartCount.textContent=cart.length;
}

let button=document.querySelectorAll('button')
console.log(button)
button.forEach((btn)=>{
    console.log(btn)
    btn.onclick=(e)=>{
        let products=e.target.closest('.product')
        console.log(products)

        let productImg=products.querySelector('img').src 
        let productName=products.querySelector('h3').textContent
        let productPrice=products.querySelector('p').textContent

        let item={productImg,productName,productPrice}
        console.log(item)
        
        cart.push(item)

        alert(`${productName}added to cart`)
        localStorage.setItem("cart",JSON.stringify(cart))
        updateCartCount()
            
    }
})