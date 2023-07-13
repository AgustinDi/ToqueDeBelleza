'use client'

import Button from "@/app/Components/Button";
import PickAmountToBuy from "@/app/Components/PickAmountToBuy.jsx";
import { useState } from "react";

export default function PickAndBuy({ data }) {
    const [amount, setAmount] = useState(1);

    return (
        <div className='productobuttonAddToCart'>
            <PickAmountToBuy setAmount={setAmount} amount={amount}/>
            <Button />
        </div>
    )
}
