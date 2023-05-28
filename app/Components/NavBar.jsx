import Link from "next/link";
import css from './NavBar.module.css'

const links = [
    {
    name: 'home',
    link: '/'
    },{
    name: 'about',
    link: '/about'
    },{
    name: 'products',
    link: '/products'
    },{
    name: 'cart',
    link: '/cart'
    }
]

export default function NavBar(){
    return (
        <header className={css.header}>
            <nav>
                <ul className={css.ul}>
                    {links.map(({name, link})=>
                    <li key={link}>
                        <Link href={link}>
                            {name}
                        </Link>
                    </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}