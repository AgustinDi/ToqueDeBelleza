'use client'

import { useMyContext } from "../Context/Context"
import ProductCart from "./ProductCart";

export default function cart() {
    const {cart, addToCart} = useMyContext();

    return (
        <>
            <h2>Su carrito:</h2>
            <hr />
            {cart?.map(product=><ProductCart key={product.name} product={product} />)}
        </>
    )
}