import './ProductCard.css';
import Link from "next/link";
import AddToCart from "./AddToCart.jsx";
import ImageShow from "./ImageShow";

export default function ProductCard({value}){
    return (
        <div key={value.name} className='prccard'>
            <Link href={'/producto/' + value.name}>
            <ImageShow value={value} />
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