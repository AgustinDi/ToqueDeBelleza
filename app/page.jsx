import Categories from "./Components/Categories.jsx";
import Carousel from "./Components/Carousel.jsx";
import ProductsList from "./productos/ProductsList.jsx";
import ProductBanner from "./Components/ProductBanner.jsx";

export default function initialApp(){
    const images = [
        {
            src: "/Banner 1 - PinkVersion.png",
            index: 0,
            alt: 'Banner 1'
        },
        {
            src: "/Banner 2 - PinkVersion.png",
            index: 1,
            alt: 'Banner 2'
        },
        {
            src: "/Banner 3 - PinkVersion.png",
            index: 2,
            alt: 'Banner 3'
        }
    ]
    
    return (
        <>
            <Carousel images={images} name={'Carousel'}/>
            <ProductBanner text={'Mira Todos nuestros productos aquí!'} big={true}/>
            <h1 style={{marginBottom: '40px'}}>Categorias:</h1>
            <Categories />
            <h2>Productos más recomendados:</h2>
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <ProductsList amount={4}/>
            </div>
            <ProductBanner text={'Ver todos los productos'} big={false}/>
        </>
    )
}