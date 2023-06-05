import Categories from "./Components/Categories.jsx";

export default function initialApp(){
    
    return (
        <>
            <h1>Toque de belleza - Next.js 13 App</h1>
            <p>Proyecto Personal</p>
            <Categories />
            <div style={{height: '50vh'}}></div>
        </>
    )
}