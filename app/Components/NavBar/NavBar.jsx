/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import css from './NavBar.module.css';
import Searcher from "./Searcher";
import Navigation from "./Navigation.jsx";

export default function NavBar(){
    const [isSearching, setIsSearching] = useState(false);
    const [isScrolling, setIsScrolling] = useState(true);
    const [scroll, setScroll] = useState();
    const router = usePathname();
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
                <Navigation css={css} setIsSearching={setIsSearching}/>
            </nav>
        <div className={css.searcher} style={{position: 'absolute', overflowX: 'hidden', top: isSearching ? '110px' : '75px', zIndex: -1}}>
            <Searcher searched={searched} isSearching={isSearching}/>
        </div>
        </header>
    )
}