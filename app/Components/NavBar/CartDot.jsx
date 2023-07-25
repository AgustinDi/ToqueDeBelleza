import Image from "next/image";
import Link from "next/link";
import { UseMyContext } from "@/app/Context/Context";
import { usePathname } from 'next/navigation'

export default function CartDot({ setIsSearching, setOpenMenu }) {
    const { hasProducts } = UseMyContext();
    const pathname = usePathname()
    
    return (
        <li className='navBcontainerCartImage'>
            <Link href={pathname !== '/cart' ? '/cart' : '/'} onClick={()=>{setIsSearching(false);setOpenMenu(false)}}>
                {hasProducts().length ? <div className='navBcontainerCartDot'>{hasProducts().length > 9 ? 9 : hasProducts().length}</div> : null}
                <div style={{position: 'relative', width: '100%', height: '100%'}}>
                    <Image className='navBcartImage' src={'/carrito.png'} fill alt="carro de compras" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
            </Link>
        </li> 
  )
}
