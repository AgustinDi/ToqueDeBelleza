import '../../ProductList.css';
import './ProductSearched.css';
import '@/app/Components/Categories.css';
import ProductCard from '../../ProductCard';
import productsJson from '@/app/helper/Products.json';
import { removeAccents } from '@/app/helper/functions';
import IndexV from '../../IndexV';
import Image from 'next/image';
import GoBack from './GoBack';


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
          <div className='productsList'>
            {result?.map(value => <ProductCard value={value} key={value.name}/>)}
          </div>
        </div>
        :
        <div className='prodSear_Container'>
          <h3>Lo sentimos, no encontramos resultados para su busqueda</h3>
          <div className='prodSear_404Container'>
            <Image fill src={'/error 404.png'} alt='error 404' />
          </div>
          <GoBack/>
        </div>
      }
      
    </div>
  )
}
