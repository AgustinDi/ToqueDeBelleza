import Image from "next/image";
import Link from "next/link";
import { UseMyContext } from "@/app/Context/Context";

export default function CartDot({ css, setIsSearching }) {
    const { hasProducts } = UseMyContext();

    return (
        <li className={css.containerCartImage}>
            <Link href={'/cart'} onClick={()=>setIsSearching(false)}>
                {hasProducts().length ? <div className={css.containerCartDot}>{hasProducts().length}</div> : null}
                <Image className={css.cartImage} src={'/carrito.png'} fill alt="carro de compras"/>
            </Link>
        </li> 
  )
}
