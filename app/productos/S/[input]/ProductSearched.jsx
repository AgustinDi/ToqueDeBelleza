import css from '../../ProductList.module.css';
import ProductCard from '../../ProductCard';
import productsJson from '../../Products.json';
import { removeAccents } from '@/app/helper/functions';
import IndexV from '../../IndexV';


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
          <div className={css.productsList}>
            {result?.map(value => <ProductCard value={value} key={value.name}/>)}
          </div>
        </div>
        :
        <div>
          <h3>Lo sentimos, no encontramos resultados para su busqueda:</h3>
          <p>{search}</p>
        </div>
      }
      
    </div>
  )
}
