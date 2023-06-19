import css from './SideMenuCategory.module.css';
import Link from 'next/link';
import productsJson from './Products.json';

export default function SideMenuCategory() {
    const categoriesSet = new Set(productsJson.data.map(product => product.category))
    const categorias = [...categoriesSet];

    return (
        <div className={css.sideMenu}>
            <h3>Categorias de Productos:</h3>
            <ul className={css.ul}>
                <Link href={'/productos/'}><li>Todos</li></Link>
                {categorias.map(categoria => <Link key={categoria} href={'/productos/' + categoria}><li>{categoria}</li></Link>)}
            </ul>
        </div>
  )
}
