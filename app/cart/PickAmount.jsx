'use client'

import { UseMyContext } from "../Context/Context";
import './PickAmount.css';

export default function PickAmount({ data }) {
    const { minusToCart, addToCart } = UseMyContext();

    return (
        <div className='cartsetAmount'>
            <button className="cartamountButtonLeft" onClick={()=>minusToCart(data && data.name)}>{'<'}</button>
            <p>{data && data.amount}</p>
            <button className="cartamountButtonRight" onClick={()=>addToCart(data && data.name)}>{'>'}</button>
        </div>
    )
}
