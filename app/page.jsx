import Categories from "./Components/Categories.jsx";
import Slider from "./Components/Slider.jsx";
import ProductsList from "./productos/ProductsList.jsx";

export default function initialApp(){
    
    return (
        <>
            <Slider /> 
            <Categories />
            <ProductsList amount={5}/> 
            <div style={{height: '50vh'}}></div>
        </>
    )
}