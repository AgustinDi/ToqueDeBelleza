'use client'

import { useEffect, useState } from "react";
import { UseMyContext } from "../Context/Context"
import { getDetailProduct } from "../helper/functions";
import ProductCart from "./ProductCart";

export default function cart() {
    const {cart} = UseMyContext();
    const [renderedCart, setRenderedCart] = useState([])
    
    function getCart(){
        let products = [];
        console.log(cart)
        for (const property in cart) {
            if(cart[property] !== 0){
                let data = getDetailProduct(property)
                data.amount = cart[property];
                products.push(data)
            }
        }
        setRenderedCart(products)
    }

    useEffect(()=>{
        getCart()
    },[cart])

    return (
        <>
            <h2>Su carrito:</h2>
            <hr />
            {renderedCart && renderedCart.map(product => <ProductCart data={product} key={product.name}/>)}
        </>
    )
}