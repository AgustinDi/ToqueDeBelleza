'use client'

import "./ProductCart.css"
import Image from "next/image";
import { UseMyContext } from "../Context/Context"
import Link from "next/link";
import PickAmount from "./PickAmount.jsx";
import blurData from '@/app/helper/blurData64.json'
import Swal from "sweetalert2";


export default function ProductCart({ data }) {
  const { removeToCart, minusToCart } = UseMyContext();
  const { blur } = blurData;

  function verifyToDeleteAmount(destroy){
    const {name, amount} = data;
    if(amount <= 1 || destroy) {
    Swal.fire({
      html: '<h3 class="cartTitle">¿Estás segur@ que quieres eliminar este producto?</h3>',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminalo',
      cancelButtonText: 'No, gracias',

      buttonsStyling: false,
      customClass: {
        confirmButton: 'cartbtn cartbtn-success',
        cancelButton: 'cartbtn cartbtn-danger'
      },
    }).then((result) => {
      if (!result.isConfirmed) return
      removeToCart(name)
    })
    } else { 
      minusToCart(name)
    }
  }

    return (
    <div className='cartproductCart'>
      <div>
        <Link  href={`/producto/${data.name}`} >
          <div className='cartimageContainer'>
            <Image src={data.images[0]} placeholder="blur" blurDataURL={blur} quality={10} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={data.name}/>
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
                <button className='cartdeleteButton' onClick={()=>verifyToDeleteAmount(true)}>X</button>
          </div>
        <div className='cartbottomInfo'>
          <PickAmount data={data && data} deleteAmount={verifyToDeleteAmount} />
          <div className="cartsubTotalContainer">
            <p className="cartsubTotal">Subtotal: </p><p>${data.price * data.amount}</p>
          </div>
        </div>
        </div>
    </div>
  )
}
