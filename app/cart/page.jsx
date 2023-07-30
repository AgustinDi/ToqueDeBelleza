/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import { UseMyContext } from "../Context/Context"
import { getDetailProduct, getTotalCart } from "../helper/functions";
import './page.css';
import ProductCart from "./ProductCart";
import Image from "next/image";
import DifuminedBorder from "../Components/DifuminedBorder";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../Components/Button";
import Swal from "sweetalert2";

export default function Cart() {
    const { cart, cleanAllCart, isMobile } = UseMyContext();
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

    function showLoading(){{
        Swal.fire({
          html: '<h3>Estas siendo redirigid@!</h3>',
          allowEscapeKey: false,
          allowEnterKey: false,
          timer: 3000,
          didOpen: () => {
            Swal.showLoading()
          }
        })
      }
    }

    function buy() {
        if(renderedCart.lenght === 0) return
        const inicio = `Hola Cande! Me gustaria hacerte un pedido:\r\n\r\n`
        const pedido = renderedCart.map(({amount, price, name}) => `${amount} x ${name} - $${price}\r\n`).join('')
        const total = `\r\nTotal: $${getTotalCart(renderedCart)}`
        const url = `https://wa.me/${5493547667348}?text=${encodeURI(inicio+pedido+total.substring(0,pedido.length - 2))}`
        cleanAllCart();
        showLoading();
        //En mobile, usando router.push, al volver al sitio deirectamente se vuelve a redirigir a whatsapp
        isMobile
        ? window.open(url)
        : router.push(url)
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
                    {renderedCart.lenght === 0 
                        ? <p>carrito vacio</p> 
                        : renderedCart.map(product => <ProductCart data={product} key={product.name}/>)}
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
                <>
                    <div className='cartemptyCartContainer'>
                        <h2>{loading ? 'Cargando...' : 'Tus productos aparecerán aquí:'}</h2>
                            <div className='cartemptyCartImageContainer'>
                                <Image src={'/granCarrito.png'} alt="carrito vacio" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                            </div>
                    </div>
                </>
                }
            </div>
            {
                !renderedCart.length && !loading &&
                <p className='cartemptyBottomMessage'>
                    Agrega algunos <Link href='/productos' className="pinkyText">Productos</Link> a tu carrito!
                </p>
            }
        </section>
    )
}