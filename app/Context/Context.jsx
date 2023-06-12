'use client'
import { createContext, useContext, useState } from "react";

export const context = createContext();

export const useMyContext = () => {
    const cartContext = useContext(context);
    if(!cartContext) throw new Error('No se encuentra el Provider, deberia usarse dentro de uno.');
    return cartContext
}

export const Context = ({ children }) => {

    const [cart, setCart] = useState([])

    // {
    //     name: 'bonet',
    //     amount: 3
    // }

    const addToCart = (product, amount) => {
        setCart(products => [...products, product])
        
    }
    

    return <context.Provider value={{cart, addToCart}}>
        { children }
    </context.Provider>
}