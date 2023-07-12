import '../../ProductList.css';
import ProductCard from '../../ProductCard';
import productsJson from '../../Products.json';
import { removeAccents } from '@/app/helper/functions';
import IndexV from '../../IndexV';
import Image from 'next/image';


export default function ProductSearched({ search }) {
  const properties = ["name","category"]

  const result = productsJson.data.filter(product => {
    let finded = false;
    for (let property in properties){
      const searchInput = removeAccents(search.toLowerCase());
      const productProperty = removeAccents(product[properties[property]].toLowerCase());
      
      finded = productProperty.includes(searchInput)
      if(finded) return true
    }
    
  })

  return (
    <div>
      {
        result.length 
        ? 
        <div>
          <IndexV category={search}/> 
          {/* en un futuro hacer que el nombre de la busqueda en el indexV empieze con mayus  */}
          <div className='productsList'>
            {result?.map(value => <ProductCard value={value} key={value.name}/>)}
          </div>
        </div>
        :
        <div >
          {/* agregar a futuro classnames a todo esto */}
          <button style={{position: 'absolute', top: '0px'}}>Volver</button>
          <div style={{position: 'relative', width: '200px', height: '200px', marginTop: '100px'}}>
            <Image fill src={'/error 404.png'} alt='error 404' />
          </div>
          <h3 style={{marginBottom: '0px'}}>Lo sentimos, no encontramos resultados para su busqueda</h3>
        </div>
      }
      
    </div>
  )
}
