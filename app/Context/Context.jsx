'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { cleanCart } from "../helper/functions";

export const context = createContext();

export const UseMyContext = () => {
    const cartContext = useContext(context);
    if(!cartContext) throw new Error('No se encuentra el Provider, deberia usarse dentro de uno.');
    return cartContext
}

export const Context = ({ children }) => {
    const [cart, setCart] = useState(cleanCart())

    const addToCart = (product) => {
        setCart(prevCart => {
            const result = {...prevCart, [product]: prevCart[product] + 1}
            localStorage.setItem('cart', JSON.stringify(result))
            return result   
        })
    }

    const minusToCart = (product) => {
        setCart(prevCart => {
            const result = prevCart[product] === 0 ? prevCart : {...prevCart, [product]: prevCart[product] - 1}
            localStorage.setItem('cart', JSON.stringify(result))
            return result
        })
}
    
    const removeToCart = (product) => {
        setCart(prevCart => {
            const result = {...prevCart, [product]: 0}
            localStorage.setItem('cart', JSON.stringify(result))
            return result
        })
    }

    return <context.Provider value={{cart, addToCart, minusToCart, removeToCart}}>
        { children }
    </context.Provider>
}