'use client'

import "./ProductCart.css"
import Image from "next/image";
import { UseMyContext } from "../Context/Context"
import Link from "next/link";

export default function ProductCart({ data }) {
  const { addToCart, removeToCart, minusToCart} = UseMyContext();

    return (
    <div className='productCart'>
      <div>
        <Link  href={`/producto/${data.name}`} >
          <div className='imageContainer'>
            <Image src={data.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={data.name}/>
          </div>
        </Link>
      </div>
        <div className='sideInfo'>
          <div className='topInfo'>
            <div className='titleInfo'>
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
        <div className='bottomInfo'>
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
