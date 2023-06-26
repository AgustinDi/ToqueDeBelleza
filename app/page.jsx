import Categories from "./Components/Categories.jsx";
import Slider from "./Components/Slider.jsx";
import ProductsList from "./productos/ProductsList.jsx";

export default function initialApp(){
    
    return (
        <>
            <Slider /> 
            <h3>Nuestras Categorias:</h3>
            <Categories />
            <h3>Nuestros productos mas recomendados:</h3>
            <ProductsList amount={5}/>
            {/* <div style={{height: '50vh'}}></div> */}
        </>
    )
}