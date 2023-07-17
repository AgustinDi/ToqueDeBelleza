'use client'

import "./ProductCart.css"
import Image from "next/image";
import { UseMyContext } from "../Context/Context"
import Link from "next/link";
import PickAmount from "./PickAmount.jsx";

export default function ProductCart({ data }) {
  const { removeToCart } = UseMyContext();

    return (
    <div className='cartproductCart'>
      <div>
        <Link  href={`/producto/${data.name}`} >
          <div className='cartimageContainer'>
            <Image src={data.image} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={data.name}/>
          </div>
        </Link>
      </div>
        <div className='cartsideInfo'>
          <div className='carttopInfo'>
            <div className='carttitleInfo'>
              <div>
                <Link  href={`/producto/${data.name}`}>
                <h3>
                  {data.name}
                </h3>
                </Link>
                <h4>
                  {data.size} 
                </h4>
              </div>
            <div className='cartcategoryAndX'>
              <Link  href={`/productos/${data.category}`} className='cartCategoryP'>
              <p>
                {data.category}  
              </p> 
              </Link>
            </div>
            </div>
                <button className='cartdeleteButton' onClick={()=> removeToCart(data.name)}>X</button>
          </div>
        <div className='cartbottomInfo'>
          <PickAmount data={data && data} />
          <div className="cartsubTotalContainer">
            <p className="cartsubTotal">Subtotal: </p><p>${data.price * data.amount}</p>
          </div>
        </div>
        </div>
    </div>
  )
}
