import productsJson from './Products.json'
import ProductCard from './ProductCard.jsx'
import css from '../productos/ProductList.module.css'

export default async function ProductsList({ filter, amount }) {
    let dataFiltered = productsJson.data?.filter(product => filter ? product.category === filter : true)
    let styles = {}
    if(amount) {
        dataFiltered = dataFiltered.slice(0, amount)
        styles = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, max-content))'
        }
    }

    return (
            <div className={css.productsList} style={styles}>
            {dataFiltered?.map(value => <ProductCard value={value} key={value.name}/>)}
            </div>
    )
}