'use client'

import { useMyContext } from "../Context/Context"
import ProductCard from "../productos/ProductCard";

export default function cart() {
    const {cart, addToCart} = useMyContext();

    return (
        <>
            <h2>Su carrito:</h2>
            <button onClick={()=> addToCart({name: 'nuevo producto'})}> agregar producto nuevo</button>
            <hr />
            {cart?.map(product=><ProductCard value={product} />)}
        </>
    )
}