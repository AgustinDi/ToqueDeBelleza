'use client'

import { UseMyContext } from "../Context/Context";
import { fireAlert } from "../helper/functions";

export default function AddToCart({ value }) {
    const { addToCart, isMobile } = UseMyContext();
    
    return (
        <button className='prcaddButton' onClick={() => {addToCart(value.name);fireAlert(value.name,isMobile)}}>
            Agregar al carrito
        </button>
    )
}