import Categories from "./Components/Categories.jsx";
import Carousel from "./Components/Carousel.jsx";
import ProductsList from "./productos/ProductsList.jsx";

export default function initialApp(){
    
    return (
        <>
            <Carousel></Carousel>
            <h3>Nuestras Categorias:</h3>
            <Categories />
            <h3>Nuestros productos mas recomendados:</h3>
            <ProductsList amount={5}/>
        </>
    )
}