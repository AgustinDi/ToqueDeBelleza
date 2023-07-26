'use client'

import Swal from "sweetalert2";
import { UseMyContext } from "../Context/Context";
import './PickAmount.css';

export default function PickAmount({ data, deleteAmount }) {
    const { minusToCart, addToCart } = UseMyContext();

    function verify(){
        deleteAmount();
    }

    return (
        <div className='cartsetAmount'>
            <button className="cartamountButtonLeft" onClick={verify}>{'<'}</button>
            <p>{data && data.amount}</p>
            <button className="cartamountButtonRight" onClick={()=>addToCart(data && data.name)}>{'>'}</button>
        </div>
    )
}
