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

    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <Link href={'/'}>
                    <Image className={css.logo} src={"/logoDark.png"} height={90} width={80} alt={'logo'} priority={true}/>
                </Link>
                <ul className={css.ul}>
                <button onClick={()=>setIsSearching(value=>!value)}>searcher</button>
                    {links.map(({name, link})=>
                    <li key={name}>
                        <Link href={link}>
                            {name}
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>
        <div style={{display: isSearching ? '' : 'none', position: 'absolute', overflowX: 'hidden'}}>
            <Searcher isSearching={isSearching}/>
        </div>
        </header>
    )
}