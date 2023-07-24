'use client'

import { UseMyContext } from "../Context/Context";
import { fireNotification } from "../helper/functions";

export default function AddToCart({ value }) {
    const { addToCart } = UseMyContext();
    
    return (
        <button className='prcaddButton' onClick={() => {addToCart(value.name);fireNotification({name: value.name, urlImage: value.image})}}>
            Agregar al carrito
        </button>
    )
}