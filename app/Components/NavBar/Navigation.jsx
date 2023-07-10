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

export default function Navigation({ setIsSearching, isSearching }) {
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
            <ul className='navBul'>
                        <li className='navBcontainerLupaImage'>
                            <Image onClick={()=>setIsSearching(value=>!value)} className='navBcartImage' src={'/Lupa.png'} fill alt="Buscador"/>
                        </li>
                        {
                            !isMobile &&
                        (links.map(({name, link})=>
                        <li key={name} className='navBnavbarText'>
                            <Link href={link} onClick={()=>setIsSearching(false)}>
                                {name}
                            </Link>
                        </li>
                        ))
                        }

                        <CartDot setIsSearching={setIsSearching}/>
                        
                        {
                            isMobile && <Burger links={links} setOpenMenu={setOpenMenu} setIsSearching={setIsSearching}/>
                        }

            </ul> 
            {
                isMobile ? <BurgerMenu links={links} setOpenMenu={setOpenMenu} openMenu={openMenu}/> : setOverflow()
            }
        </>
  )
}
