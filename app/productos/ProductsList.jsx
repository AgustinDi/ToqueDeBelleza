import productsJson from './Products.json'
import ProductCard from './ProductCard.jsx'
import css from './ProductList.module.css'
import IndexV from './IndexV'

export default async function ProductsList({ filter, amount }) {
    let dataFiltered = productsJson.data?.filter(product => filter ? product.category === filter : true)
    let styles = {}
    if(amount) {
        dataFiltered = dataFiltered.slice(0, amount)
        styles = {
            gridTemplateColumns: `repeat(${amount}, 1fr)`
        }
    }


    return (
        <div>
            <div className={css.productsList} style={styles}>
            {dataFiltered?.map(value => <ProductCard value={value} key={value.name}/>)}
            </div>
        </div>
    )
}