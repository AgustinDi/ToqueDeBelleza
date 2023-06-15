'use client'

import css from "./ProductCart.module.css"
import Image from "next/image";
import { UseMyContext } from "../Context/Context"
import Link from "next/link";
import Categories from "../Components/Categories";

export default function ProductCart({ data }) {
  const { addToCart, removeToCart, minusToCart} = UseMyContext();

    return (
    <div className={css.productCart}>
      <div>
        <Link  href={`/producto/${data.name}`} >
          <div className={css.imageContainer}>
            <Image src={data.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={data.name}/>
          </div>
        </Link>
      </div>
        <div className={css.sideInfo}>
          <div className={css.topInfo}>
            <div className={css.titleInfo}>
              <Link  href={`/producto/${data.name}`}>
              <h3>
                {data.name}
              </h3>
              </Link>
              <h4>
                {data.size} 
              </h4>
            </div>
            <div>
              <Link  href={`/productos/${data.category}`}>
              <span>
                {data.category}  
              </span> 
              </Link>
              <button onClick={()=> removeToCart(data.name)}>X</button>
            </div>
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
