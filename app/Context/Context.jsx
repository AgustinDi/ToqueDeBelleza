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
    const [isMobile, setIsMobile] = useState()

    useEffect(()=>{
        resize();    
        const localCart = JSON.parse(localStorage.getItem('cart'))
        if(localCart) setCart(localCart);
        
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [])

    const resize = () => {
      setIsMobile(window.innerWidth <= 768); // Define el ancho máximo para considerar como dispositivo móvil
    };
    
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const invertMobile = () => setIsMobile(value=>!value)

    const addToCart = (product) => setCart({...cart, [product]: cart[product] + 1})

    const addXToCart = (product, amount) => setCart({...cart, [product]: cart[product] + amount})

    const minusToCart = (product) => setCart(cart[product] === 0 ? null : {...cart, [product]: cart[product] - 1})
    
    const removeToCart = (product) => setCart({...cart, [product]: 0})

    const hasProducts = () => Object.values(cart).filter(Boolean)

    return <context.Provider value={{isMobile, invertMobile, cart, addToCart, minusToCart, removeToCart, hasProducts, addXToCart}}>
        { children }
    </context.Provider>
}