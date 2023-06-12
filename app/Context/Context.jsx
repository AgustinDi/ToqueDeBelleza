'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { cleanCart } from "../helper/functions";

export const context = createContext();

export const useMyContext = () => {
    const cartContext = useContext(context);
    if(!cartContext) throw new Error('No se encuentra el Provider, deberia usarse dentro de uno.');
    return cartContext
}

export const Context = ({ children }) => {
    const [cart, setCart] = useState(cleanCart())

    const addToCart = (product) => setCart({...cart, [product]: cart[product] + 1})

    const minusToCart = (product) => setCart(cart[product] === 0 ? null : {...cart, [product]: cart[product] - 1})
    
    const removeToCart = (product) => setCart({...cart, [product]: 0})

    return <context.Provider value={{cart, addToCart, minusToCart, removeToCart}}>
        { children }
    </context.Provider>
}