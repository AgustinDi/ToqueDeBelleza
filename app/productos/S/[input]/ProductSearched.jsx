import css from '../../ProductList.module.css';
import ProductCard from '../../ProductCard';
import productsJson from '../../Products.json';
import removeAccents from '@/app/helper/functions';


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
        <h3>Resultados de la busqueda:</h3>
        <span>{search}</span>
          <div className={css.productsList}>
            {result?.map(value => <ProductCard value={value} key={value.name}/>)}
          </div>
        </div>
        :
        <div>
          <p>Lo sentimos, no encontramos resultados para:</p>
          <p>{search}</p>
        </div>
      }
      
    </div>
  )
}
