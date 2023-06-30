import Image from "next/image";
import Link from "next/link";
import CartDot from "./CartDot";
import { UseMyContext } from "@/app/Context/Context";
import Burger from "./Burger";

const links = [
    {
    name: 'Inicio',
    link: '/'
    },{
    name: 'Nuestros productos',
    link: '/productos'
    },{
    name: 'Como comprar?',
    link: '/comprar'
    }
]

export default function Navigation({ css, setIsSearching }) {
    const { isMobile } = UseMyContext()

  return (
        <>
            <ul className={css.ul}>
                        <li className={css.containerLupaImage}>
                            <Image onClick={()=>setIsSearching(value=>!value)} className={css.cartImage} src={'/Lupa.png'} fill alt="Buscador"/>
                        </li>
                        {
                            !isMobile &&
                        (links.map(({name, link})=>
                        <li key={name} className={css.navbarText}>
                            <Link href={link} onClick={()=>setIsSearching(false)}>
                                {name}
                            </Link>
                        </li>
                        ))
                        }

                        <CartDot css={css} setIsSearching={setIsSearching}/>
                        
                        {
                            isMobile && <Burger css={css} links={links}/>
                        }

            </ul>
        </>
  )
}
