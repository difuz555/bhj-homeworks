const productDecrement = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const productIncrement = Array.from(document.getElementsByClassName('product__quantity-control_inc'));
const productValue = Array.from(document.getElementsByClassName('product__quantity-value'));
const btnsAdd = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products');

productDecrement.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (Number(productValue[index].textContent) !== 1) {
            productValue[index].textContent = String(Number(productValue[index].textContent) - 1);
        }
    })
})

productIncrement.forEach((item, index) => {
    item.addEventListener('click', () => {
        productValue[index].textContent = String(Number(productValue[index].textContent) + 1);
    })
})

btnsAdd.forEach((item, index) => {
    item.addEventListener('click', () => {
        let cartProduct = Array.from(document.getElementsByClassName('cart__product'));
        
        if (!cartProduct.length || !cartProduct.map(function(item) {return item.dataset.id}).includes(item.closest('.product').dataset.id)) {
            const productInCart = document.createElement('div');
            productInCart.classList.add('cart__product');
            productInCart.dataset.id = item.closest('.product').dataset.id;
            const imgLink = item.closest('.product').children[1].getAttribute('src');
            const countOfProduct = item.previousElementSibling.children[1].textContent;
            productInCart.innerHTML = '<img class="cart__product-image" src="' + imgLink + '"><div class="cart__product-count">' + countOfProduct + '</div>';
            cartProducts.appendChild(productInCart);
        } else {
            for (let element of cartProduct) {
                if (element.dataset.id === item.closest('.product').dataset.id) {
                    element.lastElementChild.textContent = String(Number(element.lastElementChild.textContent.trim()) + Number(item.previousElementSibling.children[1].textContent));
                }
            }
        }
    })
})