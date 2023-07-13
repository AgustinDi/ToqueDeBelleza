import Image from 'next/image';
import './page.css';
import productsJson from '../../productos/Products.json';
import IndexV from '@/app/productos/IndexV';
import Link from 'next/link';
import BuyButton from './BuyButton';

export default function producto({ params }) {
  const nameOfProduct = decodeURI(params.name)
  const product = productsJson.data?.find(value=> value.name === nameOfProduct)

  return (
    <article className='productoarticle'>
      <IndexV category={product.category} individual={nameOfProduct}/>
      <div className='productocontainerPoduct'>
        <div className='productocontainerImage'>
          <Image fill src={product.image} alt={product.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div> 
        <div className='productosideInfo'>
          <div className='productotitleProduct'>
            <h2>{product.name}</h2>
            <Link href={`/productos/${product.category}`}>
              <h3>{product.category}</h3>
            </Link>
          </div> 
          <h4>{product.size} - {product.price}$</h4>
          <h5>Sobre {product.name} 💖: <br/> {product.description}</h5>
          <div className='productobuttonAddToCart'>
          <BuyButton name={product.name}/>
          </div>
        </div>
      </div>
      { product.howToUse || product.precaution 
      ?
      <div className='productocontainerMoreDescription'>
        {product.howToUse ? (<div>modo de uso ❤️: <br/> {product.howToUse}</div>) : <div/>}
        {product.precaution ? (<div>precauciones 🚧: <br/> {product.precaution}</div>) : <div/>}
      </div>      
      : null}
    </article>
  )
}
