import productsJson from '../productos/Products.json'

export const removeAccents = function (str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const cleanCart = function () {
    const actualCart = JSON.parse(localStorage.getItem('cart'))
    if(actualCart) return actualCart // Si ya existia un carrito en el localStorage se usa ese
    
    let cleanedCart = {};
    productsJson.data.forEach(product => cleanedCart[product.name] = 0); // Se crea el objeto y por cada producto se iguala a 0, teniendo 0 de ese producto en el carrito.
    localStorage.setItem('cart', JSON.stringify(cleanedCart))

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