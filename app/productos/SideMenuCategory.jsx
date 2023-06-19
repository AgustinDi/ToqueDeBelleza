import css from './layout.module.css';
import Link from 'next/link';
import productsJson from './Products.json';

export default function SideMenuCategory() {
    const categoriesSet = new Set(productsJson.data.map(product => product.category))
    const categorias = [...categoriesSet];

    return (
        <div className={css.sideMenu}>
        <Link href={'/productos/'}><p>Todos</p></Link>
            {categorias.map(categoria => <Link key={categoria} href={'/productos/' + categoria}><p>{categoria}</p></Link>)}
        </div>
  )
}
