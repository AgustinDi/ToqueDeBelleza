import React from 'react'
import productsJson from '../../productos/Products.json'

export default function producto({ params }) {
  const product = productsJson.data?.filter(value=> value.name = params.name)

  return (
    <article>
        {params.name}
            {/* <div>
                <p>sobre {value.name}: <br/> {value.description}</p>
                {value.modeOfUse && (<p>modo de uso: <br/> {value.modeOfUse}</p>)}
                {value.precaution && (<p>precauciones: <br/> {value.precaution}</p>)}
                {value.aplication && (<p>aplicacion: <br/> {value.aplication}</p>)}
            </div> */}
    </article>
  )
}
