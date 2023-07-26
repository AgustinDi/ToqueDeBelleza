'use client'

import productsJson from '../productos/Products.json';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import './functions.css';

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

export const fireNotification = function ({name, amount, cb, urlImage}) {
    const text = amount 
    ? ` Se han agregado x ${amount} ${name} al carrito!` 
    : ` Se a agregado un ${name} al carrito!`

    Toastify({
        text,
        className: 'popUpNotification',
        avatar: urlImage,
        duration: 2000,
        destination: "/cart",
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        close: true,
        style: {
            color: 'var(--color-primary)',
            background: 'var(--color-pinky)',
            padding: '14px',
            borderRadius: '7px',
            fontSize: 'medium'
            // border: '2px solid var(--color-fourth)'
        }, 
        offset: {
          x: 15,
          y: 10
        },
        onClick: function(){cb && cb()}
      }).showToast();
}

export const fireAlert = function (text) {
    Toastify({
        text,
        duration: 1000,
        gravity: "top",
        position: "center",
        stopOnFocus: false,
        style: {
            color: 'var(--color-primary)',
            background: 'var(--color-fifth)',
            padding: '5px',
            borderRadius: '2px',
            fontSize: 'medium',
            boxShadow: 'none'
            // border: '2px solid var(--color-fourth)'
        }, 
        offset: {
          x: 15,
          y: 10
        }
      }).showToast();
}