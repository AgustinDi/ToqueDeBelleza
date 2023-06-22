import ProductsList from "./ProductsList";
import ProductsContainer from "./ProductsContainer";
import IndexV from "./IndexV";

export default function products() {
    return (
        <ProductsContainer >
            <IndexV />
            <ProductsList/>
        </ProductsContainer>
    )
}