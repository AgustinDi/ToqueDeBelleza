import Image from "next/image";
import css from './ProductCard.module.css';

export default function ProductCard({value}){
    return (
        <div key={value.name} className={css.card}>
            <Image src={value.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={100} height={100} alt={value.name}/>
            <div className={css.title}>
                <h3>
                    {value.name} {value.price + '$'}
                </h3>
                <h4>
                    {value.size}
                </h4>
            </div>
            {/* <div>          ESTA DATA ES PARA EL DETALLE
                <p>sobre {value.name}: <br/> {value.description}</p>
                {value.modeOfUse && (<p>modo de uso: <br/> {value.modeOfUse}</p>)}
                {value.precaution && (<p>precauciones: <br/> {value.precaution}</p>)}
                {value.aplication && (<p>aplicacion: <br/> {value.aplication}</p>)}
            </div> */}
        </div> 
    )
}