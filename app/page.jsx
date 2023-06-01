import productsJson from './productos/Products.json'

export default function initialApp(){
    
    return (
        <>
            <h1>Toque de belleza - Next.js 13 App</h1>
            <p>Proyecto Personal</p>
            {productsJson.data?.map(x=><p>{x.category}</p>)}
        </>
    )
}