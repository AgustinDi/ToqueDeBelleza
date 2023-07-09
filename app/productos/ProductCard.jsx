import Image from "next/image";
import './ProductCard.css';
import Link from "next/link";
import loadingImage from '../../public/Loading.png';
import AddToCart from "./AddToCart.jsx";

export default function ProductCard({value}){
    return (
        <div key={value.name} className={'card'}>
            <Link href={'/producto/' + value.name}>
            <div className={'imageContainer'}>
                <Image src={value.image || loadingImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt={value.name}/>
            </div>
            <div className={'title'}>
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