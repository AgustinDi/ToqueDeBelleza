import React from 'react'
import ProductsList from '../ProductsList'

export default function CategorySection({ params }) {

  return (
    <div>
        <ProductsList filter={decodeURI(params.category)}/>
    </div>
  )
}
