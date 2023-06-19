import ProductsList from '../ProductsList';
import IndexV from '../IndexV';

export default function CategorySection({ params }) {
  const category = decodeURI(params.category);

  return (
    <div>
        <IndexV category={category}/>
        <ProductsList filter={category}/>
    </div>
  )
}
