/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import './NavBar.css';
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
        <header className='navBheader' style={{top: isScrolling ? '0' : '-90px'}}>
            <nav className='navBnav' style={{borderBottom: isSearching ? ' 1px solid transparent' : ' 1px solid var(--color-pinky)', boxShadow: isSearching ? 'none' : ' rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <Link href={'/'}>
                    <div className='navBlogo'>
                        <Image src={"/LogoToqueDeBellezaPinky.svg"} quality={100} fill alt={'logo'} priority={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                </Link>
                <Navigation setIsSearching={setIsSearching} isSearching={isSearching}/>
            </nav>
        <div className='navBsearcher' style={{position: 'absolute', overflowX: 'hidden', top: isSearching ? '90px' : '45px', zIndex: -1}}>
            <Searcher searched={searched} isSearching={isSearching}/>
        </div>
        </header>
    )
}