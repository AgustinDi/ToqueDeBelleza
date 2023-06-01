import React from 'react'
import Image from 'next/image';
import productsJson from '../../productos/Products.json';

export default function producto({ params }) {
  const nameOfProduct = decodeURI(params.name)
  const product = productsJson.data?.find(value=> value.name === nameOfProduct)

  return (
    <article>
      <div>
        <Image width={300} height={300} src={product.image} />
        <div>
          <h2>{product.name}</h2>
          <span>{product.size}</span> - <span>{product.price}$</span>
          <br/>
          <button>Añadir al Carrito</button>
          {/* este boton es un futuro componente 'use client' */}
        </div>
      </div>
      <description>
        <p>sobre {product.name}: <br/> {product.description}</p>
        {product.modeOfUse && (<p>modo de uso: <br/> {product.modeOfUse}</p>)}
        {product.precaution && (<p>precauciones: <br/> {product.precaution}</p>)}
        {product.aplication && (<p>aplicacion: <br/> {product.aplication}</p>)}
      </description>
    </article>
  )
}
