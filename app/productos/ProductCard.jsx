import Image from "next/image";
import css from './ProductCard.module.css';
import Link from "next/link";
import loadingImage from '../../public/Loading.png';
import AddToCart from "./AddToCart.jsx";


// {
//     "name": "",
//     "category": "",
//     "price": 800,
//     "size": "250ml",
//     "description": "",
//     "howToUse": "",
//     "precaution": "",
//     "aplication": "",
//     "image": ""
// }

export default function ProductCard({value}){
    return (
        <div key={value.name} className={css.card}>
            <Link href={'/producto/' + value.name}>
            <div className={css.imageContainer}>
                <Image src={value.image || loadingImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt={value.name}/>
            </div>
            <div className={css.title}>
                <h3>
                    {value.name} 
                </h3>
                <h4>
                    {value.size} - {value.price + '$'}
                </h4>
            </div>
            </Link>
            <AddToCart value={value}/>
        </div> 
    )
}