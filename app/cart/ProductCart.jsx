'use client'

import { useMyContext } from "../Context/Context"

export default function ProductCart({ data }) {
  const { addToCart, removeToCart, minusToCart} = useMyContext();

    return (
    <div>
        <button onClick={()=> removeToCart(data.name)}>X</button>
        {data.name}
        ${data.price}
        cantidad: {data.amount}
        <button onClick={()=>minusToCart(data.name)}>-1</button>
        -
        <button onClick={()=>addToCart(data.name)}>+1</button>
    </div>
  )
}
