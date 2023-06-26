import ProductSearched from './ProductSearched'

export default function CategorySection({ params }) {

  return (
    <div style={{width: '100%'}}>
        <ProductSearched search={decodeURI(params.input)}/>
    </div>
  )
}