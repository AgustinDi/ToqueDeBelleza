import Image from "next/image";
import Link from "next/link";
import CartDot from "./CartDot";
import { useEffect, useState } from "react";
import { UseMyContext } from "@/app/Context/Context";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";

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

export default function Navigation({ css, setIsSearching, isSearching }) {
    const [ openMenu, setOpenMenu ] = useState(false)
    const { isMobile } = UseMyContext()
    
    useEffect(()=>{
        if(isSearching && openMenu) {
            setIsSearching(true)
            setOpenMenu(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSearching, openMenu])

    useEffect(()=>{
        
    },[])

    function setOverflow() {
        document.body.style.overflow = 'unset';
    }

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
                            isMobile && <Burger css={css} links={links} setOpenMenu={setOpenMenu} setIsSearching={setIsSearching}/>
                        }

            </ul> 
            {
                isMobile ? <BurgerMenu links={links} css={css} setOpenMenu={setOpenMenu} openMenu={openMenu}/> : setOverflow()
            }
        </>
  )
}
