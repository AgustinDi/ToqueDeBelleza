import productsJson from '../productos/Products.json';
import Swal from "sweetalert2";

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

export const fireAlert = function (name, isMobile) {
    const html = `${isMobile ? '<h5>' : '<h3>'}Se a agregado ${name} al carrito!${isMobile ? '</h5>' : '</h3>'}`
    
    Swal.fire({
        position: 'bottom-end',
        title: ``,
        showConfirmButton: false,
        timer: 1200,
        html 
      })
}