import productsJson from './Products.json'
import ProductCard from './ProductCard.jsx'
import css from '../productos/ProductList.module.css'

export default async function ProductsList({ filter, amount }) {
    let dataFiltered = productsJson.data?.filter(product => filter ? product.category === filter : true)
    let styles = {}
    if(amount) {
        dataFiltered = dataFiltered.slice(0, amount)
        styles = {
            // gridTemplateColumns: `repeat(${amount}, 1fr)`,
            display: 'flex',
            // width: '100%',
            justifyContent: 'space-evenly'
        }
    }

    // if(dataFiltered.length >= 4)


    return (
            <div className={css.productsList} style={styles}>
            {dataFiltered?.map(value => <ProductCard value={value} key={value.name}/>)}
            </div>
    )
}