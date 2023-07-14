'use client'

import Button from "@/app/Components/Button";
import PickAmountToBuy from "@/app/Components/PickAmountToBuy.jsx";
import { useState } from "react";
import { UseMyContext } from "@/app/Context/Context";
import { fireAlert } from "@/app/helper/functions";

export default function PickAndBuy({ data }) {
    const { addXToCart, isMobile } = UseMyContext();
    const [amount, setAmount] = useState(1);

    function buy (){
        addXToCart(data.name, amount)
        fireAlert(data.name , isMobile, amount)
    }

    return (
        <div className='productobuttonAddToCart'>
            <PickAmountToBuy setAmount={setAmount} amount={amount}/>
            <Button content={'Agregar al Carrito'} data={data} click={buy}/>
        </div>
    )
}
