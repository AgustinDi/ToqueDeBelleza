import productsJson from './Products.json'
import ProductCard from './ProductCard.jsx'
import css from './ProductList.module.css'

export default async function ProductsList({ filter, orderby }) {
    const dataFiltered = productsJson.data?.filter(product => filter ? product.category === filter : true)

    return (
        <div>
            <h2>Nuestros productos:</h2>
            <div className={css.productsList}>
            {dataFiltered?.map(value => <ProductCard value={value} key={value.name}/>)}
            </div>
        </div>
    )
}