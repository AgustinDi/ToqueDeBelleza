import productsJson from './Products.json'
import ProductCard from './ProductCard.jsx'

export default async function ProductsList() {
    return (
        <div>
            <h2>Productos:</h2>
            {productsJson.data?.map(value => <ProductCard value={value} key={value.name}/>)}
            <div>
            </div>
        </div>
    )
}