'use client'

import Image from "next/image";
import { useMyContext } from "../Context/Context"

export default function ProductCart({ data }) {
  const { addToCart, removeToCart, minusToCart} = useMyContext();

    return (
    <div>
        <button onClick={()=> removeToCart(data.name)}>X</button>
        <div style={{position: 'relative', width:200, height:200}}>
          <Image src={data.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={data.name}/>
        </div>
        {data.name}
        ${data.price}
        cantidad: {data.amount}
        <button onClick={()=>minusToCart(data.name)}>-1</button>
        -
        <button onClick={()=>addToCart(data.name)}>+1</button>
    </div>
  )
}
