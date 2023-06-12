'use client'

export default function ProductCart({ product }) {
  
    return (
    <div>
        {product.name}
        ${product.price}
    </div>
  )
}
