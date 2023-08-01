import './page.css';
import productsJson from '../../productos/Products.json';
import IndexV from '@/app/productos/IndexV';
import Link from 'next/link';
import PickAndBuy from './PickAndBuy';
import ShowImages from './ShowImages';

export default function producto({ params }) {
  const nameOfProduct = decodeURI(params.name)
  const product = productsJson.data?.find(value=> value.name === nameOfProduct)

  return (
    <article className='productoarticle'>
      <IndexV category={product.category} individual={nameOfProduct}/>
      <div className='productocontainerPoduct'>
        <div className='productocontainerImage'>
          <ShowImages product={product}/>
        </div> 
        <div className='productosideInfo'>
          <div className='productotitleProduct'>
            <h2>{product.name}</h2>
            <Link href={`/productos/${product.category}`}>
              <h3 style={{color: 'var(--color-pinky)'}}>{product.category}</h3>
            </Link>
          </div> 
          <h4>{product.size} - {product.price}$</h4>
            <div className='productocontainerDescription'>
              <h3 >Sobre {product.name} 💖: </h3><p>{product.description}</p>
            </div>
          <PickAndBuy data={product}/>
        </div>
      </div>
      { product.howToUse || product.precaution
      ?
      <div className='productocontainerMoreDescription'>
        {product.howToUse ? (<div>Modo de uso ❤️: <br/> {product.howToUse}</div>) : <div/>}
        {product.precaution ? (<div>Precauciones 🚧: <br/> {product.precaution}</div>) : <div/>}
      </div>      
      : null}
    </article>
  )
}
