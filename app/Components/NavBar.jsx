'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import css from './NavBar.module.css';
import Image from "next/image";
import Searcher from "./Searcher";

const links = [
    {
    name: 'Inicio',
    link: '/'
    },{
    name: 'productos',
    link: '/productos'
    },{
    name: 'cart',
    link: '/cart'
    }
]

export default function NavBar(){
    const [isSearching, setIsSearching] = useState(false);
    const [isScrolling, setIsScrolling] = useState(true);
    const [scroll, setScroll] = useState();

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
        window.onscroll = onScroll
    }, [])

    return (
        <header className={css.header} style={{top: isScrolling ? '0' : '-110px'}}>
            <nav className={css.nav}>
                <Link href={'/'}>
                    <Image className={css.logo} src={"/logoDark.png"} height={90} width={80} alt={'logo'} priority={true}/>
                </Link>
                <ul className={css.ul}>
                <button onClick={()=>setIsSearching(value=>!value)}>searcher</button>
                    {links.map(({name, link})=>
                    <li key={name}>
                        <Link href={link} onClick={()=>setIsSearching(false)}>
                            {name}
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>
        <div className={css.searcher} style={{position: 'absolute', overflowX: 'hidden', top: isSearching ? '110px' : '75px', zIndex: -1}}>
            <Searcher searched={searched} isSearching={isSearching}/>
        </div>
        </header>
    )
}