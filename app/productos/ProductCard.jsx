import Image from "next/image";
import css from './ProductCard.module.css';
import Link from "next/link";

export default function ProductCard({value}){
    return (
        <div key={value.name} className={css.card}>
            <Link href={'/producto/' + value.name}>
            <Image src={value.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={150} height={150} alt={value.name}/>
            <div className={css.title}>
                <h3>
                    {value.name} 
                </h3>
                <h4>
                    {value.size} - {value.price + '$'}
                </h4>
            </div>
            {/* <div>          ESTA DATA ES PARA EL DETALLE
                <p>sobre {value.name}: <br/> {value.description}</p>
                {value.modeOfUse && (<p>modo de uso: <br/> {value.modeOfUse}</p>)}
                {value.precaution && (<p>precauciones: <br/> {value.precaution}</p>)}
                {value.aplication && (<p>aplicacion: <br/> {value.aplication}</p>)}
            </div> */}
        </Link>
        </div> 
    )
}