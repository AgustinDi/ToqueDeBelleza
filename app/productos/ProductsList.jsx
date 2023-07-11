import productsJson from './Products.json'
import ProductCard from './ProductCard.jsx'
import '../productos/ProductList.css'

export default async function ProductsList({ filter, amount }) {
    let dataFiltered = productsJson.data?.filter(product => filter ? product.category === filter : true)
    let styles = {}
    if(amount) {
        dataFiltered = dataFiltered.slice(0, amount)
        styles = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min-content, max-content))'
        }
    }

    return (
            <div className='productsList' style={styles}>
            {dataFiltered?.map(value => <ProductCard value={value} key={value.name}/>)}
            </div>
    )
}