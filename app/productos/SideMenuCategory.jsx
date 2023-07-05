'use client'

import css from './SideMenuCategory.module.css';
import Link from 'next/link';
import productsJson from './Products.json';
import { UseMyContext } from '../Context/Context';

export default function SideMenuCategory() {
    const categoriesSet = new Set(productsJson.data.map(product => product.category))
    const categorias = [...categoriesSet];
    const { isMobile } = UseMyContext();

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
            : <div className={css.mobileSideMenu}>

            </div>
            }
        </div>
  )
}
