'use client'

import css from './SideMenuCategory.module.css';
import Link from 'next/link';
import productsJson from './Products.json';
import { UseMyContext } from '../Context/Context';
import { useState } from 'react';

export default function SideMenuCategory() {
    const categoriesSet = new Set(productsJson.data.map(product => product.category))
    const categorias = [...categoriesSet];
    const [open, setOpen] = useState(false);
    const { isMobile } = UseMyContext();

    const xActive = {
        transform: 'translate(0px, 0px)'
    }
    const xInactive = {
        transform: 'translate(-100px, 0px)'
    }
    const ulActive = {
        transform: 'translate(0px, 0px)'
    }
    const ulInactive = {
        transform: 'translate(-280px, 0px)'
    }

    return (
        <div className={css.sideMenu}>
            { !isMobile 
            ? <>
            <h3>Filtro por Categoria:</h3>
            <ul className={css.ul}>
                <Link href={'/productos/'}><li>Todos</li></Link>
                {categorias.map(categoria => <Link key={categoria} href={'/productos/' + categoria}><li>{categoria}</li></Link>)}
            </ul>
            </>
            : <div className={css.containerMobileSideMenu}>
                <div className={css.mobileSideMenu}>
                    <div className={css.titleMobileSideMenu}>
                        <h4 onClick={()=>setOpen(true)}>Categorias</h4> 
                        <button onClick={()=>setOpen(false)} style={open ? xActive : xInactive}>X</button>
                    </div>
                </div>
                <ul className={css.ul}style={open ? ulActive : ulInactive}>
                    <Link  href={'/productos/'} onClick={()=>setOpen(false)}><li>Todos</li></Link>
                    {categorias.map(categoria => <Link key={categoria} href={'/productos/' + categoria} onClick={()=>setOpen(false)}><li>{categoria}</li></Link>)}
                </ul>
            </div>
            }
        </div>
  )
}
