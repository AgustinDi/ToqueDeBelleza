import ProductsList from '../ProductsList';
import ProductsContainer from '../ProductsContainer';
import IndexV from '../IndexV';

export default function CategorySection({ params }) {
  const category = decodeURI(params.category);

  return (
    <ProductsContainer>
        <IndexV category={category}/>
        <ProductsList filter={category}/>
    </ProductsContainer>
  )
}
