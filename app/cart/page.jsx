'use client'

import { useEffect, useState } from "react";
import { UseMyContext } from "../Context/Context"
import { getDetailProduct, getTotalCart } from "../helper/functions";
import css from './page.module.css';
import ProductCart from "./ProductCart";
import Image from "next/image";
import DifuminedBorder from "../Components/DifuminedBorder";

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
        <section className={css.container}>
          <div className={css.pageContainer}>
                <div className={css.sideCart}>
                    <h2>
                        Su carrito:
                    </h2>
                    <p>
                        En Toque de Belleza utilizamos Whatsapp para coordinar la compra de productos, se recibe transferencia o efectivo, en un futuro sera implementado el pago por tarjeta y envio online.
                    </p>
                    {
                        !!renderedCart.length &&
                    <>
                    <p>
                        Total: ${getTotalCart(renderedCart)}
                    </p>
                    <button>
                        Comprar por wtsp(?)
                    </button>
                    </>
                    }
                </div>
                <DifuminedBorder horizontal={false}/>
                {
                renderedCart.length ? 
                <div className={css.cartContainer}>
                    {renderedCart.lenght === 0 ? <p>carrito vacio</p> : renderedCart.map(product => <ProductCart data={product} key={product.name}/>)}
                </div>
                :
                <div className={css.emptyCartContainer}>
                    <h2> Tus productos aparecerán aquí:</h2>
                    <div className={css.emptyCartImageContainer}>
                        <Image src={'/granCarrito.png'} alt="carrito vacio" fill />
                    </div>   
                </div>
                }
            </div>
        </section>
    )
}