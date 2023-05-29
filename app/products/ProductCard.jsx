import Image from "next/image";

export default function ProductCard({value}){
    return (
        <div key={value.name}>
            <Image src={value.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={100} height={100} alt={value.title}/>
            <h3>
                {value.name} {value.price + '$'}
            </h3>
            <h4>
                {value.size}
            </h4>
            <p>
                sobre {value.name}: {value.description}
                {value.modeOfUse && (<p>modo de uso: {value.modeOfUse}</p>)}
                {value.precaution && (<p>precauciones: {value.precaution}</p>)}
                {value.aplication && (<p>aplicacion: {value.aplication}</p>)}
            </p>
        </div> 
    )
}