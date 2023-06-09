import Categories from "./Components/Categories.jsx";
import Slider from "./Components/Slider.jsx";
import ProductsList from "./productos/ProductsList.jsx";

export default function initialApp(){
    
    return (
        <>
            <h1>Toque de belleza - Next.js 13 App</h1>
            <p>Proyecto Personal</p>
            <Slider /> 
            <Categories />
            <ProductsList amount={5}/> 
            <div style={{height: '50vh'}}></div>
        </>
    )
}