'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import css from './NavBar.module.css';
import Image from "next/image";
import Searcher from "./Searcher";
import { usePathname } from "next/navigation";
import { UseMyContext } from "../Context/Context";

const links = [
    {
    name: 'Inicio',
    link: '/'
    },{
    name: 'productos',
    link: '/productos'
    },{
    name: 'sobre nosotros',
    link: '/about'
    }
]

export default function NavBar(){
    const [isSearching, setIsSearching] = useState(false);
    const [isScrolling, setIsScrolling] = useState(true);
    const [scroll, setScroll] = useState();
    const router = usePathname();
    const { hasProducts } = UseMyContext();
    const [url, setUrl] = useState(router);

    const onScroll = () => {
        setScroll(prev =>{
            const change = prev >= window.scrollY;
            if(!change) setIsSearching(false)
            setIsScrolling(prevValue => window.scrollY >= 110 ? change : prevValue)
            return window.scrollY
        })
    }
    const searched = () => {
        setIsSearching(false)
    }

    useEffect(()=>{
        if(router !== url){
            setUrl(router)
            setIsScrolling(true)
        } 
    }, [router])

    useEffect(()=>{
        setUrl(router)
        window.onscroll = onScroll
    }, [])

    return (
        <header className={css.header} style={{top: isScrolling ? '0' : '-110px'}}>
            <nav className={css.nav}>
                <Link href={'/'}>
                    <Image className={css.logo} src={"/logoDark.png"} height={90} width={80} alt={'logo'} priority={true}/>
                </Link>
                <ul className={css.ul}>
                    <li className={css.containerLupaImage}>   
                        <Image onClick={()=>setIsSearching(value=>!value)} className={css.cartImage} src={'/Lupa.png'} fill alt="Buscador"/>
                    </li>
                    {links.map(({name, link})=>
                    <li key={name} className={css.navbarText}>
                        <Link href={link} onClick={()=>setIsSearching(false)}>
                            {name}
                        </Link>
                    </li>
                    )}
                    <li className={css.containerCartImage}>
                        <Link href={'/cart'} onClick={()=>setIsSearching(false)}>
                            <div className={css.containerCartDot}>{hasProducts().length}</div>
                            <Image className={css.cartImage} src={'/carrito.png'} fill alt="carro de compras"/>
                        </Link>
                    </li> 
                </ul>
            </nav>
        <div className={css.searcher} style={{position: 'absolute', overflowX: 'hidden', top: isSearching ? '110px' : '75px', zIndex: -1}}>
            <Searcher searched={searched} isSearching={isSearching}/>
        </div>
        </header>
    )
}