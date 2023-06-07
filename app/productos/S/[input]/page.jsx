import ProductSearched from './ProductSearched'

export default function CategorySection({ params }) {

  return (
    <div>
        <ProductSearched search={decodeURI(params.input)}/>
    </div>
  )
}