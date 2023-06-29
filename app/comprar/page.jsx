import Card from './Card';
import css from './page.module.css';

export default function Page(){
    const cards = [
        {
            alt: 'granCarrito',
            image: '/granCarrito.png',
            title: 'Elegí los productos que vas a comprar',
            subTitle: 'Agregando cada uno al carrito'
        },{
            alt: 'granCarrito',
            image: '/granCarrito.png',
            title: 'Confirma la compra y continua via Whatsapp',
            subTitle: 'Cande recibirá los productos y te comentara sobre ellos'
        },{
            alt: 'granCarrito',
            image: '/granCarrito.png',
            title: 'Paga con efectivo o transferencia',
            subTitle: 'Una vez coordinado el pago, se llegara a un acuerdo para retirar los productos. Tambien existe la posibilidad de contratar a un tercero para el envio.'
        }
    ]

    return (
        <div>
            <h1 style={{paddingTop: '10px'}}>Como comprar?</h1>
                <h4 style={{paddingTop: '10px'}}>
                    En <a href="./">toque de belleza</a> Realizar una compra es muy simple, sigue estos pasos:
                </h4>
            <div className={css.cardsContainer}>
                {cards.map(value => <Card key={value.title} data={value} style={css.card}/>)}
            </div>
            <div>
                Si necesitás más información, no dudes en <a href='./'>dejarnos un mensaje</a>
                {/* falta agregar el redirect a wtsp */}
            </div>
        </div>
    )
}