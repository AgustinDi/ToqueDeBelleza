'use client'

import { UseMyContext } from "../Context/Context"

export default function AddToCart({ value }) {
    const { addToCart } = UseMyContext();
    
    return (
        <button onClick={() => {addToCart(value.name);alert(`Se a agregado ${value.name} al carrito!`)}}>
            Agregar al carrito
        </button>
    )
}