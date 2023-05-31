import React from 'react'
import productsJson from '../../productos/Products.json'

export default function producto({ params }) {
  const product = productsJson.data?.filter(value=> value.name = params.name)

  return (
    <article>
        {params.name}
        {/* {console.log(productsJson)} */}
    </article>
  )
}
