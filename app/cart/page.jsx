/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import { UseMyContext } from "../Context/Context"
import { getDetailProduct, getTotalCart } from "../helper/functions";
import './page.css';
import ProductCart from "./ProductCart";
import Image from "next/image";
import DifuminedBorder from "../Components/DifuminedBorder";
import { redirect, useRouter } from "next/navigation";
import Button from "../Components/Button";

export default function Cart() {
    const {cart} = UseMyContext();
    const [renderedCart, setRenderedCart] = useState([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    
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
    
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 200);
        return () => clearTimeout(timer);
    }, []);

    function buy() {
        if(renderedCart.lenght === 0) return
        const inicio = `Hola Cande! Me gustaria hacerte un pedido:\r\n`
        const pedido = renderedCart.map(({amount, size, name}) => `${amount} x ${name} - ${size}\r\n`).join('')
        const url = `https://wa.me/${5493547673524}?text=${encodeURI(inicio+pedido.substring(0,pedido.length - 2))}`
        router.push(url)
    }
    
    return (
        <section className='cartcontainer'>
          <div className='cartpageContainer'>
                <div className='cartsideCart'>
                    <h2>
                        Su carrito:
                    </h2>
                    <p>
                        En Toque de Belleza utilizamos Whatsapp para coordinar la compra de productos, se recibe transferencia o efectivo, en un futuro sera implementado el pago por tarjeta y envio online.
                    </p>
                </div>
                <DifuminedBorder horizontal={false}/>
                {
                renderedCart.length ? 
                <div className='cartcartContainer'>
                    {renderedCart.lenght === 0 ? <p>carrito vacio</p> : renderedCart.map(product => <ProductCart data={product} key={product.name}/>)}
                    {renderedCart.length !== 0 && 
                    <div className='cartbigcartContainer'>
                        <div style={{width: '100%'}}>
                            <div className='carttotalContainer'>
                                <p>    
                                    Total: 
                                </p>
                                <p>
                                    ${getTotalCart(renderedCart)}
                                </p>
                            </div>
                            <div className='cartbuttonBuy'>
                                <Button click={buy} content={'Realizar compra'}/>
                            </div> 
                        </div>
                    </div>
                    }
                </div>
                :
                <div className='cartemptyCartContainer'>
                    <h2>{loading ? 'Cargando...' : 'Tus productos aparecerán aquí:'}</h2>
                        <div className='cartemptyCartImageContainer'>
                            <Image src={'/granCarrito.png'} alt="carrito vacio" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                </div>
                }
            </div>
        </section>
    )
}