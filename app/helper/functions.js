import productsJson from '../productos/Products.json'

export const removeAccents = function (str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const cleanCart = function () {
    const cleanedCart = {};
    productsJson.data.forEach(product => {
        cleanedCart[product.name] = 0;
        if(product.name === 'Argán') cleanedCart[product.name] = 3;
        if(product.name === 'Bonet') cleanedCart[product.name] = 2;
        if(product.name === 'Blue Protector') cleanedCart[product.name] = 1;
        if(product.name === 'Diamond') cleanedCart[product.name] = 1;
    });
    return cleanedCart;
}

export const getTotalCart = function (productsCart) {
    let totalCart = 0;
    productsCart.forEach(product => totalCart += product.price * product.amount)
    return totalCart
    // productsJson.data.filter(product=>product.name === name)
}

export const getDetailProduct = function (name) {
    return productsJson.data.filter(product=>product.name === name)[0];
}