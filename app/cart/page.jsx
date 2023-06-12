'use client'

import { useMyContext } from "../Context/Context"

export default function cart() {
    const {cart, addToCart} = useMyContext();

    return (
        <>
            Carrito con toda la data
            <br />
            <button onClick={()=> addToCart('nuevo producto')}> agregar producto nuevo</button>
            {cart?.map(product=><p>{product}</p>)}
        </>
    )
}