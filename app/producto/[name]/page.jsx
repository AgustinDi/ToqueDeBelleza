import Image from 'next/image';
import css from './page.module.css';
import productsJson from '../../productos/Products.json';
import IndexV from '@/app/productos/IndexV';
import Link from 'next/link';
import BuyButton from './BuyButton';

export default function producto({ params }) {
  const nameOfProduct = decodeURI(params.name)
  const product = productsJson.data?.find(value=> value.name === nameOfProduct)

  return (
    <article className={css.article}>
      <IndexV category={product.category} individual={nameOfProduct}/>
      <div className={css.containerPoduct}>
        <div className={css.containerImage}>
          <Image fill src={product.image} alt={product.name}/>
        </div> 
        <div className={css.sideInfo}>
          <div className={css.titleProduct}>
            <h2>{product.name}</h2>
            <Link href={`/productos/${product.category}`}>
              <h3>{product.category}</h3>
            </Link>
          </div> 
          <h4>{product.size} - {product.price}$</h4>
          <h5>Sobre {product.name}: <br/> {product.description}</h5>
          <div className={css.buttonAddToCart}>
          <BuyButton name={product.name}/> {/* este boton es un futuro componente 'use client' */}
          </div>
        </div>
      </div>
      { product.howToUse || product.precaution 
      ?
      <div className={css.containerMoreDescription}>
        {product.howToUse && (<div>modo de uso: <br/> {product.howToUse}</div>)}
        {product.precaution && (<div>precauciones: <br/> {product.precaution}</div>)}
      </div>      
      : null}
    </article>
  )
}
