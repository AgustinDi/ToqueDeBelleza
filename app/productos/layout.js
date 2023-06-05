import Link from 'next/link'
import css from './layout.module.css'
import productsJson from './Products.json'

export default function sideLayout({ children }) {
  const categoriesSet = new Set(productsJson.data.map(product => product.category))
  const categorias = [...categoriesSet];

  return (
    <div className={css.sideLayout}>
        <div className={css.sideMenu}>
        <Link href={'/productos/'}><p>Todos</p></Link>
          {categorias.map(categoria => <Link key={categoria} href={'/productos/' + categoria}><p>{categoria}</p></Link>)}
        </div>
        {children}
    </div>
  )
}
