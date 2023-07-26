import Image from "next/image";
import './ProductCard.css';
import Link from "next/link";
import loadingImage from '../../public/Loading.png';
import AddToCart from "./AddToCart.jsx";

export default function ProductCard({value}){
    return (
        <div key={value.name} className='prccard'>
            <Link href={'/producto/' + value.name}>
            <div className='prcimageContainer'>
                <Image src={value.images[0] || loadingImage} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt={value.name}/>
            </div>
            <div className='prctitle'>
                <h3>
                    {value.name} 
                </h3>
                <div className="prcsubtitle">
                    <h4>
                        {value.size} 
                    </h4>
                    <h4>
                        {value.price + '$'}
                    </h4>
                </div>
            </div>
            </Link>
            <div className="prcbuttonContainer">
                <AddToCart value={value}/>
            </div>
        </div> 
    )
}