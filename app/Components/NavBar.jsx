import Link from "next/link";
import css from './NavBar.module.css';
import Image from "next/image";
import Logo from '../../public/Logo.png';
import LogoDark from '../../public/Logo_dark.png';

const links = [
    {
    name: 'Inicio',
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
            <nav className={css.nav}>
                <Link href={'/'}>
                    <Image className={css.logo} src={LogoDark} width={100} alt={'logo'} priority={true}/>
                </Link> 
                <ul className={css.ul}>
                    {links.map(({name, link})=>
                    <li key={name}>
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