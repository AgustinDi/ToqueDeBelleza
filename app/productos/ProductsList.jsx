import productsJson from './Products.json'
import ProductCard from './ProductCard.jsx'
import css from './ProductList.module.css'

export default async function ProductsList() {
    return (
        <div>
            <h2>Productos:</h2>
            <div className={css.productsList}>
            {productsJson.data?.map(value => <ProductCard value={value} key={value.name}/>)}
            </div>
        </div>
    )
}