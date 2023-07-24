'use client'

import { UseMyContext } from "../Context/Context";
import { fireAlert } from "../helper/functions";

export default function AddToCart({ value }) {
    const { addToCart } = UseMyContext();
    
    return (
        <button className='prcaddButton' onClick={() => {addToCart(value.name);fireAlert({name: value.name, urlImage: value.image})}}>
            Agregar al carrito
        </button>
    )
}