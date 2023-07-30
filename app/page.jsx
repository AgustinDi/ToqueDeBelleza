import Categories from "./Components/Categories.jsx";
import Carousel from "./Components/Carousel.jsx";
import ProductsList from "./productos/ProductsList.jsx";

export default function initialApp(){
    const images = [
        {
            src: "/Banner 1 - Toque de Belleza.png",
            index: 0
        },
        {
            src: "/Banner 2 - Toque de Belleza.png",
            index: 1
        },
        {
            src: "/Loading.png",
            index: 2
        },
        {
            src: "/Loading.png",
            index: 3
        },
    ]
    
    return (
        <>
            <Carousel images={images} name={'Carousel'}/>
            <h3>Nuestras Categorias:</h3>
            <Categories />
            <h3>Nuestros productos mas recomendados:</h3>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <ProductsList amount={4}/>
            </div>
        </>
    )
}