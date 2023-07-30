import Card from './Card';
import './page.css';

export default function Page(){
    const cards = [
        {
            alt: 'granCarrito',
            image: '/Comprar 1.png',
            title: 'Elegí los productos que vas a comprar',
            subTitle: 'Agregando cada uno al carrito'
        },{
            alt: 'granCarrito',
            image: '/Comprar 2.png',
            title: 'Confirma la compra y continua via Whatsapp',
            subTitle: 'Cande recibirá los productos y te comentara sobre ellos'
        },{
            alt: 'granCarrito',
            image: '/Comprar 3.png',
            title: 'Paga con efectivo o transferencia',
            subTitle: 'Una vez coordinado el pago, se llegara a un acuerdo para retirar los productos. * Tambien existe la posibilidad de contratar a un tercero para el envio.'
        }
    ]

    return (
        <div>
            <h1 style={{paddingTop: '10px'}}>¿Cómo comprar?</h1>
                <h4 style={{paddingTop: '10px', margin: '1rem 10px'}}>
                    En <a className='comprarPinky' href="./">toque de belleza</a> Realizar una compra es muy simple, sigue estos pasos:
                </h4>
            <div className='cardsContainer'>
                {cards.map(value => <Card key={value.title} data={value}/>)}
            </div>
            <p className='bottomMessage'>
                Si necesitás más información, no dudes en <a className='comprarPinky' href='https://wa.me/5493547667348?text=Hola cande, tengo una consulta:'>dejarnos un mensaje</a>.
            </p>
        </div>
    )
}