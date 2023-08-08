import productsJson from '@/app/helper/Products.json';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import './functions.css';

const getCategory = ['Protector Térmico', 'Nutrición', 'Ampollas Emulsionantes', 'Kit']
const getHowToUse = ['como usar un protector terminco....', 'como usar una nutricion....', 'como usar una ampolla emulsionante....', 'Kit']
const getPrecaution = ['precaucion para protector terminco....', 'precaucion para una nutricion....', 'precaucion para una ampolla emulsionante....', 'Kit']

class Product {
    constructor(name, description, price, size, images, category){
        this.name = name;
        this.description = description;
        this.price = `$ ${price}`;
        this.size = `${size}ml`;
        this.images = [...images];
        this.category = getCategory[category]; //Confirmar en un futuro si hacerlo asi.
        this.howToUse = getHowToUse[category];
    }
    // name - description - size - price // son individuales
    // images // es un array individual
    // category - HowToUse - Precaution // es grupal

}

export const removeAccents = function (str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const getAllProducts = function () {
    return productsJson.data.map(({name, description, price, size, images, category}) => new Product(name, description, price, size, images, category))
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