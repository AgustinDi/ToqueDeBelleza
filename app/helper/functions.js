import productsJson from '../productos/Products.json';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const removeAccents = function (str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const cleanCart = function () {
    let cleanedCart = {};
    productsJson.data.forEach(product => cleanedCart[product.name] = 0);
     // Se crea el objeto y por cada producto se iguala a 0, teniendo 0 de ese producto en el carrito.
    return cleanedCart;
}

export const getTotalCart = function (productsCart) {
    let totalCart = 0;
    productsCart.forEach(product => totalCart += product.price * product.amount)
    return totalCart
}

export const getDetailProduct = function (name) {
    return productsJson.data.filter(product=>product.name === name)[0];
}

export const fireAlert = function ({name, amount, cb, urlImage}) {
    const text = amount 
    ? ` Se han agregado x ${amount} ${name} al carrito!` 
    : ` Se a agregado un ${name} al carrito!`

    Toastify({
        text,
        avatar: urlImage,
        duration: 2300,
        destination: "/cart",
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            color: 'var(--color-primary)',
            background: 'var(--color-pinky)',
            padding: '14px',
            borderRadius: '7px',
            fontSize: 'medium',
            // border: '2px solid var(--color-fourth)'
        }, 
        offset: {
          x: 15,
          y: 10
        },
        onClick: function(){cb && cb()}
      }).showToast();
}