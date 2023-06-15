'use client'

import css from "./ProductCart.module.css"
import Image from "next/image";
import { UseMyContext } from "../Context/Context"

export default function ProductCart({ data }) {
  const { addToCart, removeToCart, minusToCart} = UseMyContext();

    return (
    <div className={css.productCart}>
      <div>
        <div className={css.imageContainer}>
          <Image src={data.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={data.name}/>
        </div>
      </div>
        <div className={css.sideInfo}>
          <div className={css.topInfo}>
            <div className={css.titleInfo}>
              <h3>
                {data.name}
              </h3>
              <h4>
                {data.size} 
              </h4>
              <span>
                {data.category}  
              </span> 
            </div>
            <button onClick={()=> removeToCart(data.name)}>X</button>
          </div>
        <div className={css.bottomInfo}>
          <div>
            <button onClick={()=>minusToCart(data.name)}>{'<'}</button>
            <span>{data.amount}</span>
            <button onClick={()=>addToCart(data.name)}>{'>'}</button>
          </div>
          Subtotal: ${data.price * data.amount}
        </div>
        </div>
    </div>
  )
}
