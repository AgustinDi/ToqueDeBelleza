'use client'

import { useMyContext } from "../Context/Context"

export default function AddToCart({ value }) {
    const { addToCart } = useMyContext();
    
    return (
        <button onClick={() => {addToCart(value);alert(`Se a agregado ${value.name} al carrito!`)}}>
            Agregar al carrito
        </button>
    )
}