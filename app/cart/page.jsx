'use client'

import { useEffect, useState } from "react";
import { UseMyContext } from "../Context/Context"
import { getDetailProduct, getTotalCart } from "../helper/functions";
import ProductCart from "./ProductCart";

export default function Cart() {
    const {cart} = UseMyContext();
    const [renderedCart, setRenderedCart] = useState([])
    
    function getCart(){
        let products = [];
        for (const property in cart) {
            if(cart[property] !== 0){
                let data = getDetailProduct(property)
                data.amount = cart[property];
                products.push(data)
            }
        }
        setRenderedCart(products)
    }

    useEffect(()=>{
        getCart()
    },[cart])

    return (
        <>
            <h2>Su carrito:</h2>
            <hr />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '300px'}}>
                    <h2>
                        Su compra:
                    </h2>
                    <p>
                        En Toque de Belleza utilizamos Whatsapp para coordinar la compra de productos,
                    </p>
                    <p>
                        Total: ${getTotalCart(renderedCart)}
                    </p>
                    <button>
                        Comprar por wtsp(?)
                    </button>
                </div>
                <div style={{display: 'flex', gap: '30px', paddingBottom: '30px',  flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
                    {renderedCart && renderedCart.map(product => <ProductCart data={product} key={product.name}/>)}
                </div>
            </div>
        </>
    )
}