import Categories from "./Components/Categories.jsx";
import Slider from "./Components/Slider.jsx";
import SliderFancy from "./Components/SliderFancy.jsx";
import ProductsList from "./productos/ProductsList.jsx";

export default function initialApp(){
    
    return (
        <>
            <Slider /> 
            <SliderFancy />
            <h3>Nuestras Categorias:</h3>
            <Categories />
            <h3>Nuestros productos mas recomendados:</h3>
            <ProductsList amount={5}/>
        </>
    )
}