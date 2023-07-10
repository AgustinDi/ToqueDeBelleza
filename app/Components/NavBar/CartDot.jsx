import Image from "next/image";
import Link from "next/link";
import { UseMyContext } from "@/app/Context/Context";

export default function CartDot({ setIsSearching }) {
    const { hasProducts } = UseMyContext();

    return (
        <li className='navBcontainerCartImage'>
            <Link href={'/cart'} onClick={()=>setIsSearching(false)}>
                {hasProducts().length ? <div className='navBcontainerCartDot'>{hasProducts().length}</div> : null}
                <Image className='navBcartImage' src={'/carrito.png'} fill alt="carro de compras" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </Link>
        </li> 
  )
}
